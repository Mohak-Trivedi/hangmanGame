import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";
import Home from "./pages/Home";
import { WordContext } from "../context/WordsContext";
import { useState } from "react";

function App() {
  const [wordsList, setWordsList] = useState([]);

  return (
    <WordContext.Provider value={{ wordsList, setWordsList }}>
      <Routes>
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </WordContext.Provider>
  );
}

export default App;
