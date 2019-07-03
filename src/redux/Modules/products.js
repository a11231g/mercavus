import { put, delay } from 'redux-saga/effects';

import { handleSagaError } from '../../utils/handleSagaError';
import NavigationService from "../../navigators/NavigationService";


export const LOAD = 'mercavus/products/LOAD';
export const LOAD_SUCCESS = 'mercavus/products/LOAD_SUCCESS';
export const LOAD_FAILURE = 'mercavus/products/LOAD_FAILURE';




const initialState = {
    result: [],
    loaded: false,
    loading: false,
    error: ''

};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                result: action.result
            };
        case LOAD_FAILURE:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        default:
            return state;
    }
}



export function load() {
    return {
        type: LOAD,
    };
}

export function loadSuccess(result) {
    return {
        type: LOAD_SUCCESS,
        result
    };
}

export function loadFailure(error) {
    return {
        type: LOAD_FAILURE,
        error
    };
}
export function* watchLoad(client ) {
    try {
        const mocked = [
            {
                catName: 'tischwaren',
                data: [
                    {
                        name: 'Catchii',
                        desc: 'Porcelain tableware',
                        image: 'https://cdn.shopify.com/s/files/1/0003/1938/9747/collections/ca4dda3d64cc28867d4b6400a3ed4c43_1024x1024.jpg?v=1558630435',
                        price: '200 € min'
                    },
                    {
                        name: 'CHIVE',
                        desc: 'Modern Pottery and Vases',
                        image: 'https://cdn.shopify.com/s/files/1/0003/1938/9747/collections/b32f51e00552f94742418fccff7fffcb_1024x1024.jpg?v=1558630258',
                        price: '200 € min'

                    },
                    {
                        name: 'cookplay',
                        desc: 'High-quality creative tableware',
                        image: 'https://cdn.shopify.com/s/files/1/0003/1938/9747/collections/343883ed88f616ad092b4f99d5bc85c0_1024x1024.jpg?v=1560254144',
                        price: '200 € min'
                    },
                    {
                        name: 'Q Squared NYC',
                        desc: 'Melamin Tischwaren',
                        image: 'https://cdn.shopify.com/s/files/1/0003/1938/9747/collections/f103fa223bcbbb3a8cd7c0fca5085152_1024x1024.jpg?v=1560793846',
                        price: '150 € min'
                    }
                ]
            },
            {
                catName: 'shyla jewellery',
                data: [
                    {
                        name: 'Keeley Earring',
                        desc: '',
                        image: 'https://cdn.shopify.com/s/files/1/0003/1938/9747/products/ae52a537b4e0318c8561ca3bcb90b8b0.jpg?v=1561122423',
                        price: 'RRP 47,38 €'
                    },
                    {
                        name: 'Farah Earring Quartz',
                        desc: '',
                        image: 'https://cdn.shopify.com/s/files/1/0003/1938/9747/products/4670763ad62a546ae14d580e11ee08af.jpg?v=1561122235',
                        price: 'RRP 52,89 €'

                    },
                    {
                        name: 'Ray Earrings ',
                        desc: '',
                        image: 'https://cdn.shopify.com/s/files/1/0003/1938/9747/products/874251f1d1f82abe398ffac64cf66156.jpg?v=1561124682',
                        price: 'RRP 53,00 €'
                    },
                    {
                        name: 'Kat Hoop Earring Kat Hoop Earring',
                        desc: '',
                        image: 'https://cdn.shopify.com/s/files/1/0003/1938/9747/collections/f103fa223bcbbb3a8cd7c0fca5085152_1024x1024.jpg?v=1560793846',
                        price: 'RRP 50,69 €'
                    }
                ]
            },

        ];
        yield delay(1000);

        yield put(loadSuccess(mocked));
    } catch (error) {
        yield put(loadFailure());
        yield handleSagaError(error);
    }
}
