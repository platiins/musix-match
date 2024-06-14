import { Outlet } from "react-router-dom";
import Header from "./Header";

function RouterLayout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default RouterLayout;
