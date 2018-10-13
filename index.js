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
        let success = (error, product) => {
            try {
                if (error) response.status(500).send({ message: "Error al encontrar un producto" });
                if (error) response.status(404).send({ message: "No se encontro el proucto" });
                response.status(200).send({ product });
            } catch (e) {
                console.log(e);
            }
        }
        Product.find({}, success);
    } catch (e) {
        console.log(e);
    }
})
app.get('/api/products/:ProductId', (request, response) => {
    console.log('GET => /api/products/:ProductId');
    console.log(request.params)
    try {
        let productId = request.params.ProductId;
        let succes = (error, product) => {
            try {
                if (error) response.status(500).send({ message: "Error al encontrar un producto" });
                if (error) response.status(404).send({ message: "No se encontro el proucto" });
                response.status(200).send({ product });
            } catch (e) {
                console.log(e);
            }
        }
        Product.findById(productId, succes);
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
        product.save((error, productStored) => {
            console.log(error, productStored);
            if (error) response.status(500).send({ message: "Error al salvar un producto" });
            response.status(200).send({ product: productStored });
        })
    } catch (e) {
        console.log(e);
    }
})
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (error, response) => {
    try {
        if (error) throw (error);
        console.log('Connection establish');
        app.listen(port, () => console.log(`API REST corriendo en http//localhost:${port}.`))
    } catch (e) {
        console.log(e)
    }
})