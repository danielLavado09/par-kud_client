import { Container, Card, Nav } from "react-bootstrap";
import { useState } from "react";
import ParkingsStatistics from "./parkings/ParkingsStatistics";

function AdminStatistics() {
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
                Parqueaderos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey={2}
                className={activeTab === 2 ? "active" : ""}
                onClick={() => handleTabClick(2)}
              >
                Usuarios
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {activeTab === 1 && <ParkingsStatistics />}
          {activeTab === 2 && (
            <div>
              <h5 className="card-title">En construcción...</h5>
              <p className="card-text">En construcción...</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminStatistics;
