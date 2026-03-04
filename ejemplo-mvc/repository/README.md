# Capa de Persistencia (Repository)

La capa de persistencia se encarga de interactuar con el sistema de almacenamiento de datos, ya sea una
base de datos o un archivo de texto. En este caso, vamos a implementar una **interfaz de persistencia** que
permita desacoplar el sistema de almacenamiento (por ejemplo, en un futuro, si queremos cambiar de un
archivo de texto a una base de datos). Este diseño garantiza que la lógica de la aplicación no dependa de
cómo o dónde se almacenan los datos, permitiendo un **cambio de base de datos** sin modificar el resto del
sistema.

---

## Justificación Teórica

El diseño de la capa de persistencia con una i**nterfaz** sigue el principio de **desacoplamiento y
responsabilidad única** del diseño de software. Esto permite que las otras capas (como la de servicios o
controladores) no tengan que conocer los detalles de cómo se gestionan los datos a nivel de persistencia. El
**desacoplamiento** facilita la **mantenibilidad y extensibilidad** del sistema, ya que si en el futuro se cambia la
base de datos (por ejemplo, de archivos a una base de datos relacional), solo se tendrá que modificar o
implementar una nueva clase de persistencia, sin afectar a la logica de negocio o de presentación.

---

## Diagrama conceptual de la Capa de Persistencia

#### 1. Interfaz de Persistencia (`TareasDataSource.mjs`):

Define los métodos que cualquier
implementación de persistencia debe seguir, asegurando que cualquier fuente de datos (archivos,
base de datos, etc.) mantenga la misma interfaz de comunicación.

#### 2. Implementacion Concreta (`TareaRepository.mjs` ):

Implementa la interfaz para manejar la
persistencia usando un archivo de texto. En un futuro, podriamos crear otra clase (por ejemplo,
`TareaDatabaseRepository` ) que implemente esta misma interfaz pero utilizando una base de datos.

---

### Archivo 1: `TareasDataSource.mjs` (Interfaz de persistencia)

Este archivo define una interfaz de persistencia que cualquier implementación concreta debe seguir. Esto
asegura que las funciones de persistencia sigan un **contrato** común, permitiendo cambiar el sistema de
almacenamiento sin afectar al resto de la aplicación.

#### Explicación Teórica de la Interfaz:

- **Clase abstracta** `TareasDataSource` :

Es una clase abstracta que define los métodos clave
(`obtenerTodas()`, `guardar()`, `eliminar()` ) que cualquier clase de persistencia concreta debe
implementar. La ventaja de este diseño es que el contrato (la forma en que los datos se solicitan y
guardan) permanece constante independientemente del sistema de almacenamiento.

- **Métodos abstractos:**
    - `obtenerTodas()` : Este metodo debera devolver todas las tareas almacenadas, sin importar si
      estan en una base de datos o en un archivo.

    - `guardar()` : Se encargara de guardar todas las tareas en el sistema de almacenamiento.

    - `eliminar ()` : Este método eliminara una tarea específica por su id.

---

### Archivo 2: `TareaRepository.mjs` (Implementación de persistencia usando Arcivos de Texto)

Este archivo contiene la implementación concreta que utiliza archivos de texto ( `tareas.txt` ) para
almacenar y recuperar las tareas. Esta clase extiende la interfaz `TareasDataSource`, lo que asegura que
cumple con el contrato definido en la interfaz.

#### Expllcacion del Codigo:

1. **Clase `TareaRepository`**:

- **Extiende la interfaz `TareasDataSource`** : Implementa los métodos abstractos definidos en la
interfaz, lo que asegura que la clase sigue el contrato para manejar las tareas.

- **Manejo de archivos:** Utiliza el modulo `fs` de Node.js para leer y escribir en el archivo tareas.txt.

2. **Método `obtenerTodas`()** :

- Primero, deserializamos el archivo de texto utilizando JSON.parse() para convertirlo en un
array de objetos planos.

- Después, recorremos cada objeto deserializado y lo reconstruimos utilizando el constructor de
la clase `Tarea` . De esta manera, garantizamos que las instancias resultantes no solo contengas
los datos, sino que tambien tengan acceso a los métodos de la clase `Tarea` (como
`completar()` y `validar()` ).
El método devuelve un array de objetos Tarea .

3. **`Método guardar()`** :

- **Funcion:** Convierte el array de tareas en una cadena JSON usando JSON. `stringify()` y guardar
los datos en el archivo `tareas.txt`.

- **Manejo de errores:** Si ocurre un error durante la escritura, este se captura y se muestra en la
consola.

4. **Método e`liminar(id)`** :

- **Funcion:** Filtra el array de tareas para eliminar la tarea que coincide con el id proporcionado.
Luego, guarda el array actualizado en el archivo.

- `Manejo de errores:` Captura cualquier error al eliminar una tarea y lo muestra en la consola.