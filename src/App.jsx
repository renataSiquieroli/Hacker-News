import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BarLoader from "react-spinners/BarLoader";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Content from "./componentes/Content";

import NavBar from "./componentes/NavBar";
import Search from "./componentes/SearchBar";
import { getPosts } from "./componentes/Axios";

import SearchBar from "./componentes/SearchBar";
import ListPage from "./componentes/ListPage";

function App() {
  console.log("from here starts the night mare");
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  //

  //<NavBar />
  //  {/*Content (main page) */}
  //  <Content />

  //
  return (
    <>
      {/*NavBar */}
      <NavBar />
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />

      {/* Footer */}
      {/* Search */}
    </>
  );
}

export default App;
