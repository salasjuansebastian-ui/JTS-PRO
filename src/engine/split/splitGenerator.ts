import type { InternalProfile } from "../profile/profileBuilder";

export interface SplitDay {

    nombre:string;

    grupos:string[];

}

export function generateSplit(

    profile:InternalProfile

):SplitDay[]{

    switch(profile.dias){

        case 2:

            return [

                {

                    nombre:"Día 1",

                    grupos:["Pecho","Espalda","Hombros"]

                },

                {

                    nombre:"Día 2",

                    grupos:["Cuadriceps","Isquios","Biceps","Triceps"]

                }

            ];

        case 3:

            return [

                {

                    nombre:"Push",

                    grupos:["Pecho","Hombros","Triceps"]

                },

                {

                    nombre:"Pull",

                    grupos:["Espalda","Biceps"]

                },

                {

                    nombre:"Piernas",

                    grupos:["Cuadriceps","Isquios","Gluteos","Gemelos"]

                }

            ];

        case 4:

            return [

                {

                    nombre:"Upper A",

                    grupos:["Pecho","Espalda"]

                },

                {

                    nombre:"Lower A",

                    grupos:["Cuadriceps","Isquios"]

                },

                {

                    nombre:"Upper B",

                    grupos:["Hombros","Biceps","Triceps"]

                },

                {

                    nombre:"Lower B",

                    grupos:["Gluteos","Gemelos"]

                }

            ];

        default:

            return [];

    }

}