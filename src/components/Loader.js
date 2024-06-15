import { Bars } from "react-loader-spinner";

import "../assets/styles/index.scss";

function Loader() {
  return (
    <div className="loader-container">
      <Bars
        height="50"
        width="50"
        color="#000000"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
