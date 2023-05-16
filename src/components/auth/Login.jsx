//import { Link } from "react-router-dom";
import { lazy, Suspense, useRef } from "react";
import "./Login.css";
const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));

function Login() {
  const captcha = useRef(null);

  function onChange() {
    console.log("Captcha value:", captcha.current.getValue());
  }

  return (
    <>
      <div className="bg-container">
        <div className="container w-75 mt-5 rounded shadow">
          <div className="row align-items-strectch justify-content-center mt-5">
            <div className="">
              <div className="card bg-white text-dark">
                <h2 className="card-header border-dark text-black font-weight-bold">
                  Iniciar sesión
                </h2>
                <div className="card-body">
                  <form className="needs-validation">
                    <div className="form-group was-validated mb-4">
                      <label
                        className="form-label font-weight-bold"
                        htmlFor="email"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
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
                        className="form-control"
                        type="password"
                        id="password"
                        required
                      />
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
                      value="Iniciar sesión"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
