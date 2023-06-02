import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-home-container">
        <div className="info-container container mt-5">
          <h1 className="expanding-heading">Bienvenido a PAR-KUD</h1>
          <div className="card shaking">
            <div className="card-header">
              <h3 className="card-title">Hola!</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                En PAK-UD nos enorgullece brindarte una experiencia excepcional
                en la reserva de parqueaderos. Queremos facilitar tu vida,
                ahorrarte tiempo y ofrecerte la tranquilidad de encontrar un
                lugar seguro para estacionar tu vehículo. Nuestra plataforma te
                permite buscar y reservar parqueaderos de forma rápida y
                sencilla. Ya sea que necesites un espacio para unas pocas horas
                o durante varios días, PAK-UD está aquí para cubrir tus
                necesidades. Además, contamos con una amplia red de parqueaderos
                verificados en ubicaciones estratégicas, para que siempre
                encuentres una opción conveniente cerca de ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
