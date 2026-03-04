# Contrador (Controller):

El **Controlador** es el intermediario entre el modelo, la vista y las solicitudes del usuario. Su función es
recibir las solicitudes HTTP, interactuar con la capa de servicio para procesar los datos, y enviar la respuesta
utilizando la vista. La lógica de negocio no debe estar en el controlador, sino en la capa de servicio.

---

## Explicacion teorica de las funciones en `tareaController.mjs`

#### 1. `listarTareasController(req, res)`

**Función:** Controlador para listar todas las tareas.

**Explicación teórica:**

En este caso, la función actúa como un controlador que maneja la solicitud HTTP GET para recuperar todas
las tareas. El controlador se encarga de recibir la solicitud, llamar al servicio que obtiene las tareas desde la
capa de persistencia, y luego formatear la respuesta en JSON utilizando la vista.

**Flujo:**

- Solicitud `GET` enviada a `/tareas`.

- El controlador llama al servicio para obtener la lista de tareas.

- La respuesta se envía en formato JSON.

#### 2. `listarTareasCompletadasController(req, res)`

**Función:** Controlador para listar solo las tareas completadas.

**Explicación teórica:**

Este controlador se encarga de gestionar la solicitud HTTP `GET` para listar únicamente las tareas que están
marcadas como completadas. El controlador delega la tarea de filtrar las tareas al servicio, que obtiene los
datos de la capa de persistencia, y luego la vista formatea esos datos para enviarlos como respuesta.

**Flujo:**

- Solicitud `GET` enviada a `/tareas/completadas`.

- El controlador solicita al servicio que filtre las tareas completadas.

- La respuesta se envía en formato JSON.

##### 3. `crearTareaController(req, res)`

**Función:** Controlador para crear una nueva tarea.

**Explicación teórica:**

Esta funcion recibe una solicitud `POST` con los datos de una nueva tarea en el cuerpo de la solicitud
`( req. body )`. El controlador pasa esos datos a la capa de servicio, donde se valida y persiste la nueva tarea.
Posteriormente, la vista envía un mensaje de confirmación al cliente.

**Flujo:**

- Solicitud `POST` enviada a `/tareas` con los datos de la tarea.

- El controlador pasa los datos al servicio, que valida y almacena la tarea.

- La vista envía un mensaje de éxito en formato JSON.

#### 4. `completarTareaController(req, res)`

**Función:** Controlador para marcar una tarea como completada.

**Explicación teórica:**

Este controlador maneja la solicitud `PUT` para actualizar una tarea específica y marcarla como completada.
Utiliza el parámetro `id` de la URL para identificar la tarea que debe actualizarse. El servicio se encarga de
realizar la actualización, y luego la vista envía un mensaje de confirmación.

**Flujo:**

- Solicitud **PUT** enviada a `/tareas/:id/completar` (por ejemplo, `/tareas/1/completar` ).

- El controlador pasa el `id` de la tarea al servicio, que la marca como completada.

- La vista envía un mensaje de éxito.

#### 5. `eliminarTareaController(req, res)`

**Función:** Controlador para eliminar una tarea.

**Explicación teórica:**

Esta función controla la solicitud `DELETE` para eliminar una tarea específica, utilizando el parámetro `id` de
la URL. El controlador delega la lógica de eliminación a la capa de servicio, que luego interactúa con la capa
de persistencia para eliminar la tarea. Finalmente, la vista envía una confirmación al cliente.

**Flujo:**

- Solicitud `DELETE` enviada a `/tareas/:id` (por ejemplo, `/tareas/1`).

- El controlador pasa el `id` de la tarea al servicio, que la elimina.

- La vista envía un mensaje de éxito confirmando la eliminación.
