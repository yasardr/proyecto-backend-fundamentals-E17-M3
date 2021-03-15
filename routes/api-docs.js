const express = require("express");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

// Swagger documentation
const swaggerOptions = {
    swaggerDefinition:{
        info:{
            version: "1.0.0",
            title: "MediManage API",
            description: "Una API que ofrece la posibilidad de realizar un inventario de medicamentos para su administración, así como para la consulta de estos.",
            servers: [{
                "url": "http://localhost:3000/v1",
                "description": "Development server"
            },
            {
                "url": "https://medimanage.herokuapp.com/v1",
                "description": "Production server"
            }
        ]
        }
    },
    basePath: "/",
    // APIs a documentar
    apis: [
        "./routes/productos.js",
        "./routes/solicitudes.js",
        "./routes/usuarios.js"
    ]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;