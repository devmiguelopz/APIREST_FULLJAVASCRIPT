const System = require('../../Library/System/system');
const DaoProduct = require('../../Dao/Product/Product');
System.NameSpace.Logic.Product = class {
    constructor()
    GetById(entityProduct) {
        let result = new System.Utilities.Result(
            System.Enumerable.TypeResult.NoOk,
            'Objecto no instanciado',
            null,
            System.Enumerable.Message.Warning,
        );
        try {
            if (entityProduct instanceof entityProduct) {
                result = entityProduct.ValidateProduct();
                if (result.Response == System.Enumerable.TypeResult.Ok) {
                    result = DaoProduct.GetById(entityProduct);
                }
            }
        } catch (e) {
            console.log("Logic/Product/product.js/GetById =>", e);
            result.Response = System.Enumerable.TypeResult.Exception;
            result.Message = e.Message();
            result.Alert = System.Enumerable.Message.Danger;
        }
        return (result);
    }
    GetAll() {
        let result = new System.Utilities.Result(),
        );
        try {
            result = DaoProduct.GetAll();

        } catch (e) {
            console.log("Logic/Product/product.js/GetAll =>", e);
            result.Response = System.Enumerable.TypeResult.Exception;
            result.Message = e.Message();
            result.Alert = System.Enumerable.Message.Danger;

        }
        return (result);
    }
    Update(entityProduct) {
        let result = new System.Utilities.Result(
            System.Enumerable.TypeResult.NoOk,
            'Objecto no instanciado',
            null,
            System.Enumerable.Message.Warning,
        );
        try {
            if (entityProduct instanceof entityProduct) {
                result = entityProduct.ValidateProduct();
                if (result.Response == System.Enumerable.TypeResult.Ok) {
                    result = Update(entityProduct);
                    if (result.Response == System.Enumerable.TypeResult.Ok) {
                        result = DaoProduct.Update(entityProduct);;
                    }
                }
            }
        } catch (e) {
            console.log('Logic/Product/product.js/Save =>', e);
            result.Response = System.Enumerable.Update.Exception;
            result.Message = e.Message();
            result.Alert = System.Enumerable.Message.Danger;

        }
        return (entityProduct);
    }
    Delete(entityProduct) {
        let result = new System.Utilities.Result(
            System.Enumerable.TypeResult.NoOk,
            'Objecto no instanciado',
            null,
            System.Enumerable.Message.Warning,
        );
        try {
            if (entityProduct instanceof entityProduct) {
                result = entityProduct.ValidateProductId();
                if (result.Response == System.Enumerable.TypeResult.Ok) {
                    result = DaoProduct.Delete(entityProduct);
                }
            }
        } catch (e) {
            console.log("Logic/Product/product.js/Delete =>", e);
            result.Response = System.Enumerable.TypeResult.Exception;
            result.Message = e.Message();
            result.Alert = System.Enumerable.Message.Danger;
        }
        return (entityProduct);
    }
    Save(entityProduct) {
        let result = new System.Utilities.Result(
            System.Enumerable.TypeResult.NoOk,
            'Objecto no instanciado',
            null,
            System.Enumerable.Message.Warning,
        );
        try {
            if (entityProduct instanceof entityProduct) {
                result = entityProduct.ValidateProduct();
                if (result.Response == System.Enumerable.TypeResult.Ok) {
                    result = DaoProduct.Save(entityProduct);
                }
            }
        } catch (e) {
            console.log('Logic/Product/product.js/Save =>', e);
            result.Response = System.Enumerable.TypeResult.Exception;
            result.Message = e.Message();
            result.Alert = System.Enumerable.Message.Danger;

        }
        return (entityProduct);
    }
}