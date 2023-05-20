import { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";

function UserReservation() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [parkings, setParkings] = useState([]);
  const [selectedParking, setSelectedParking] = useState("");
  const [parkingData, setParkingData] = useState({});

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-cities"); // Ruta en el backend para obtener la lista de ciudades
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = async (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setSelectedParking(null);

    try {
      const response = await fetch(
        `http://localhost:3000/parkings?city=${city}`
      ); // Ruta en el backend para obtener los parqueaderos por ciudad
      const data = await response.json();
      setParkings(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleParkingChange = async (event) => {
    const parkingId = event.target.value;
    setSelectedParking(parkingId);

    try {
      const response = await fetch(
        `http://localhost:3000/parking/${parkingId}`
      ); // Ruta en el backend para obtener los datos completos del parqueadero
      const data = await response.json();
      setParkingData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="font-weight-bold">
            Seleccione una ciudad:
          </Form.Label>
          <Form.Control as="select" onChange={handleCityChange}>
            <option value="">Seleccione una ciudad</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="font-weight-bold">
            Seleccione un parqueadero:
          </Form.Label>
          <Form.Control as="select" onChange={handleParkingChange}>
            <option value="">Seleccione un parqueadero</option>
            {parkings.map((parking) => (
              <option key={parking.parking_id} value={parking.parking_id}>
                {parking.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {selectedParking && selectedCity && (
          <Form.Group>
            <Row>
              <Col>
                {parkingData.img_url && (
                  <img
                    className="rounded shadow img-user-reservation mb-4"
                    src={`http://localhost:3000/uploads/${parkingData.img_url}`}
                    alt="Imagen del parqueadero"
                  />
                )}
              </Col>
              <Col>
                <h3 className="font-weight-bold">Información</h3>
                <p>Parqueadero: {parkingData.name}</p>
                <p>Ciudad: {parkingData.city}</p>
                <p>Dirección: {parkingData.address}</p>
                <p>Campos totales: {parkingData.slots}</p>
                <p>
                  Parqueadero cubierto: {parkingData.is_covered ? "Sí" : "No"}
                </p>

                <h3 className="mt-5 font-weight-bold">Horarios</h3>
                <p>Abre: {parkingData?.opening_time?.substring(0, 5)}</p>
                <p>Cierra: {parkingData?.closing_time?.substring(0, 5)}</p>
              </Col>
              <Col>
                <h3 className="font-weight-bold">Tarifas</h3>
                <p>Sedan: ${parkingData.sedan_hourly_rate}</p>
                <p>SUV: ${parkingData.suv_hourly_rate}</p>
                <p>Motocicletas: ${parkingData.motorcycle_hourly_rate}</p>
              </Col>
            </Row>
          </Form.Group>
        )}
      </Form>
    </>
  );
}

export default UserReservation;
