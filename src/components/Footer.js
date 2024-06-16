import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import { useContext } from "react";
import { ThemeContext } from "../context/theme";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      id="footer"
      className="footer"
      style={{
        backgroundColor: theme === "light" ? "#e9ecef" : " #212529",
        color: theme === "light" ? "#212529" : "#F8F9FA",
      }}
    >
      <p
        className="footer__author mb-0"
        style={{
          color: theme === "light" ? "#212529" : "#F8F9FA",
        }}
      >
        by platiins
      </p>
      <p className="footer__rights mb-0">All Rights Reserved | 2024</p>
      <div className="footer__sm-container">
        <a href="https://github.com/platiins" className="sm-link">
          <button
            className="sm-link__btn"
            style={{
              color: theme === "light" ? "#212529" : "#F8F9FA",
            }}
          >
            <FiGithub />
          </button>
        </a>
        <a href="https://www.instagram.com/platiins/">
          <button
            className="sm-link__btn"
            style={{
              color: theme === "light" ? "#212529" : "#F8F9FA",
            }}
          >
            <FaInstagram />
          </button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
