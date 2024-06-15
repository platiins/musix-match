import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/index.scss";

function Header() {
  return (
    <Navbar className="bg-body-tertiary" id="nav-bar">
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
    </Navbar>
  );
}

export default Header;
