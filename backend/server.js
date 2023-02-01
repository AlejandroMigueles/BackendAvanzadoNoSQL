//Primero llamamos a express, para poderlo usar
const express = require('express');
//Tambien llamamos a dotenv, para poder usar las variables de entorno
const dotenv = require('dotenv').config();
//Creamos una constante para el puerto
const port = process.env.PORT || 5000;
//Ahora creamos a nuestra app
const app = express();

app.use('/api/tareas', require('./routes/tareasRoutes'));

app.listen(port, ()=>console.log(`Server started on port ${port}`))

