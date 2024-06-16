import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <p className="footer__author mb-0">by platiins</p>
      <p className="footer__rights mb-0">All Rights Reserved | 2024</p>
      <div className="footer__sm-container">
        <a href="https://github.com/platiins" className="sm-link">
          <button className="sm-link__btn">
            <FiGithub />
          </button>
        </a>
        <a href="https://www.instagram.com/platiins/">
          <button className="sm-link__btn">
            <FaInstagram />
          </button>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
