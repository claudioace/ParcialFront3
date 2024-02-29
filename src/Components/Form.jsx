import { useState } from "react";
import Card from "./Card";

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    sabor: "",
  });

  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !formData.nombre.trim().length >= 3 ||
      formData.apellido.length < 6
    ) {
      setError(true);
      return;
    }

    setError(false);
    setShowCard(true);
  }

  function handleReset() {
    setFormData({
      nombre: "",
      apellido: "",
      sabor: "",
    });
    setShowCard(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresar nombre"
          onChange={handleChange}
          value={formData.nombre}
        />
        <label htmlFor="apellido">Apellido: </label>
        <input
          type="text"
          name="apellido"
          placeholder="Ingresar apellido"
          onChange={handleChange}
          value={formData.apellido}
        />
        <label htmlFor="sabor"> Sabor: </label>
        <input
          type="text"
          name="sabor"
          placeholder="Ingresar sabor"
          onChange={handleChange}
          value={formData.sabor}
        />
        <button type="submit">Enviar</button>
        <button type="reset" onClick={handleReset}>
          Limpiar
        </button>
        {error && (
          <p style={{ color: "yellow" }}>
            Por favor chequea que la información sea correcta
          </p>
        )}
      </form>
      {showCard && (
        <Card
          nombre={formData.nombre.trim()}
          apellido={formData.apellido}
          sabor={formData.sabor}
        />
      )}
    </div>
  );
}
