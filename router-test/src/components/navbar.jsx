import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="page">
      <ul className="list">
        <li>
          <Link to="/" className="btn">
            HomePage
          </Link>
        </li>
        <li>
          <Link to="users" className="btn">
            Users
          </Link>
        </li>
        <li>
          <Link className="btn" to="form">
            Form
          </Link>
        </li>
      </ul>
    </div>
  );
}
