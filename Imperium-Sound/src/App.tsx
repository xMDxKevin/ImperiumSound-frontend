import React from "react";
import "./App.css";
import "./Logo";
import Upsite from "./Upsite";
import { Formulario } from "./formulario";

function App() {
  return (
    <>
      <div className="App">
        <Upsite /> 
        <div className="contenido">

        <Formulario /> 
        </div>
      </div>
    </>
  );
}

export default App;
