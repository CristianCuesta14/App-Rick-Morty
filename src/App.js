import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
      <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
}
export default App;
