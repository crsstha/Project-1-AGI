import React from "react";
import { Link } from "react-router-dom";
import "./loginPage.css";

export default function loginPage() {
  return (
    <div className="lPg">
      <h2> Welcome to my First App</h2>
      <br />
      <Link to="/login" className="log">
        Sign In
      </Link>
    </div>
  );
}
