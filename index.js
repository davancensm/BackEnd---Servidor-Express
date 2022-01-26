const express = require('express');
const fs = require('fs');
const Contenedor = require('./Contenedor')

const contenedor = new Contenedor();
const app = express();
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`Servidor inicializado en el ${server.address().port}`);
})

server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/productos', (req,res)=>{
    console.log('request a get recibido!');
    contenedor.getAll().then(productos => res.json(productos.products))
    }
)


app.get('/productoRandom', (req,res) => {
    console.log('request a get recibido!')
    contenedor.getAll().then(productos => {
        let random = Math.floor(Math.random() * productos.products.length);
        res.json(productos.products[random])
        });
    })