import type {

    Ejercicio,

    Nivel

} from "../../data/ejercicios";

export function levelFilter(

    ejercicios:Ejercicio[],

    nivel:Nivel

){

    return ejercicios.filter(

        ejercicio=>{

            if(nivel==="avanzado") return true;

            if(nivel==="intermedio"){

                return ejercicio.nivelMinimo!=="avanzado";

            }

            return ejercicio.nivelMinimo==="principiante";

        }

    );

}