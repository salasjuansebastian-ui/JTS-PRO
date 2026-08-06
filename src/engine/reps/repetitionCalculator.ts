import type { InternalProfile } from "../profile/profileBuilder";

export function repetitions(

    profile:InternalProfile

){

    switch(profile.objetivo){

        case "masa":

            return "8-12";

        case "grasa":

            return "10-15";

        case "rendimiento":

            return "4-8";

        default:

            return "8-10";

    }

}