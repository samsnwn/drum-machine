import './navbar.css'
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>LOGO</div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pads">Pad Player</NavLink>
        </li>
        <li>
          <NavLink to="/sequencer">Sequencer</NavLink>
        </li>
      </ul>
    </nav>
  );
}
