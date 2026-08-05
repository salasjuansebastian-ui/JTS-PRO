import { InternalProfile } from "../profile/profileBuilder";

export interface FatigueResult{

    fatigaMaxima:number;

}

export function calculateFatigue(

    profile:InternalProfile

):FatigueResult{

    let fatiga=100;

    if(profile.nivel==="principiante") fatiga=70;

    if(profile.nivel==="intermedio") fatiga=85;

    if(profile.nivel==="avanzado") fatiga=100;

    return{

        fatigaMaxima:fatiga,

    };

}