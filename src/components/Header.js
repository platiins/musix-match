import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          LyricFinder
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            data from{" "}
            <a href="https://developer.musixmatch.com/">MusixMatch API</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
