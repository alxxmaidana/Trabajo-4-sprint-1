// Importar la capa de persistencia (repositoirio)
import TareaRepository from "../repository/tareaRepository.mjs";
import Tarea from "../models/tarea.mjs";

// Instancia para obtener el repositorio para manejar las tareas
const tareaRepo = new TareaRepository();

// Servicio para obtener todas las tareas
export function listarTareas() {
    // Obtiene todas las tareas desde la capa de persistencia
    return tareaRepo.obtenerTodas();
}

// Servicio para obtener solo las tareas completadas
export function listarTareasCompletas() {
    // Obtiene todas las teareas de la capa de persistencia
    const tareas = tareaRepo.obtenerTodas();
    // Filtra las tareas completadas
    return tareas.filter((tarea) => tarea.completado);
}

// Servicio para crear una nueva tarea
export function crearTarea(id, titulo, descripcion, completado = false) {
    const tareas = tareaRepo.obtenerTodas();
    // Crear una nueva instancia del modelo Tarea
    const nuevaTarea = new Tarea(id, titulo, descripcion, completado);
    // Valida que la terea tenga un titulo válido
    nuevaTarea.validar();
    // Añade la nueva tarea a la lista de tareas
    tareas.push(nuevaTarea);
    // Guarda la lista actualizada de tareas en el archivo
    tareaRepo.guardar(tareas);
}

// Servicio para guardar una tarea com ocompletada
export function completarTarea(id) {
    const tareas = tareaRepo.obtenerTodas();
    const tarea = tareas.find((tarea) => tarea.id === id);
    // si la tarea existe la marca como completa
    if (tarea) {
        tarea.completar();
        // Guarda los cambios en el archivo
        tareaRepo.guardar(tareas);
    }
}

// Servicio para eliminar una tarea
export function eliminarTarea(id) {
    let tareas = tareaRepo.obtenerTodas();
    tareas.filter((tarea) => tarea.id !== id);
    tareaRepo.guardar(tareas);
}
