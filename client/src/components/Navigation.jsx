import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation ">
      <nav className="navbar navbar-expand navbar-dark bg-success ">
        <div className="container ">
          <NavLink className="navbar-brand" to="/">
           PMCS Pro Management Solution               
          </NavLink>
          <text id="testtext">
            [UNCLASSIFIED]                 
          </text>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/TechnicalManuals">
                Technical Manuals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AdminLogin">
                  Admin Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
