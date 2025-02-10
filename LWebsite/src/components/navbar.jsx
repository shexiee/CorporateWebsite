import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./css/navbar.css";


export default function Navbar() {
  return (
    <AppBar position="sticky" className="appbar">
  <Toolbar className="toolbar">
  <img src="src/assets/lifewood.svg" alt="Lifewood Logo" className="logo-image" />

    <nav className="nav-links">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Button color="inherit">Home</Button>
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
        <Button color="inherit">About</Button>
      </Link>
      <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
        <Button color="inherit">Projects</Button>
      </Link>
      <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
        <Button color="inherit">Services</Button>
      </Link>
      <Link to="/careers" style={{ textDecoration: "none", color: "inherit" }}>
        <Button color="inherit">Careers</Button>
      </Link>
      <Link to="/globalscale" style={{ textDecoration: "none", color: "inherit" }}>
        <Button color="inherit">Global Scale</Button>
      </Link>
    </nav>
    <Link to="/contact-us" style={{ textDecoration: "none" }}>
      <Button className="contact-us-button">
        Apply Now
      </Button>
    </Link>
  </Toolbar>
</AppBar>

  );
}
