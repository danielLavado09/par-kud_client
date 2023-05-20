import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";

import { UserContext } from "../../../context/UserContext";

function UserPanel() {
  const navigate = useNavigate();

  const { role, setRole } = useContext(UserContext);

  useEffect(() => {
    if (role !== "user") {
      setRole(null);
      navigate("/");
    }
  }, [setRole, role, navigate]);

  return (
    <div className="custom-panel">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default UserPanel;
