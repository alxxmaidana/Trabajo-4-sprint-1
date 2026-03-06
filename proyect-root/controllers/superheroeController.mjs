import {
    obtenerSuperheroePorId,
    buscarSuperheroesPorAtributo,
    obtenerSuperheroesMayoresDe30,
} from "../services/superheroeService.mjs";

import {
    renderizarSuperheroe,
    renderizarListaSuperHeroes,
} from "../views/responseView.mjs";

export function obtenerSuperheroePorIdController(required, response) {
    const { id } = required.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id));

    if (superheroe) {
        response.send(renderizarSuperheroe(superheroe));
    } else {
        response.status(404).send({ mensaje: "superhéroe no encontrado" });
    }
}

export function buscarSuperheroePorAtributoController(required, response) {
    const { atributo, valor } = required.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

    if (superheroes) {
        response.send(renderizarListaSuperHeroes(superheroes));
    } else {
        response.status(404).send({
            mensaje: "No se encontraron superhéroer con el atributo",
            atributo,
        });
    }
}

export function obtenerSuperheroesMayoresDe30Controller(request, response) {
    const superheroes = obtenerSuperheroesMayoresDe30();
    response.send(renderizarListaSuperHeroes(superheroes));
}
