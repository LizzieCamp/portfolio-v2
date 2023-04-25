import { Parallax } from "@react-spring/parallax";
import React from "react";
import { About } from "./components/About/About";
import { Test } from "./components/Test/Test";
import { ParticlesBackground } from "./Particles";
// import './App.css';
import "./styles/styles";

const App = () => {
  return (
    <div>
      {/* <ParticlesBackground /> */}
        <Test />
        {/* <About /> */}
      
    </div>
  );
};

export default App;
