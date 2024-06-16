import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "../context/theme";
import { Outlet } from "react-router-dom";

function RouterLayout() {
  return (
    <ThemeProvider>
      <header>
        <Header />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default RouterLayout;
