import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import "./AdminPanel.css";

function AdminPanel() {
  return (
    <div className="AdminPanel">
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  );
}

export default AdminPanel;
