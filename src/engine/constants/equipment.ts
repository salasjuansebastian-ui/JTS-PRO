import type { Equipamiento } from "../types";

export const EQUIPMENT_PRIORITY: Record<Equipamiento, number> = {
  gym: 100,
  barra: 90,
  mancuernas: 80,
  bandas: 60,
  casa: 40,
  parque: 20,
};