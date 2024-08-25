// Formulario.tsx
import React, { useState } from "react";
import "../styles/formularioReg.css";
 // Asegúrate de que esta ruta sea correcta

export function Registrarse() {
  const [nombre, setNombre] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [usuario, setUsuario] = useState<string>("");
  const [Ccontrasena, setCContrasena] = useState<string>("");

  const manejarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Contraseña:", contrasena);
    console.log("Correo:", correo);
    console.log("Usuario:", usuario);
    console.log("Ccontrasena:", Ccontrasena);
  };

  return (
    <>
      <form className="formulario" onSubmit={manejarSubmit}>
        <h2>Registro </h2>
        <div id="a">
          <p>Nombre Completo*</p>
          <label htmlFor="nombre"></label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div  id="a">
          <p>Correo Electronico*</p>
          <label htmlFor="correo"></label>
          <input
            id="correo"
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div id="a">
          <p>Usuario*</p>
          <label htmlFor="usuario"></label>
          <input
            id="usuario"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div id="a">
          <label htmlFor="contrasena"></label>
          <p>Contraseña*</p>
          <input
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <div id="a">
          <label htmlFor="Ccontrasena"></label>
          <p>Confirmar Contraseña*</p>
          <input
            id="Ccontrasena"
            type="password"
            value={Ccontrasena}
            onChange={(e) => setCContrasena(e.target.value)}
          />
        </div>
        <div id="a">
        <button className="btnReg" type="submit">Registrate</button>
        </div>
      </form>
    </>

  );
}
