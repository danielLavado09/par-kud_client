import { Container, Card, Nav } from "react-bootstrap";
import { useState } from "react";
import RegisterEmployees from "./RegisterEmployees";

function AdminEmployees() {
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
                Registrar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>{activeTab === 1 && <RegisterEmployees />}</Card.Body>
      </Card>
    </Container>
  );
}

export default AdminEmployees;
