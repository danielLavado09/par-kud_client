import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

function RegisterParkings() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("name", form.elements["formNombre"].value);
    formData.append("city", form.elements["formCiudad"].value);
    formData.append("address", form.elements["formDireccion"].value);
    formData.append("slots", form.elements["formEspacios"].value);
    formData.append(
      "sedan_hourly_rate",
      form.elements["formTarifaSedan"].value
    );
    formData.append("suv_hourly_rate", form.elements["formTarifaSUV"].value);
    formData.append(
      "motorcycle_hourly_rate",
      form.elements["formTarifaMotocicletas"].value
    );
    formData.append("opening_time", form.elements["formHoraApertura"].value);
    formData.append("closing_time", form.elements["formHoraCierre"].value);
    formData.append(
      "is_covered",
      form.elements["formParqueaderoCubierto"].checked
    );

    console.log(form.elements["formParqueaderoCubierto"].checked);

    const fileInput = form.elements["formImagenParqueadero"];
    if (fileInput.files.length > 0) {
      formData.append("image", fileInput.files[0]);
    }

    try {
      // Realizar la solicitud POST al backend
      const response = await fetch("http://localhost:3000/create-parking", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Realizar acciones adicionales después de registrar el parqueadero
      } else {
        console.error("Error al registrar el parqueadero");
      }

      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="rounded shadow">
      <div className="d-lg-block">
        <Card bg="white" text="dark">
          <Card.Header className="card-big-text border-dark text-black font-weight-bold">
            Registrar parqueadero
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formNombre"
                  >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formCiudad"
                  >
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formDireccion"
                  >
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formEspacios"
                  >
                    <Form.Label>Espacios del parqueadero</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formTarifaSedan"
                  >
                    <Form.Label>Tarifa para vehículos Sedan</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formTarifaSUV"
                  >
                    <Form.Label>Tarifa para vehículos SUV</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formTarifaMotocicletas"
                  >
                    <Form.Label>Tarifa para motocicletas</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formHoraApertura"
                  >
                    <Form.Label>Hora de apertura</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formHoraCierre"
                  >
                    <Form.Label>Hora de cierre</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                  <Form.Group
                    className="font-weight-bold mb-4"
                    controlId="formImagenParqueadero"
                  >
                    <Form.Label>Cargar imagen del parqueadero</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Form.Check
                    className="mb-4"
                    type="switch"
                    id="formParqueaderoCubierto"
                    label="¿Parqueadero cubierto?"
                  />
                </Col>
              </Row>

              <Button
                variant="primary"
                type="submit"
                className="font-weight-bold btn-lg btn w-100"
              >
                Registrar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default RegisterParkings;
