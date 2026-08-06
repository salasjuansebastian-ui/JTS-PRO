import { createRoutine } from "../routine/createRoutine";

import { useUsuario } from "../../hooks/useUsuario";

import type { PerfilUsuario } from "../types";

export function useRoutine() {

    const { usuario } = useUsuario();

    const rutina = createRoutine(

        usuario as unknown as PerfilUsuario

    );

    return {

        rutina,

    };

}