import express from "express";

import {
    obtenerSuperheroePorIdController,
    buscarSuperheroePorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
} from "./controllers/superheroeController.mjs";

const app = express();
const PORT = 3005;

// Rutas
app.get("/superheroes/id/:id", obtenerSuperheroePorIdController);
app.get("/superheroes/atributo/:atributo/:valor", buscarSuperheroePorAtributoController);
app.get("/superheroes/edad/mayorA30", obtenerSuperheroesMayoresDe30Controller);

// Lenvantando el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});