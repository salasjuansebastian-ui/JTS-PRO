import { Rutina } from "../types";

export function exportRoutine(

    rutina:Rutina

){

    return JSON.stringify(

        rutina,

        null,

        2

    );

}