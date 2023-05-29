import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Navbar, Nav } from "react-bootstrap";

import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

function NavigationBar() {
  const { role, setRole, setUser } = useContext(UserContext);

  const logout = () => {
    setRole(null);
    setUser(null);
  };

  const menu = role ? <SignedInMenu logout={logout} /> : <SignedOutMenu />;

  return (
    <>
      <Navbar bg="warning" expand="lg" fixed="top">
        <NavLink className="mx-2 navbar-brand" to="/">
          <img
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          PAR-KUD
        </NavLink>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">{menu}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
