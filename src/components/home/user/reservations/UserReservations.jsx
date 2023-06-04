import "./UserReservations.css";
import { useState } from "react";
import { Nav, Card, Container } from "react-bootstrap";
import UserReservation from "./UserReservation";
import UserReservationsList from "./UserReservationsList";

function UserReservations() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className="mt-3">
      <Card className="overflow mt-5 shadow rounded">
        <Card.Header>
          <Nav variant="tabs" className="font-weight-bold card-header-tabs">
            <Nav.Item>
              <Nav.Link
                eventKey={1}
                className={activeTab === 1 ? "active" : ""}
                onClick={() => handleTabClick(1)}
              >
                Reservar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={2}
                className={activeTab === 2 ? "active" : ""}
                onClick={() => handleTabClick(2)}
              >
                Mis reservas
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {activeTab === 1 && <UserReservation />}
          {activeTab === 2 && <UserReservationsList />}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserReservations;
