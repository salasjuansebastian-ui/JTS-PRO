export interface HistoryItem{

    fecha:string;

    rutina:string;

}

const historial:HistoryItem[]=[];

export function saveHistory(

    rutina:string

){

    historial.push({

        fecha:new Date().toISOString(),

        rutina,

    });

}

export function getHistory(){

    return historial;

}