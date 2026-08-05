import {

    EJERCICIOS

} from "../../data/ejercicios";

import {

    equipmentFilter

} from "../filters/equipmentFilter";

import {

    injuryFilter

} from "../filters/injuryFilter";

import {

    levelFilter

} from "../filters/levelFilter";

import type {

    Equipamiento,

    Nivel,

    Ejercicio

} from "../../data/ejercicios";

export function getExercises(

    equipamiento:Equipamiento[],

    nivel:Nivel,

    lesiones:string[]

):Ejercicio[]{

    let lista=[

        ...EJERCICIOS

    ];

    lista=equipmentFilter(

        lista,

        equipamiento

    );

    lista=levelFilter(

        lista,

        nivel

    );

    lista=injuryFilter(

        lista,

        lesiones

    );

    return lista;

}