import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BarLoader from "react-spinners/BarLoader";
import "./App.css";

import Content from "./componentes/Content";

import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";


function App() {
  return (
    <>
      <div className="center" id="cen">
        <div className="loader">
          <BarLoader color="#36d7b7" />
        </div>
      </div>
      {/*NavBar */}
      <NavBar />
      {/*Content (main page) */}
      <Content />
      {/* Footer */}
      <Footer />

      {/* Search */}
    </>
  );
}

export default App;
