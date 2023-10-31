import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import Work from "./main/Work";
import Contact from "./main/Contact";
import Inferenced from "./main/projects/Inferenced";
import Sando from "./main/projects/Sando";
import Zero from "./main/projects/Zero";
import Loading from "./main/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
