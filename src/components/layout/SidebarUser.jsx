import { Link } from "react-router-dom";

function SidebarUser() {
  return (
    <>
      <li className="nav-item">
        <Link to="reservations" className="nav-link">
          <i className="icon ion-md-bookmark lead mr-2" />
          Reservas
        </Link>
      </li>
    </>
  );
}

export default SidebarUser;
