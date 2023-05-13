import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import AdminPanel from "./components/home/admin/AdminPanel";
import AdminParking from "./components/home/admin/parking/AdminParking";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />}>
          <Route path="parking" element={<AdminParking/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
