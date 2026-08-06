export function workoutStats(

    dias:number,

    ejercicios:number

){

    return{

        dias,

        ejercicios,

        volumen:dias*ejercicios,

    };

}