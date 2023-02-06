import "./App.css";
import Favorites from "./components/Favorites/Favorites";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Nav from "./components/Nav/Nav";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const email = "ejemplo@gmail.com";
  const password = "1password";

  function login(userData) {
    console.log(userData.password);
    console.log(userData.email);

    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("DATOS INCORRECTOS");
    }
  }

  useEffect(() => {
    // !access ? navigate("/"):navigate("/home");
    !access && navigate("/");
  }, [access]);

  function onSearch(character) {
    if (character == undefined || character == "" || isNaN(character)) {
      return window.alert("Digite un ID valido");
    }
    for (let element of characters) {
      if (element.id == character)
        return window.alert("Ya hay un personaje con ese ID");
    }

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id != id));
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      
      <Routes>
        {/* <Cards characters={characters} onClose={onClose} /> */}

        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route exact path="/" element={<Form login={login} />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
