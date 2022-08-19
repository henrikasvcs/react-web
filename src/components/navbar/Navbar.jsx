import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbaras">
      <div className="navbaras d-flex justify-content-between align-items-center">
        <ul className="navbaras nav d-flex list-unstyled justify-content-between align-items-center">
          <li>
            <Link className="link-item" to="/">
              Pagrindinis
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/gallery">
              Galerija
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/about">
              Apie Mus
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
