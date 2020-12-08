//Constantes
const express = require("express");
const morgan = require("morgan");
const maria = require("mariadb");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const rutas = require("./Router");

//Conectar a la base MongoDB
//const MongoDBURI = "mongodb+srv://EduRoot:root1234@maincluster.1uf7r.mongodb.net/Prototipo?retryWrites=true&w=majority";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use("/api", rutas);

app.listen(PORT, console.log(`Servidor iniciado en el puerto ${PORT}`));

/** ------------------------------------------------------------------------------------------------------------------- */