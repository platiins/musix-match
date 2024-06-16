import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/index.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { VscColorMode } from "react-icons/vsc";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar
      id="nav-bar"
      style={{
        backgroundColor: theme === "light" ? "#e9ecef" : " #212529",
      }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="nav-brand">
          lyricFinder
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-link">
            data from <a href="https://developer.musixmatch.com/">MusixMatch</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <button className="change-theme-btn" onClick={toggleTheme}>
        <VscColorMode />
      </button>
    </Navbar>
  );
}

export default Header;
