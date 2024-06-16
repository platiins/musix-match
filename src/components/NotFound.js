import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme";

function NotFound() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="not-found-page"
      style={{
        backgroundColor: theme === "light" ? "#f8f9fa" : "#343A40",
        color: theme === "light" ? "#212529" : "#F8F9FA",
      }}
    >
      <h1 className="error-code">404</h1>
      <Link
        className="home-link"
        to={`/`}
        style={{
          color: theme === "light" ? "#212529" : "#F8F9FA",
        }}
      >
        Go to Search
      </Link>
    </section>
  );
}

export default NotFound;
