type Props = {
  onClick: () => void;
};

function BotonVolver({ onClick }: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "12px",
      }}
    >
      <button
        onClick={onClick}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
          color: "#666",
          fontWeight: 600,
          padding: 0,
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#111";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#666";
        }}
      >
        ← Volver
      </button>
    </div>
  );
}

export default BotonVolver;