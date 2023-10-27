import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import TopBar from "./main/TopBar";
import Work from "./main/Work";
import Contact from "./main/Contact";
import Inferenced from "./main/projects/Inferenced";
import Sando from "./main/projects/Sando";
import Zero from "./main/projects/Zero";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
