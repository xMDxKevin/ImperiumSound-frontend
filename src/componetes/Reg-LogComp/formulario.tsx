// Formulario.tsx
import React, { useState } from "react";
import "../../styles/formulario.css";
import MyGoogle from "./MyGoogle";
import { useNavigate } from "react-router-dom";

// Asegúrate de que esta ruta sea correcta

export function Formulario() {
  const navegar = useNavigate();
  const registroURL = "/registro";
  const [nombre, setNombre] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");

  const manejarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Contraseña:", contrasena);
  };

  return (
    <>
      <form className="formulario" onSubmit={manejarSubmit}>
        <div className="flexp">
          <h1 className="formulario-titulo">Iniciar Sesión</h1>
          <div className="flex">
            <p className="formulario-texto-2 txt-f">¿Es tu primera vez?</p>
            <a
              className="formulario-texto-2"
              onClick={() => navegar(registroURL)}
            >
              Registrate
            </a>
          </div>
        </div>
        <div>
          <p className="formulario-texto">Correo</p>
          <label htmlFor="nombre"></label>
          <input
            className="inputRqd"
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contrasena"></label>
          <p className="formulario-texto">Contraseña</p>
          <input
            className="inputRqd"
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <p className="formulario-texto-2 hover">¿Olvidaste la contraseña ?</p>
        </div>
        <button type="submit" className="boton-Registrarte1">Iniciar Sesion</button>
        <div className="formulario-google">
          <p className="formulario-texto">¿O conectate con?
            <br />
           <br />
          </p>
          <MyGoogle />
        </div>
      </form>
    </>
  );
}
