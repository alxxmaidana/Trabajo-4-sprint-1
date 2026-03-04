import {
    listarTareas,
    listarTreasCompletas,
    crearTareas,
    completarTarea,
    eliminarTarea,
} from "../services/tareaService.mjs";

import {
    renderizarListaTareas,
    renderizarMensaje,
} from "../views/tareaVista.mjs";

// Listar todas las tareas
export function listarTareasController(req, res) {
    const tareas = listarTareas();
    res.send(renderizarListaTareas(tareas));
}

// Listar solo las tareas completadas
export function listarTareasCompletadasController(req, res) {
    const tareasCompletadas = listarTreasCompletas();
    res.send(renderizarListaTareas(tareasCompletadas));
}

// Marcar una tarea como completada
export function completarTareaController(req, res) {
    const { id } = req.params;
    completarTarea(parseInt(id));
    res.send(renderizarMensaje("Tarea marcada como completada"));
}

export function crearTareaController() {
    const { id, titulo, descripcion, completado } = req.body;
    completarTarea(parseInt(id));
    res.send(renderizarMensaje("Tarea creada éxitosamente"));
}

// Eliminar una tarea
export function eliminarTareaController(req, res) {
    const { id } = req.params;
    eliminarTarea(parseInt(id));
    res.send(renderizarMensaje("Tarea eliminada éxitosamente"));
}
