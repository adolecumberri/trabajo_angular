const express = require("express");
const bodyParser = require("body-parser");

var path = require('path');
const port = 5000;
const app = express();

/*Parte del cors. puerto 5000.*/
const cors = require('cors');
app.use(cors());

/* Importación publica del la carpeta de js y css */
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* ROUTER */
const router = require('./routes/router')
app.use('/', router);

app.listen(port, ()=> console.log(`app on port ${port}`));