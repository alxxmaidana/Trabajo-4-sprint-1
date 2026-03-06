# Abstracción de la persistencia

El archivo `superheroesDataSource.mjs` define una abstracción que otras clases de persistencia deben implementar.

#### Implementación de la Persistencia con Archivos

La clase hija **`SuperHeroesRepository`** implementa el método `obtenerTodas()` que lee los datos desde `superheroes.txt`

