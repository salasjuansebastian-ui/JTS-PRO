import { buildProfile } from "../profile/profileBuilder";

import { generateSplit } from "../split/splitGenerator";

import { getExercises } from "../services/exerciseService";

import { repetitions } from "../reps/repetitionCalculator";

import { series } from "../series/seriesCalculator";

import { rest } from "../rest/restCalculator";


import type { PerfilUsuario } from "../types";

export function createRoutine(

    usuario: PerfilUsuario

){

    const profile=buildProfile(usuario);

    const split=generateSplit(profile);

    const ejercicios=getExercises(

        profile.equipamiento as never,

        profile.nivel as never,

        profile.lesiones

    );

    return split.map((dia)=>({

        nombre:dia.nombre,

        ejercicios:dia.grupos.flatMap(

            grupo=>

                ejercicios

                .filter(

                    e=>e.grupoPrincipal===grupo

                )

                .slice(0,2)

                .map(

                    e=>({

                        nombre:e.nombre,

                        series:series(profile),

                        repeticiones:repetitions(profile),

                        descanso:rest(profile),

                    })

                )

        ),

    }));

}