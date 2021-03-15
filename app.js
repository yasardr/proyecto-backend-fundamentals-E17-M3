// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
// Prod
const mongoose = require("mongoose");


var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
   process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

mongoose.set("debug", true);

// Local
// const mongoose = require("mongoose");

// mongoose.connect(
//     "mongodb+srv://aaronBedu:clusterBedu24@cluster0.yfntn.mongodb.net/MediManage?retryWrites=true&w=majority",
//     { useUnifiedTopology: true, useNewUrlParser: true , useCreateIndex: true}
// );

// mongoose.set("debug", true);


require("./models/Usuario");
require('./config/passport');
require("./models/Producto")
require("./models/Solicitud")
// Aquí se importarán los modelos Producto y Solicitud cuando estén listos

/*********************** Mongoose Configuration *******************************/

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes/index.js'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});
