import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

function SidebarUser() {
  return (
    <>
      <Nav.Item className="nav-item">
        <Nav.Link
          as={NavLink}
          to="reservations"
          className="d-flex align-items-center custom-nav-link"
        >
          <FaBookmark className="mr-2"/>
          Reservas
        </Nav.Link>
      </Nav.Item>
    </>
  );
}

export default SidebarUser;
