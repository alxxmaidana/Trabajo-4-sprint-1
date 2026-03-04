import express from "express"; // Importamos el framework express
// Importamos los controladores
import {
    listarTareasController,
    listarTareasCompletadasController,
    crearTareaController,
    completarTareaController,
    eliminarTareaController,
} from "./controllers/tareaController.mjs";

const app = express(); // Incializamos un aplicación express
const PORT = 3000; // Definimos el puerto en el que escuchará el servidor

// Middleware para permitir el manejo de solicitudes con cuerpo en formato JSON
app.use(express.json);

// Rutas
// Para obtener todas las tareas
app.get("/tareas", listarTareasController);
// obtener tareas completadas
app.get("/tareas/completadas", listarTareasCompletadasController);
// crear una nueva tarea
app.post("/tareas", crearTareaController);
// marcar tarea como completada
app.put("tareas/:id/completar", completarTareaController);
// eliminar una tarea
app.delete("/tarea/:id", eliminarTareaController);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
