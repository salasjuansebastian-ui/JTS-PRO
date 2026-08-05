import { InternalProfile } from "../profile/profileBuilder";

export interface DayPlan {

  dia: number;

  gruposMusculares: string[];

}

export function planWeek(
  profile: InternalProfile
): DayPlan[] {

  switch (profile.dias) {

    case 2:

      return [

        {
          dia:1,
          gruposMusculares:[
            "Full Body"
          ]
        },

        {
          dia:2,
          gruposMusculares:[
            "Full Body"
          ]
        }

      ];

    case 3:

      return [

        {
          dia:1,
          gruposMusculares:[
            "Piernas",
            "Pecho",
            "Hombros"
          ]
        },

        {
          dia:2,
          gruposMusculares:[
            "Espalda",
            "Bíceps",
            "Tríceps"
          ]
        },

        {
          dia:3,
          gruposMusculares:[
            "Full Body"
          ]
        }

      ];

    case 4:

      return [

        {
          dia:1,
          gruposMusculares:[
            "Upper"
          ]
        },

        {
          dia:2,
          gruposMusculares:[
            "Lower"
          ]
        },

        {
          dia:3,
          gruposMusculares:[
            "Upper"
          ]
        },

        {
          dia:4,
          gruposMusculares:[
            "Lower"
          ]
        }

      ];

    default:

      return [];

  }

}