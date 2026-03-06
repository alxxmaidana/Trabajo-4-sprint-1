# Trabajo Práctico nro 4 - Implementación de un servidor Express y Arquitectura MVC

En este trabajo práctico, implementaremos un servidor con **Node.js** y **Express** que seguirá la **arquitectura
Modelo-Vista-Controlador (MVC)**. El servidor se ejecutará en el puerto `3005` y escuchará diversas
peticiones `GET`.

## Requerimientos del Trabajo

1. Levantar un servidor **Express** en el puerto `3005`.

2. El servidor debe escuchar varias rutas `GET`:

- **/superheroes/id/:id:** Recibe un `ID` de superhéroe y devuelve los datos de ese superhéroe o un
mensaje si no fue encontrado.
- **/superheroes/atributo/:atributo/:valor**: Recibe un **atributo** (por ejemplo, nombre o poder) y
devuelve una lista de superhéroes que cumplen con ese criterio.

- **/superheroes/edad/mayorA30:** Devuelve una lista de superhéroes mayores de **30 años** que
además sean del **planeta Tierra** y tengan al menos **2 poderes**.