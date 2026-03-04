export function renderizarListaTareas(tareas) {
    // Formatea el array de tareas en formato JSON con indentación
    return JSON.stringify(tareas, null, 2);
}

// Rendirizar un mensaje genérico en formato JSON
export function renderizarMensaje(mensaje) {
    return JSON.stringify({ mensaje }, null, 2);
}

// Renderizar una tarea especifica en formato JSON
export function renderizarTarea(tarea) {
    return JSON.stringify(tarea, null, 2);
}
