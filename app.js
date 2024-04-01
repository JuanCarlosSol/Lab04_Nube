const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola!');
});

app.get('/clientes', (req, res) => {
  const clientes = [
    { nombre: 'Juan', apellido: 'Pérez' },
    { nombre: 'María', apellido: 'González' },
    { nombre: 'Pedro', apellido: 'Rodríguez' },
  ];
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  const productos = [
    { nombre: 'Producto 1', precio: 100 },
    { nombre: 'Producto 2', precio: 200 },
    { nombre: 'Producto 3', precio: 300 },
  ];
  res.json(productos);
});

app.listen(11500, () => {
  console.log('Servidor escuchando en el puerto 11500');
});
