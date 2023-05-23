import "./AdminPanel.css"
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";

import { UserContext } from "../../../context/UserContext";

function AdminPanel() {
  const navigate = useNavigate();

  const { role, setRole } = useContext(UserContext);

  useEffect(() => {
    if (role !== "admin") {
      setRole(null);
      navigate("/");
    }
  }, [setRole, role, navigate]);

  return (
    <div className="custom-panel">
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  );
}

export default AdminPanel;
