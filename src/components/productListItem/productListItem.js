import React, { PureComponent } from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './productListItemStyle';

export default class productListItem extends PureComponent {

    static propTypes = {
        item: PropTypes.objectOf(PropTypes.any).isRequired,
    };

    render() {
        const { item } = this.props;
        return (
            <View style={styles.itemContainer}>
                {item.image
                    ? <Image source={{uri: item.image}} style={styles.image} />
                    : null
                }
                <View>
                    <View style={styles.row}>
                        <View style={styles.nameWrapper}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                        <View style={styles.priceWrapper}>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </View>
                    <Text style={styles.desc}>{item.desc}</Text>

                </View>
            </View>
        );
    }
}
