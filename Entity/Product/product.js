const NameSpace = require('../../Library/System/namespace');
const System = require('../../Library/System/system');
NameSpace.Enitity.Product = class {
    constructor() {
        this.Id = 0;
        this.Name = String.Enitity;
        this.Picture = String.Enitity;
        this.Price = Number.Default;
        this.Category = String.Enitity;
        this.Description = String.Enitity;
    }
    ValidateProduct() {
        let result = new System.Utilities.Result(
            System.Enumerable.TypeResult.Validation,
            String.Empity,
            null,
            System.Enumerable.Message.Info,
        );
        try {
            if (!String.IsNullOrEmpity(this.Name)) {
                result.Message = "Ingrese un nombre de producto correcto";
                return (result)
            }
            if (!String.IsNullOrEmpity(this.Picture)) {
                result.Message = "Ingrese una imagen de producto correcta";
                return (result)
            }
            if (!String.IsNullOrEmpity(this.Price) || this.Price<=0) {
                result.Message = "Ingrese un precio de producto correcto";
                return (result)
            }
            if (!String.IsNullOrEmpity(this.Category)) {
                result.Message = "Ingrese una categoria de producto correcta";
                return (result)
            }
            if (!String.IsNullOrEmpity(this.Description)) {
                result.Message = "Ingrese una descripción de producto correcta";
                return (result)
            }
            result.Response = System.Enumerable.TypeResult.Ok;
            result.Message = System.Enumerable.Message.Success;

        } catch (e) {
            console.log("Logic/Entity/product.js/ValidateProduct =>", e);
            result.Response = System.Enumerable.TypeResult.Exception;
            result.Message = System.Enumerable.Message.Warning;
        }
        return (result);
    }
    ValidateProductId() {
        let result = new System.Utilities.Result(
            System.Enumerable.TypeResult.Validation,
            String.Empity,
            null,
            System.Enumerable.Message.Info,
        );
        try {
            if (String.IsNullOrEmpity(this.Id)) {
                result.Message = "El id del producto es incorrecto";
                return (result)
            }
            result.Response = System.Enumerable.TypeResult.Ok;
            result.Message = System.Enumerable.Message.Success;

        } catch (e) {
            console.log("Logic/Entity/product.js/ValidateProduct =>", e);
            result.Response = System.Enumerable.TypeResult.Exception;
            result.Message = System.Enumerable.Message.Warning;
        }
        return (result);
    }
}
module.exports = NameSpace.Enitity.Product;

