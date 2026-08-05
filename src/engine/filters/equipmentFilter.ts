import type {

    Ejercicio,

    Equipamiento,

} from "../../data/ejercicios";

export function equipmentFilter(

    ejercicios:Ejercicio[],

    equipamiento:Equipamiento[]

){

    return ejercicios.filter(

        ejercicio=>

            ejercicio.equipamiento.some(

                item=>

                    equipamiento.includes(item)

            )

    );

}