import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home/Home";
import NavigationBar from "./components/layout/NavigationBar";

import LoginUser from "./components/auth/LoginUser";
import LoginEmployee from "./components/auth/LoginEmployee";
import Register from "./components/auth/Register";

import AdminPanel from "./components/home/admin/AdminPanel";
import AdminParkings from "./components/home/admin/parkings/AdminParkings";
import AdminEmployees from "./components/home/admin/employees/AdminEmployees";
import AdminStatistics from "./components/home/admin/statistics/AdminStatistics";
import AdminUsers from "./components/home/admin/users/AdminUsers";

import UserPanel from "./components/home/user/UserPanel";
import UserReservations from "./components/home/user/reservations/UserReservations";

import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      <UserContext.Provider value={{ role, setRole, user, setUser }}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/user" element={<LoginUser />} />
          <Route path="/login/employee" element={<LoginEmployee />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />}>
            <Route path="parkings" element={<AdminParkings />} />
            <Route path="employees" element={<AdminEmployees />} />
            <Route path="statistics" element={<AdminStatistics />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
          <Route path="/user" element={<UserPanel />}>
            <Route path="reservations" element={<UserReservations />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
