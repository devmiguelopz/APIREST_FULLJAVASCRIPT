const System = require('../../Library/System/system');
const NameSpace = require('../../Library/System/namespace');
NameSpace.Dao.Product = class {
    constructor();
    GetById(entityProduct) {
        try {
            modelProduct.findById(entityProduct.Id, (error, product) => {

            });
        } catch (e) {
            console.log("Dao/Product/product.js/GetById =>", e);
        }
    }
    GetAll() {
        try {

        } catch (e) {
            console.log("Dao/Product/product.js/GetAll =>", e);

        }
    }
    Update() {
        try {

        } catch (e) {
            console.log("Dao/Product/product.js/Update =>", e);

        }
    }
    Delete() {
        try {

        } catch (e) {
            console.log("Dao/Product/product.js/Delete =>", e);

        }
    }
    Save() {
        try {

        } catch (e) {
            console.log("Dao/Product/product.js/Save =>", e);

        }
    }
}