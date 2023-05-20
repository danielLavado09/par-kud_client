import "./Sidebar.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import SidebarAdmin from "./SidebarAdmin";
import SidebarUser from "./SidebarUser";

function Sidebar() {
  const { role } = useContext(UserContext);

  const menu = role === "admin" ? <SidebarAdmin /> : <SidebarUser />;

  return (
    <nav className="sidebar bg-dark text-white">
      <ul className="nav flex-column">{menu}</ul>
    </nav>
  );
}

export default Sidebar;
