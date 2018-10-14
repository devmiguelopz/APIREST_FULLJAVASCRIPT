const NameSpace = require('../../Library/System/system');
const EntityProduct = require('../../Entity/Product/product');
const LogicProduct = require('../../Logic/Product/product');
NameSpace.Controller.Product = class {
    constructor();
    GetById(request, response) {
        let result = new System.Utilities.Result();
        try {
            let product = new EntityProduct();
            product.Id = request.params.ProductId;
            result = LogicProduct.GetById(product);
        } catch (e) {
            console.log("Logic/Controllers/product.js/GetById =>", e);
            result.Code = 500;
            result.Data = {Message:"Error en el servidor"};
        }
        response.status(result.Code).send(result.Data);
    }
    GetAll(request, response) {
        let result = new System.Utilities.Result();
        try {
            let product = new EntityProduct();
            result = LogicProduct.GetAll();
        } catch (e) {
            console.log("Logic/Controllers/product.js/GetAll =>", e);
            result.Code = 500;
            result.Data = { Message: "Error en el servidor" };
        }
        response.status(result.Code).send(result.Data);
    }
    Update(request, response) {
        let result = new System.Utilities.Result();
        try {
            let product = new EntityProduct();
            product.Id = request.params.ProductId;
            product.name = request.body.name;
            product.picture = request.body.picture;
            product.price = request.body.price;
            product.category = request.body.category;
            product.description = request.body.description;
            result = LogicProduct.Update(product);
        } catch (e) {
            console.log("Logic/Controllers/product.js/Update =>", e);
            result.Code = 500;
            result.Data = { Message: "Error en el servidor" };
        }
        response.status(result.Code).send(result.Data);
    }
    Delete(request, response) {
        let result = new System.Utilities.Result();
        try {
            let product = new EntityProduct();
            product.Id = request.params.ProductId;
            result = LogicProduct.Delete(product);
        } catch (e) {
            console.log("Logic/Controllers/product.js/Delete =>", e);
            result.Code = 500;
            result.Data = { Message: "Error en el servidor" };
        }
        response.status(result.Code).send(result.Data);
    }
    Save(request, response) {
        let result = new System.Utilities.Result();
        try {
            let product = new EntityProduct();
            product.Id = request.params.ProductId;
            product.name = request.body.name;
            product.picture = request.body.picture;
            product.price = request.body.price;
            product.category = request.body.category;
            product.description = request.body.description;
            result = LogicProduct.Save(product);
        } catch (e) {
            console.log("Logic/Controllers/product.js/Save =>", e);
            result.Code = 500;
            result.Data = { Message: "Error en el servidor" };
        }
        response.status(result.Code).send(result.Data);
    }
}
module.exports = NameSpace.Controller.Product;