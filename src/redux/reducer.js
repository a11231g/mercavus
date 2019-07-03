import products from './Modules/products';
import app from './Modules/app';

const rootReducres = {
    products,
    app,

};

const whitelist = [
    'app',
];

export { rootReducres, whitelist };
