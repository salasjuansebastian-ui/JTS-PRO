import { InternalProfile } from "../profile/profileBuilder";

export interface TimeResult{

    minutosDisponibles:number;

    ejerciciosMaximos:number;

}

export function calculateTime(

    profile:InternalProfile

):TimeResult{

    const ejercicios=Math.floor(

        profile.duracion/10

    );

    return{

        minutosDisponibles:profile.duracion,

        ejerciciosMaximos:ejercicios,

    };

}