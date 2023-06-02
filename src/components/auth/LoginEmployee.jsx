import "./Login.css";
import { lazy, Suspense, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));
import { UserContext } from "../../context/UserContext";
import { Container, Row, Card, Form, Button } from "react-bootstrap";

function LoginEmployee() {
  const navigate = useNavigate();

  const { role, setRole } = useContext(UserContext);

  const captcha = useRef(null);

  function onChange() {
    console.log("Captcha value:", captcha.current.getValue());
  }

  const submitHandler = (e) => {
    if (!role) {
      e.preventDefault();
      setRole("admin");
      return navigate("/admin/statistics");
    }
  };

  return (
    <>
      <div className="bg-container">
        <Container className="mt-3 d-flex align-items-center justify-content-center">
          <Row className="align-items-stretch">
            <Card bg="white" text="dark">
              <Card.Header className="card-big-text border-dark text-black font-weight-bold">
                Empleados
              </Card.Header>
              <Card.Body>
                <Form className="needs-validation" onSubmit={submitHandler}>
                  <Form.Group className="was-validated mb-4">
                    <Form.Label className="font-weight-bold" htmlFor="cedula">
                      Cédula de Ciudadanía
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="number"
                      id="cedula"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="was-validated mb-4">
                    <Form.Label className="font-weight-bold" htmlFor="password">
                      Contraseña
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="password"
                      id="password"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="was-validated mb-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Suspense fallback={<div>Cargando ReCAPTCHA...</div>}>
                      <ReCAPTCHA
                        ref={captcha}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY}
                        onChange={onChange}
                      />
                    </Suspense>
                  </Form.Group>

                  <Button
                    className="font-weight-bold btn btn-lg btn-warning w-100"
                    type="submit"
                  >
                    Iniciar sesión
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LoginEmployee;
