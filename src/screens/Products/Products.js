import React, { PureComponent } from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    FlatList,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ProductsStyle';
import { load } from '../../redux/Modules/products';
import ProductListItem from '../../components/productListItem/productListItem';

class Products extends PureComponent {

    componentDidMount(): void {
        const { loadConnect } = this.props;
        loadConnect();
    };

    static propTypes = {
        loadConnect: PropTypes.func.isRequired,
        products: PropTypes.arrayOf(PropTypes.any).isRequired,
        loading: PropTypes.bool.isRequired,
        loaded: PropTypes.bool.isRequired,
    };

    renderRow = (item, listIndex) =>{
        return(
            <ProductListItem key={`product-${listIndex}-${item.index}`} item={item.item} />
        )
    };

    render() {
        const { loading, loaded, products } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    {loading && !loaded
                        ? <ActivityIndicator size={'large'}/>
                        : null
                    }
                    {products && products.length > 0 && loaded
                        ? products.map((list, index)=>{
                            return(
                                <View>
                                    <Text style={styles.title} key={index}>{list.catName}</Text>
                                    <FlatList
                                        columnWrapperStyle={styles.listWrapper}
                                        data={list.data}
                                        numColumns={4}
                                        renderItem={item => {
                                            return this.renderRow(item,index);
                                        }}
                                        />
                                    <View style={styles.divider}/>
                                </View>
                            )
                            })
                        : null
                    }
                </ScrollView>
            </View>
        );
    }
}

export default connect(state => ({
    loaded: state.products.loaded,
    loading: state.products.loading,
    products: state.products.result

}), {
    loadConnect: load,
})(Products);
