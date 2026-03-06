# Gestor de Superhéroes - API REST

## Descripción
API REST que permite gestionar y consultar información sobre superhéroes. Implementa la **arquitectura Modelo-Vista-Controlador (MVC)** con Node.js y Express.js.

## Tecnologías
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **JavaScript ES6 Modules** - Módulos nativos de JavaScript

## Requerimientos Implementados

1. ✅ Servidor **Express** ejecutándose en puerto **3005**
2. ✅ Arquitectura **MVC** con capas separadas:
   - Controllers (controladores)
   - Models (modelos)
   - Services (lógica de negocio)
   - Repository (acceso a datos)
   - Views (formateo de respuestas)

## Rutas API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/superheroes/id/:id` | Obtiene superhéroe por ID |
| GET | `/superheroes/atributo/:atributo/:valor` | Busca superhéroes por atributo (ej: nombre, poder) |
| GET | `/superheroes/edad/mayorA30` | Obtiene superhéroes mayores de 30 años de Tierra con 2+ poderes |

## Estructura del Proyecto

```
proyect-root/
├── server.mjs                 # Servidor principal y definición de rutas
├── package.json               # Dependencias (Express)
├── superheroes.txt            # Base de datos (JSON)
├── controllers/
│   └── superheroeController.mjs
├── models/
│   └── superheroe.mjs
├── services/
│   └── superheroeService.mjs
├── repository/
│   ├── superheroeDataSource.mjs
│   └── superheroeRepository.mjs
└── views/
    └── responseView.mjs
```

## Instalación y Ejecución

```bash
npm install
npm start
```

Servidor disponible en `http://localhost:3005`

## Ejemplos de Uso

```bash
curl http://localhost:3005/superheroes/id/1
curl http://localhost:3005/superheroes/atributo/nombreSuperHeroe/Spiderman
curl http://localhost:3005/superheroes/edad/mayorA30
```

## Conclusión
Este proyecto implementa una API REST con arquitectura MVC, separando claramente responsabilidades entre controladores, servicios, modelos y persistencia de datos. Esta estructura mejora la mantenibilidad y escalabilidad del código.
