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
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="nav-brand"
          style={{
            color: theme === "light" ? "#212529" : "#F8F9FA",
          }}
        >
          lyricFinder
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end display-none">
          <Navbar.Text
            className="nav-link display-none"
            style={{
              color: theme === "light" ? "#212529" : "#F8F9FA",
            }}
          >
            <p className="mb-0">data from</p>
            <a
              href="https://developer.musixmatch.com/"
              style={{
                color: theme === "light" ? "#212529" : "#F8F9FA",
              }}
            >
              MusixMatch
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <button
        className="change-theme-btn sm-link__btn"
        onClick={toggleTheme}
        style={{
          color: theme === "light" ? "#212529" : "#F8F9FA",
        }}
      >
        <VscColorMode />
      </button>
    </Navbar>
  );
}

export default Header;
