import { StyleSheet, Dimensions } from 'react-native';
const { width } =  Dimensions.get('window');

export default  StyleSheet.create({
    itemContainer: {
        width:  width / 4,
        padding: 10,
    },
    image: {
        alignSelf: 'stretch',
        height: 100
    },
    itemName: {
        fontSize: 12,
        fontWeight: 'bold',
        flex: 1
    },
    price: {
        fontSize: 11,
        color: '#777',
        alignSelf: 'flex-end'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        flex: 1,
        marginBottom: 7
    },
    priceWrapper: {
        flex: 1,
    },
    nameWrapper: {
        flex: 1
    },
    desc: {
        fontSize: 11,
        color: '#666',
        alignSelf: 'flex-end'
    }
})
