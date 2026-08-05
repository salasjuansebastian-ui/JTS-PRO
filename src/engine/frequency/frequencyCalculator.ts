import { InternalProfile } from "../profile/profileBuilder";

export interface FrequencyResult {

    frecuenciaPorMusculo:number;

}

export function calculateFrequency(

    profile:InternalProfile

):FrequencyResult{

    let frecuencia=2;

    if(profile.dias<=2){

        frecuencia=1;

    }

    if(profile.dias>=5){

        frecuencia=2;

    }

    return{

        frecuenciaPorMusculo:frecuencia,

    };

}