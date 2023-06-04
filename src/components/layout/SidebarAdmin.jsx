import { UserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useContext } from "react";
import {
  FaCar,
  FaBuilding,
  FaRegChartBar,
  FaUserFriends,
} from "react-icons/fa";

function SidebarAdmin() {
  const { role } = useContext(UserContext);

  return (
    <>
      {role === "admin" && (
        <>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="parkings"
              className="d-flex align-items-center custom-nav-link"
            >
              <FaCar className="mr-2" />
              Parqueaderos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="employees"
              className="d-flex align-items-center custom-nav-link"
            >
              <FaBuilding className="mr-2" />
              Empleados
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="statistics"
              className="d-flex align-items-center custom-nav-link"
            >
              <FaRegChartBar className="mr-2" />
              Estadisticas
            </Nav.Link>
          </Nav.Item>
        </>
      )}
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="users"
          className="d-flex align-items-center custom-nav-link"
        >
          <FaUserFriends className="mr-2" />
          Usuarios
        </Nav.Link>
      </Nav.Item>
    </>
  );
}

export default SidebarAdmin;
