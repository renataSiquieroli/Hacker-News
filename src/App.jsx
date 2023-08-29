import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//import RingLoader from "react-loader-spinner";
import BarLoader from "react-spinners/BarLoader";

import "./App.css";

function App() {
  return (
    <>
      <div className="center" id="cen">
        <div className="loader">
          <BarLoader color="#36d7b7" />
        </div>
      </div>
      {/*NavBar */}
      {/*Content (main page) */}
      {/* Footer */}
      {/* Search */}
    </>
  );
}

export default App;
