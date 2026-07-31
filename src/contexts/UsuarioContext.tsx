import { createContext, useState } from "react";
import type { ReactNode } from "react";

import type { Usuario } from "../types/usuario";

type UsuarioContextType = {
  usuario: Usuario;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario>>;
};

export const UsuarioContext = createContext<UsuarioContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export function UsuarioProvider({ children }: Props) {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    edad: "",
    peso: "",
    altura: "",

    objetivo: "",
    nivel: "",

    equipamiento: [],

    lesiones: [],

    dias: 3,

    duracion: 60,
  });

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        setUsuario,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}