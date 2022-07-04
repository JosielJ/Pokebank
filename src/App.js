import React from "react";
import "./App.css";

//import { Canvas } from "@react-three/fiber";

import Main from "./components/Main";
import Subsection from "./components/Subsection";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Main />
      <Subsection />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;
