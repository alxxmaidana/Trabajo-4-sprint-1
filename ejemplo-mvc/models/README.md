# Capa de Modelo (Model):

La **capa de modelo** en una aplicación MVC (Modelo-Vista-Controlador) es la encargada de representar la estructura de los datos y las operaciones que se pueden realizar sobre ellos. En este caso el modelo **Tarea** representa una tarea con atriburos `id`. `titulo`, `descripcion`, y `completado`. Además, este modelo contiene métodos que permite realizar operaciones como marcar una tarea como completada y validar sus atributos.

---

### `tarea.mjs`:

Este archivo define el **modelo Tarea**, encapsulando los atributos como los métodos necesarios para manipular los datos de una tarea.

---

## Explicacion de Código:

#### 1. Clase `Tarea`:

- La clase `Tarea` es el modelo que encapsula los atributos de una tarea y sus métodos para intaractuar con ellos.

- #### Atributos:

    - `id`: Representa un identificador único para cada tarea.

    - `titulo`: El nombre o título que describe la tarea.

    - `descripcion`: Detalle adicional que describe la tarea.

    - `completado`: Un estado booleano que indica si la tarea ha sido completada o no. Por defecto, es inicializa en `false`.

#### 2. Método `completar()`:

- Este método cambia el estado de la tarea a `completada` (true). Al llamar a éste método, podemos marcar una tarea como terminada

#### 3. Métdodo `validar()`: 

- Este método se asegura qeu la tarea tenga un título válido. Si el título está vacío o contiene solo espacios en blanco, lanza un error con un mensaje que indica que el título es obligatorio. Esta validación ayuda a evitar que se creen tareas sin información necesaria.

---

## Justificación del Diseño

#### 1. Responsabilidad Única:

- La clase Tarea sigue el **Principio de Responsabilidad Única (SRP)** al enfocarse únicamente en
la representación y manipulación de los datos relacionados con una tarea. Encapsula tanto los
atributos como los métodos que pueden operar sobre ellos.

#### 2. Simplicidad:

Este diseno es simple y directo. Al no usar una interfaz intermedia, el modelo `Tarea` es
utilizado directamente por la capa de servicios, lo que simplifica la arquitectura y reduce la
sobrecarga de código.

#### 3. Modularidad:

- Aunque es un diseño simple, el modelo sigue siendo modular. Las funciones relacionadas con la
validación y la manipulación de los datos de la tarea están encapsuladas dentro de la clase
`Tarea`, lo que facilita su reutilización y mantenimiento.

#### 4. Validación Interna:

- El método `validar()` asegura que los datos sean consistentes antes de que la tarea sea
procesada o guardada. Esto agrega una capa de robustez al sistema, evitando que tareas
incompletas o incorrectas se almacenen o procesen.