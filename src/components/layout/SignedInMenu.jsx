import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

// eslint-disable-next-line react/prop-types
function SignedInMenu({ logout }) {
  const { role, user } = useContext(UserContext);

  return (
    <>
      {role && user && (
        <Nav.Item>
          <NavLink className="nav-link">{user.userName}</NavLink>
        </Nav.Item>
      )}
      <Nav.Item>
        <NavLink onClick={logout} className="nav-link" to="/">
          Cerrar sesión
        </NavLink>
      </Nav.Item>
    </>
  );
}

export default SignedInMenu;
