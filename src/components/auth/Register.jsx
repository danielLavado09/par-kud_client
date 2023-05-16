import { lazy, Suspense, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));

function Register() {
  const navigate = useNavigate();

  const [isValidCaptcha, setIsValidCaptcha] = useState(false);

  const captcha = useRef(null);

  async function onChange() {
    const value = await captcha.current.getValue();
    if (value) {
      setIsValidCaptcha(true);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (isValidCaptcha) {
      console.log("hola");
      return navigate("/admin");
    } else {
      alert("Complete el reCAPTCHA antes de continuar.");
    }
  };

  return (
    <>
      <>
        <div className="bg-container">
          <div className="container w-75 mt-5 rounded shadow">
            <div className="row align-items-strectch justify-content-center mt-5">
              <div className="">
                <div className="card bg-white text-dark">
                  <h2 className="card-header border-dark text-black font-weight-bold">
                    Registrarse
                  </h2>
                  <div className="card-body">
                    <form onSubmit={submitHandler}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group was-validated mb-4">
                            <label
                              className="form-label font-weight-bold"
                              htmlFor="nombre"
                            >
                              Nombre
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="nombre"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group was-validated mb-4">
                            <label
                              className="form-label font-weight-bold"
                              htmlFor="apellido"
                            >
                              Apellido
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="apellido"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group was-validated mb-4">
                            <label
                              className="form-label font-weight-bold"
                              htmlFor="cedula"
                            >
                              Cédula
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="cedula"
                              required
                            />
                          </div>
                          <div className="form-group was-validated mb-4">
                            <label
                              className="form-label font-weight-bold"
                              htmlFor="password"
                            >
                              Contraseña
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group was-validated mb-4">
                            <label
                              className="form-label font-weight-bold"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="form-group was-validated mb-4"
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
                      </div>

                      <input
                        className="font-weight-bold btn btn-lg btn-warning w-100"
                        type="submit"
                        value="Registrarse"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Register;
