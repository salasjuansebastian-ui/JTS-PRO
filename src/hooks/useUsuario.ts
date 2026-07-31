import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

export function useUsuario() {
  const context = useContext(UsuarioContext);

  if (!context) {
    throw new Error("useUsuario debe usarse dentro de UsuarioProvider");
  }

  return context;
}