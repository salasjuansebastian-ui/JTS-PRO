import type {

    Ejercicio

} from "../../data/ejercicios";

export function injuryFilter(

    ejercicios:Ejercicio[],

    lesiones:string[]

){

    return ejercicios.filter(

        ejercicio=>

            !ejercicio.contraindicaciones.some(

                lesion=>

                    lesiones.includes(lesion)

            )

    );

}