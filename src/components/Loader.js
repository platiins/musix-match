import { Bars } from "react-loader-spinner";

import "../assets/styles/index.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

function Loader() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="loader-container"
      style={{ backgroundColor: theme === "light" ? "#f8f9fa" : "#343A40" }}
    >
      <Bars
        height="50"
        width="70"
        color="#6c757d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
