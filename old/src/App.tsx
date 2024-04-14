import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
//import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<Navbar />*/}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
