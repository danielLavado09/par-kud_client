import "./Home.css";
import { Container, Card } from "react-bootstrap";

function Home() {
  return (
    <>
      <div className="bg-home-container">
        <Container className="mt-5">
          <h1 className="expanding-heading">Bienvenido a PAR-KUD </h1>
          <Card className="shaking shadow-lg rounded-4">
            <Card.Header>
              <h2>¿Qué tenemos para ti?</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text className="text-justify">
                En PAK-UD nos enorgullece brindarte una experiencia excepcional
                en la reserva de parqueaderos. Queremos facilitar tu vida,
                ahorrarte tiempo y ofrecerte la tranquilidad de encontrar un
                lugar seguro para estacionar tu vehículo. Nuestra plataforma te
                permite buscar y reservar parqueaderos de forma rápida y
                sencilla en casi toda Colombia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Home;
