import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link>About</Link>
    </div>
  );
}
