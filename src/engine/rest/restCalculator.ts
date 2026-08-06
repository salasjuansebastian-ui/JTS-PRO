import type { InternalProfile } from "../profile/profileBuilder";

export function rest(

    profile:InternalProfile

){

    if(profile.objetivo==="rendimiento"){

        return 180;

    }

    if(profile.objetivo==="masa"){

        return 120;

    }

    return 90;

}