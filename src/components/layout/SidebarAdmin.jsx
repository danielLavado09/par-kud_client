import { Link } from "react-router-dom";

function SidebarAdmin() {
  return (
    <>
      <li className="nav-item">
        <Link to="parkings" className="nav-link">
          <i className="icon ion-md-car lead mr-2" />
          Parqueaderos
        </Link>
      </li>
      <li className="nav-item">
        <Link to="employees" className="nav-link">
          <i className="icon ion-md-business lead mr-2" />
          Empleados
        </Link>
      </li>
      <li className="nav-item">
        <Link to="statistics" className="nav-link">
          <i className="icon ion-md-stats lead mr-2" />
          Estadisticas
        </Link>
      </li>
      <li className="nav-item">
        <Link to="users" className="nav-link">
          <i className="icon ion-md-people lead mr-2" />
          Usuarios
        </Link>
      </li>
    </>
  );
}

export default SidebarAdmin;
