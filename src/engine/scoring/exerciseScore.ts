import type { Ejercicio } from "../../data/ejercicios";

import { InternalProfile } from "../profile/profileBuilder";

export function scoreExercise(

    ejercicio:Ejercicio,

    profile:InternalProfile

){

    let score=0;

    score+=ejercicio.prioridadHipertrofia;

    if(profile.objetivo==="rendimiento"){

        score+=ejercicio.prioridadFuerza;

    }

    if(profile.equipamiento.some(

        e=>ejercicio.equipamiento.includes(e as never)

    )){

        score+=20;

    }

    return score;

}