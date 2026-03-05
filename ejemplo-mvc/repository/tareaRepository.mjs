import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // Para obtner la ruta del archivo actual
import TareasDataSource from "./tareaDataSource.mjs";
import Tarea from "../models/tarea.mjs";

// Obtener la ruta del archivo tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../tareas.txt");

// Implementación concreta que extiende la interfaz TarasDataSource
export default class TareaRepository extends TareasDataSource {
    constructor() {
        super(); // Llamada al constructor de la clase base
    }

    // Implementación del metodo obtenerTodas()
    obtenerTodas() {
        try {
            // Leer el archivo de texto en formato UTF-8
            const data = fs.readFileSync(filePath, "utf-8");
            // Convertir cada tarea en una instancia de la clase Tarea
            const tareas = JSON.parse(data);
            // Convertir cada tarea en una instancia de la clase Tarea
            return tareas.map(tareaData => new Tarea(
                tareaData.id,
                tareaData.titulo,
                tareaData.descripcion,
                tareaData.completado
            ));
        } catch (error) {
            // Si ocurre un error, como que el archivo no exista, devolvemos un array vacío
            console.error("Error al leer el archivo de tareas", error);
            return [];
        }
    }

    // Implementación del método guardar
    guardar(tareas) {
        try {
            // Convertimos el array de tareas en una cadena JSON con indentación de 2 espacios
            const data = JSON.stringify(tareas, null, 2);
            // guardar la cadena JSON en el archivo de texto
            fs.writeFile(filePath, data, "utf-8");
        } catch (error) {
            // Si ocurre un error al guardar los datos, mostramso el error
            console.error("Error al guardar las tareas: ", error);
        }
    }

    // Implementación del método eliminar
    eliminar(id) {
        try {
            // Obtener todas las tareas existentes
            const tareas = this.obtenerTodas();
            // Filtrar la tara por ID
            const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
            this.guardar(tareasActualizadas);
        } catch (error) {
            console.error("Error al eliminar la tarea:", error);
        }
    }
}