import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import TopBar from "./main/TopBar";
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
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
            <Route path="inferenced" element={<Inferenced />} />
            <Route path="sando" element={<Sando />} />
            <Route path="zero" element={<Zero />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
