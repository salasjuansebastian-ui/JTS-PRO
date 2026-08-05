export interface Progression {

  semana: number;

  incrementoSeries: number;

  incrementoCarga: number;

}

export function generateProgression() : Progression[] {

  return [

    {

      semana:1,

      incrementoSeries:0,

      incrementoCarga:0,

    },

    {

      semana:2,

      incrementoSeries:0,

      incrementoCarga:2.5,

    },

    {

      semana:3,

      incrementoSeries:1,

      incrementoCarga:2.5,

    },

    {

      semana:4,

      incrementoSeries:1,

      incrementoCarga:5,

    },

  ];

}