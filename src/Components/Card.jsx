const Card = ({ nombre, apellido, sabor }) => {
  return (
    <div
      style={{ 
        borderRadius:"5%",
        border: "2px solid white",
        backgroundColor: "black",
        padding: "1rem",
        marginTop: "1rem"
       }}
    >
      <h3>
        Hola {nombre} {apellido}
      </h3>
      <p>Entonces tu sabor preferido es: {sabor}</p>
    </div>
  );
};

export default Card;
