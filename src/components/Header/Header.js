import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/pablo-shopping.png";

import "./Header.css";

function Header() {
    return (
        <nav
        className="navbar navbar-expand p-2 navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#219ebc" }}
        >
        <Link className="navbar-brand" to="/home">
            <img src={logo} alt="logo" style={{ width: "100px" }}></img>
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav nav-tabs" style={{ fontSize: "1.2rem" }}>
            <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/todoApp">
                Shopping list
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                Contact
                </NavLink>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default Header;
