import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
  return (
    <section>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container py-2">
            <Link to="/" className="brand" style={{ textDecoration: "none" }}>
              Social buddy App
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="ml-auto navbar-nav">
                <li class="nav-item active">
                <Link to="/"  style={{ textDecoration: "none",fontWeight:'bold'}}>
              Home
            </Link>
                </li>
             
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;