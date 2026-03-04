# Capa de vista (View):

La **capa de vista (View)** es responsable de la presentación de los datos, formateándolos para su entrega al
cliente. En este caso, trabajamos con una API que devuelve los datos en formato **JSON**, lo que significa que
la vista toma los datos procesados por la capa de control y los formatea en JSON antes de enviarlos de
vuelta al cliente.

Esta capa es esencial para:

1. **Separar la lógica de presentación** de la lógica de negocio.
2. **Garantizar que los datos se presenten** de manera consistente y clara.
3. **Facilitar la reutilización de los métodos** de presentación en toda la aplicación.

--- 

## Eplicación del Código:

#### 1. Función `renderizarListaTareas()` :

- Toma un array de tareas y lo convierte a formato JSON `usando JSON.stringify()` , con una
indentación de 2 espacios para mejorar la legibilidad. Esta función se utiliza cuando la aplicación
necesita devolver una lista de tareas al cliente.

#### 2. Función `renderizarMensaje()` :

- Envuelve un mensaje en un objeto JSON y lo formatea con una indentacion de 2 espacios. Es
ideal para enviar mensajes de exito, error o cualquier otro tipo de notificacion al cliente.

#### 3. Función `renderizarTarea()` :

- Convierte una tarea individual en JSON con `JSON.stringify()` y lo formatea. Esta función se
utiliza cuando se necesita devolver una tarea específica, como al completar una tarea o al
solicitar una tarea por su ID.

---

## Jusficación del Diseño:


#### 1. Modularidad:

- Cada función es responsable de una tarea específica: formatear listas, tareas individuales o
mensajes. Esto sigue el **principio de responsabilidad única**, lo que hace que el código sea fácil
de mantener y reutilizar.

#### 2. Simplicidad:

Las funciones son sencillas y directas, limitandose a formatear los datos en JSON. Esto garantiza
que la capa de vista no se involucra en la lógica de negocio y se mantiene enfocada en la
presentación.

#### 3. Consistencia:

- Al centralizar la lógica de formateo, garantizamos que todas las respuestas sean consistentes en
cuanto a su formato, lo cual es crucial en una API.
