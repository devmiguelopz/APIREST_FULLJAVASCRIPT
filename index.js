'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./Models/products');
const app = new express();
const port = process.env.PORT || 3001;
console.log(port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/api/products', (request, response) => { 
    console.log('GET => /api/products');
    console.log(request.params)
    try {
        let productId = request.params.ProductId;
        let actionFind = (error, listproduct) => {
            try {
                if (error) response.status(500).send({ message: "Error al encontrar un producto" });
                if (!listproduct) response.status(404).send({ message: "No se encontro el proucto" });
                response.status(200).send({ listproduct });
            } catch (e) {
                console.log(e);
            }
        }
        Product.find({}, actionFind);
    } catch (e) {
        console.log(e);
    }
})
app.get('/api/products/:ProductId', (request, response) => {
    console.log('GET => /api/products/:ProductId');
    console.log(request.params)
    try {
        let productId = request.params.ProductId;
        let actionFindById = (error, product) => {
            try {
                if (error) response.status(500).send({ message: "Error al encontrar un producto" });
                if (!product) response.status(404).send({ message: "No se encontro el proucto" });
                response.status(200).send({ product });
            } catch (e) {
                console.log(e);
            }
        }
        Product.findById(productId, actionFindById);
    } catch (e) {
        console.log(e);
    }
})
app.delete('/api/products/:ProductId', (request, response) => {
    console.log('DELETE => /api/products/:ProductId');
    console.log(request.params)
    try {
        let productId = request.params.ProductId;
        let actionFindById = (error, product) => {
            try {
                if (error) response.status(500).send({ message: "Error al encontrar un producto" });
                if (!product) response.status(404).send({ message: "No se encontro el producto a eliminar" });
                product.remove(actionRemove);
            } catch (e) {
                console.log(e);
            }
        }
        let actionRemove = (error) => {
            try {
                if (error) response.status(500).send({ message: "Error al eliminar un producto" });
                response.status(200).send({  message: "El producto ha sido eliminado"  });
            } catch (e) {
                console.log(e);
            }
        }
        Product.findById(productId, actionFindById);
    } catch (e) {
        console.log(e);
    }
})
app.put('/api/products/:ProductId', (request, response) => {
    console.log('PUT => /api/products/:ProductId');
    console.log(request.params)
    try {
        let productId = request.params.ProductId;
        let objProductUpdate = request.body;
        let actionFindByIdAndUpdate = (error) => {
            try {
                if (error) response.status(500).send({ message: "Error al actualizar el producto" });
                response.status(200).send({ message: "El producto ha sido actualizado" });
            } catch (e) {
                console.log(e);
            }
        }
        Product.findByIdAndUpdate(productId, objProductUpdate, actionFindByIdAndUpdate);
    } catch (e) {
        console.log(e);
    }
})
app.post('/api/products', (request, response) => {
    console.log('POST => /api/products');
    console.log(request.body);
    try {
        let product = new Product();
        product.name = request.body.name;
        product.picture = request.body.picture;
        product.price = request.body.price;
        product.category = request.body.category;
        product.description = request.body.description;
        let actionSave = (error) => {
            try {
                if (error) response.status(500).send({ message: "Error al guardar un producto" });
                response.status(200).send({ message:"El producto se guardo correctamente" });
            } catch (e) {
                console.log(e);
            }
        }
        product.save(actionSave);
    } catch (e) {
        console.log(e);
    }
})
mongoose.connect('mongodb://localhost:27017/Store', { useNewUrlParser: true }, (error, response) => {
    try {
        if (error) throw (error);
        console.log('Conexi�n establecida');
        app.listen(port, () => console.log(`API REST corriendo en http//localhost:${port}.`))
    } catch (e) {
        console.log(e)
    }
})