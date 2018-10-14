const express = require('express');
const objControllerProduct = require('../Controllers/Product/product');
class Routes {
    constructor() {
        this.Api = express.Router();
        this._LoadProduct();
    }
    _LoadProduct() {
        api.get('/products', objControllerProduct.GetAll);
        api.get('/products/:ProductId', objControllerProduct.GetById);
        api.Delete('/products/:ProductId', objControllerProduct.Delete);
        api.put('/products/:ProductId', objControllerProduct.Update);
        api.post('/products', objControllerProduct.SAve);
    }
}
module.exports = Routes;
