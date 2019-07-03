import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
    View,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './IntroStyle';
import { skipIntro } from "../../redux/Modules/app";
import NavigationService from "../../navigators/NavigationService";



/**
 * array for react-native-app-intro-slider to make slidable pages
 */
const slides = [
    {
        key: 'somethun',
        title: 'mercavus',
        text: 'Discover unique products for your business',
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        title: 'Why mercavus?',
        text: 'Excellent products\n Low minimum order values \n Attractive payment terms \n Easy to order \n No hidden costs \n Guaranteed sales',
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        title: 'We care for happy customers',
        text: '',
        backgroundColor: '#22bcb5',
    }
];

class Intro extends React.Component {

    /**
     * propTypes check type of property assigned to the component
     */

    static propTypes = {
        skipIntroConnect: PropTypes.func.isRequired,
    };

    /**
     * each slideable page is made by _renderItem function
     */

    _renderItem = (item) => {
        return (
            <View style={[styles.slide, { backgroundColor: item.backgroundColor}]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    /**
     * when you skipp the intor it saves your action so next time in rehydration navigaties to home instead
     */

    _onDone = () => {
        const { skipIntroConnect } = this.props;
        skipIntroConnect();
        NavigationService.navigate("Products");

    };

    render() {
        return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
}

/**
 * skipintor: saves user action so next time app navigate into the home screen instead
 */

export default connect(state => ({

}), {
    skipIntroConnect: skipIntro
})(Intro);
