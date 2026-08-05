import { InternalProfile } from "../profile/profileBuilder";

export interface WeeklyVolume {

  seriesPorMusculo: number;

}

export function calculateWeeklyVolume(

  profile: InternalProfile

): WeeklyVolume {

  const base = profile.seriesBase;

  const volumen = profile.volumen;

  return {

    seriesPorMusculo: Math.round(

      base * 4 * volumen

    ),

  };

}