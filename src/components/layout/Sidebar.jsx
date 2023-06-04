import "./Sidebar.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SidebarAdmin from "./SidebarAdmin";
import SidebarUser from "./SidebarUser";
import { Nav } from "react-bootstrap";

function Sidebar() {
  const { role } = useContext(UserContext);

  const menu =
    role === "admin" || role === "employee" ? (
      <SidebarAdmin />
    ) : (
      <SidebarUser />
    );

  return <Nav className="sidebar flex-column bg-dark text-white">{menu}</Nav>;
}

export default Sidebar;
