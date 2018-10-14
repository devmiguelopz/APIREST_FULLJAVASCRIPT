const NameSpace = require('../../Library/System/namespace');
NameSpace.Model.Product = class {

}










const productSchema = Schema({
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['computers', 'phones', 'accesories'] },
    description:String
})
module.exports= mongoose.model('Product', productSchema);