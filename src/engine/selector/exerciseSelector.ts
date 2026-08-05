import type {

    Ejercicio,

    Equipamiento,

    GrupoMuscular,

    Nivel,

} from "../../data/ejercicios";

export function selectExercises(

    ejercicios: Ejercicio[],

    grupo: GrupoMuscular,

    nivel: Nivel,

    equipamiento: Equipamiento[]

): Ejercicio[] {

    return ejercicios

        .filter(

            (e) =>

                e.grupoPrincipal === grupo

        )

        .filter(

            (e) =>

                equipamiento.some(

                    (item) =>

                        e.equipamiento.includes(item)

                )

        )

        .filter(

            (e) => {

                if (

                    nivel === "avanzado"

                ) return true;

                if (

                    nivel === "intermedio"

                ) {

                    return e.nivelMinimo !== "avanzado";

                }

                return e.nivelMinimo === "principiante";

            }

        )

        .sort(

            (a,b)=>

                b.prioridadHipertrofia-

                a.prioridadHipertrofia

        );

}