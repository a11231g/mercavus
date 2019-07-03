import { all, takeEvery } from 'redux-saga/effects';
import { watchRehydrate, START_REHYDRATE } from "./Modules/rehydrate";

import {
    LOAD,
    watchLoad,
} from './Modules/products';




export default function* root(client, store) {
    yield all([
        takeEvery(START_REHYDRATE, watchRehydrate, store, client),
        takeEvery(LOAD, watchLoad, store, client),
    ]);
}

