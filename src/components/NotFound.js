import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section id="not-found-page">
      <h1>404</h1>
      <Link className="home-link" to={`/`}>Go to Search</Link>
    </section>
  );
}

export default NotFound;
