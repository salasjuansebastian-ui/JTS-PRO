import "../styles/boton.css";

type Props = {
  texto: string;
  onClick?: () => void;
};

function Boton({ texto, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;