import "./UserReservations.css";
import { useState } from "react";

function UserReservations() {
  const [parqueaderoSeleccionado, setParqueaderoSeleccionado] = useState(null);

  const handleParqueaderoChange = (event) => {
    const parqueaderoId = event.target.value;
    const parqueadero = getParqueaderoById(parqueaderoId);
    setParqueaderoSeleccionado(parqueadero);
  };

  const getParqueaderoById = (id) => {
    // Simular la obtención del parqueadero desde el backend
    const parqueaderoFromBackend = {
      id: "1",
      nombre: "Parqueadero ABC",
      direccion: "Calle 123, Ciudad",
    };

    if (id === "1") {
      return parqueaderoFromBackend;
    } else {
      return null;
    }
  };

  return (
    <div className="user-reservations">
      <div className="container">
        <h2>Selecciona un parqueadero:</h2>
        <select className="form-select" onChange={handleParqueaderoChange}>
          <option value="">Selecciona un parqueadero</option>
          <option value="1">Parqueadero ABC</option>
        </select>

        {parqueaderoSeleccionado && (
          <div>
            <h3>Detalles del parqueadero:</h3>
            <p>Nombre: {parqueaderoSeleccionado.nombre}</p>
            <p>Dirección: {parqueaderoSeleccionado.direccion}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserReservations;
