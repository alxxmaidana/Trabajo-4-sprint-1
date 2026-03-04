# Capa de Servicio (Service)

La **Capa de Servicio** se encarga de contener la **lógica de negocio**. Es el intermediario entre el controlador y
la capa de persistencia. La capa de servicio interactua con el modelo y la persistencia para filtrar, validar o
manipular los datos antes de que se los pase al controlador.

--- 

## Explicación de cada función en la Capa de Servicio

#### 1. `listarTareas()`

**Función:** Servicio para obtener todas las tareas.

**Explicación teórica:**

Este servicio simplemente se encarga de llamar a la capa de persistencia (el repositorio) para obtener la lista
completa de tareas almacenadas. No realiza ninguna modificación o procesamiento adicional sobre los
datos.

**Flujo:**

- Llama al repositorio para obtener las tareas.

- Devuelve la lista de tareas tal cual fue obtenida.

#### 2. `listarTareasCompletadas()`

**Función:** Servicio para obtener solo las tareas completadas.

**Explicación teórica:**

Este servicio es responsable de filtrar las tareas que están marcadas como completadas. Primero, obtiene
todas las tareas desde la capa de persistencia, y luego aplica un filtro para devolver únicamente aquellas
cuyo estado es `completado`.

**Flujo:**

- Obtiene todas las tareas desde el repositorio.

- Filtra las tareas que están marcadas como completadas.

- Devuelve la lista filtrada.

#### 3. `crearTarea(id, titulo, descripcion, completado = false)`

**Función:** Servicio para crear una nueva tarea.

**Explicación teórica:**

Este servicio es responsable de agregar una nueva tarea. Recibe los datos de la nueva tarea desde el controlador y realiza las siguientes acciones:

- Crea una nueva instancia del modelo `Tarea`.

-  Valida que la tarea tenga un título (regla de negocio).

- Añade la tarea a la lista de tareas existentes.

- Finalmente, guarda la lista actualizada de tareas en la persistencia.

**Flujo:**

- Crea una nueva tarea usando el modelo.

- Valida que el título de la tarea no esté vacío.

- Añade la tarea a la lista existente.

- Guarda las tareas actualizadas en la persistencia.

#### 4. `completarTarea(id)`

`Función:` Servicio para marcar una tarea como completada.

**Explicación teórica:**

Este servicio localiza una tarea en particular por su `id` y la marca como completada. Llama al repositorio
para obtener todas las tareas, encuentra la tarea con el `id` proporcionado y la actualiza. Luego guarda los
cambios en la capa de persistencia.

**Flujo:**

- Busca la tarea por su `id` en la lista.

- Marca la tarea como completada.

- Guarda los cambios en la persistencia.

#### 5. `eliminarTarea(id)`

**Función:** Servicio para eliminar una tarea.

**Explicación teórica:**

Este servicio se encarga de eliminar una tarea específica. Filtra la lista de tareas para eliminar la que
coincida con el `id` proporcionado. Luego, guarda la lista actualizada de tareas en la persistencia.

`Flujo:`

- Filtra las tareas para eliminar la tarea con el `id` correspondiente.

- Guarda la lista de tareas actualizada en la persistencia.