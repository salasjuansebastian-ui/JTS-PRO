import "../styles/boton.css";

type Props = {
  texto: string;
  onClick?: () => void;
  disabled?: boolean;
};

function Boton({
  texto,
  onClick,
  disabled = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`boton ${disabled ? "boton-disabled" : ""}`}
    >
      {texto}
    </button>
  );
}

export default Boton;