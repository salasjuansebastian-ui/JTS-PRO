import type { InternalProfile } from "../profile/profileBuilder";

export function series(

    profile:InternalProfile

){

    if(profile.nivel==="principiante"){

        return 3;

    }

    if(profile.nivel==="intermedio"){

        return 4;

    }

    return 5;

}