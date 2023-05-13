import { useState } from "react";
import RegisterParking from "./RegisterParking";
import "./AdminParking.css";

function AdminParking() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-3">
      <div className="card overflow mt-5 shadow rounded">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                Registrar
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(2)}
              >
                Actualizar
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {activeTab === 1 && <RegisterParking></RegisterParking>}
          {activeTab === 2 && (
            <div>
              <h5 className="card-title">Contenido de la pestaña 2</h5>
              <p className="card-text">
                Praesent tincidunt metus vel vehicula luctus.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminParking;
