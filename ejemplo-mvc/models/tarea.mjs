export default class Tarea {
    constructor(id, titulo, descripcion, completado = false) {
        this.id = id; // Identificador único de tarea
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado; // Por defecto es false
    }

    // Marcar una tarea como completada
    completar() {
        // Cambia el estado de completado a true
        this.completado = true;
    }

    // Validar que el título de la tara no esté vacio
    validar() {
        if (!this.titulo || this.titulo.trim() === "") {
            throw new Error("El titulo de la tarea es obligatorio");
        }
    }
}