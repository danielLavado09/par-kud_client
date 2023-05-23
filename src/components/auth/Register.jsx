import { lazy, Suspense, useRef, useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));

function Register() {
  const navigate = useNavigate();

  //const [isValidCaptcha, setIsValidCaptcha] = useState(false);

  //const captcha = useRef(null);

  // async function onChange() {
  //   const value = await captcha.current.getValue();
  //   if (value) {
  //     setIsValidCaptcha(true);
  //   }
  // }

  const submitHandler = (e) => {
    e.preventDefault();

    // if (isValidCaptcha) {
    //   console.log("hola");
    return navigate("/user");
    // } else {
    //   alert("Complete el reCAPTCHA antes de continuar.");
    // }
  };

  return (
    <>
      <div className="bg-container">
        <Container className="mt-3 d-flex align-items-center justify-content-center">
          <Row className="align-items-stretch">
            <Card bg="white" text="dark">
              <Card.Header className="card-big-text border-dark text-black font-weight-bold">
                Registrarse
              </Card.Header>
              <Card.Body>
                <Form onSubmit={submitHandler}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="was-validated mb-4">
                        <Form.Label
                          className="form-label font-weight-bold"
                          htmlFor="nombre"
                        >
                          Nombre
                        </Form.Label>
                        <Form.Control type="text" id="nombre" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="was-validated mb-4">
                        <Form.Label
                          className="form-label font-weight-bold"
                          htmlFor="apellido"
                        >
                          Apellido
                        </Form.Label>
                        <Form.Control type="text" id="apellido" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="was-validated mb-4">
                        <Form.Label
                          className="form-label font-weight-bold"
                          htmlFor="cedula"
                        >
                          Cédula
                        </Form.Label>
                        <Form.Control type="number" id="cedula" required />
                      </Form.Group>
                      <Form.Group className="was-validated mb-4">
                        <Form.Label
                          className="form-label font-weight-bold"
                          htmlFor="password"
                        >
                          Contraseña
                        </Form.Label>
                        <Form.Control type="password" id="password" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="was-validated mb-4">
                        <Form.Label
                          className="form-label font-weight-bold"
                          htmlFor="email"
                        >
                          Correo Electrónico
                        </Form.Label>
                        <Form.Control type="email" id="email" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div
                    className="form-group was-validated mb-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Suspense
                      fallback={<div>Cargando ReCAPTCHA...</div>}
                    ></Suspense>
                  </div>

                  <input
                    className="font-weight-bold btn btn-lg btn-warning w-100"
                    type="submit"
                    value="Registrarse"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Register;
