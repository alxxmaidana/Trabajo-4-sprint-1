# Servidor `servier.mjs`

El **archivo del servidor** en una aplicación Node.js es el núcleo que maneja las **peticiones HTTP, enruta las
solicitudes** a los controladores correctos y coordina el flujo de la aplicación. En nuestro caso, estamos
utilizando **Express.js**, un marco minimalista para manejar rutas, solicitudes y respuestas de manera
eficiente.

Este archivo es fundamental porque:

1. **Inicializa el servidor:** Se encarga de poner en marcha el servidor y comenzar a escuchar las peticiones
   en un puerto específico.

2. **Define las rutas:** Determina qué acción realizar según la solicitud del cliente (por ejemplo, qué
   controlador debe manejar una solicitud `GET` o `POST`).

3. **Controla la respuesta al cliente:** En función de las acciones ejecutadas, envía una respuesta al cliente
   (por ejemplo, devolviendo una lista de tareas en formato JSON).

---

## Justificación

El archivo del servidor es crucial en el patrón **MVC (Modelo-Vista-Controlador)** porque actúa como el
punto de entrada principal para las solicitudes entrantes. Desde aquí, las solicitudes se enrutan a los
**controladores** que manejan la lógica de negocio a través de los **servicios** y **repositorios**. Este diseño
mantiene el servidor como una parte independiente que no se preocupa por la logica de negocio o los
detalles de almacenamiento, permitiendo que el servidor sea ligero y fácil de mantener.

---

## Explicación del Codigo del Servidor

### 1. Importación de Módulos:

**Express:** El framework Express se utiliza para crear y gestionar el servidor. Express permite manejar las rutas y solicitudes HTTP de manera muy eficiente.

**Controladores:** Importamos los controladores desde el archivo `tareaController.mjs`. Estos controladores son responsables de manejar la lógica de cada tipo de solicitud (GET, POST, PUT, DELETE) en función de la ruta.

### 2. Inicialización del Servidor:

- **`app = express()`** : Creamos una instancia de la aplicación Express. Esto es el punto de entrada
  para todas las solicitudes HTTP.
- **`PORT = 3000`** : Definimos el puerto en el que nuestro servidor escuchara las solicitudes. En este
  caso, el puerto es `3000`.

### 3. Middleware `express.json()` :

- **Funcion:** Este middleware de Express permite que la aplicacion pueda recibir y procesar el cuerpo de las solicitudes en formato JSON. Es crucial para manejar datos de tipo POST o PUT, donde el cliente envía un cuerpo de datos en JSON (por ejemplo, los datos de una tarea nueva).

### 4. Definición de las Rutas:

- **`app.get('/tareas', listarTareasController)`** : Define la ruta para obtener todas las tareas
  utilizando el método `GET`. Cuando se accede a `/tareas`, Express invoca el
  `listarTareasController`.

- **`app.get('/tareas/completadas', listarTareasCompletadasController)`** : Similar a la ruta
  anterior, pero solo devuelve las tareas que han sido completadas.

- **`app.post('/tareas', crearTareaController)`** : Define la ruta para crear una nueva tarea
  utilizando el metodo `POST` . El controlador `crearTareaController` es invocado para manejar la
  lógica de creación.

- **`app.put('/tareas/:id/completar', completarTareaController)`** : Define la ruta para
  marcar una tarea como completada, utilizando el metodo `PUT`. El parámetro `:id` en la URL se
  utiliza para identificar qué tarea debe completarse.

- **`app.delete('/tareas/:id', eliminarTareaController)`** : Define la ruta para eliminar una
  tarea específica usando el método `DELETE`. El id se pasa como parámetro para identificar la
  tarea a eliminar.

### 5. Iniciar el Servidor:

- **`app.listen(PORT)`** : Esta función inicia el servidor en el puerto especificado. En este caso, el
servidor escuchará en el puerto `3000`.

- **Callback:** El callback asociado imprime un mensaje en la consola, indicando que el servidor está
funcionando correctamente y listo para aceptar solicitudes.