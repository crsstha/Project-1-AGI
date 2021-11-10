import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/login";
import LoginPage from "./LoginPage/loginPage";
import Register from "./Register/Register";

function Form() {
  return (
    <div className="form">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default Form;
