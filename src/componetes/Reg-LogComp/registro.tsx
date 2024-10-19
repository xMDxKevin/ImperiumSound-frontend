
import React, { useState } from "react";
import "../../styles/formularioReg.css";
import { useNavigate } from "react-router-dom";

export function Registrarse() {


  const navegar = useNavigate();
  const inicioSesionURL = "/inicio-sesion";
  
  const [nombre, setNombre] = useState<string>("");
const [contrasena, setContrasena] = useState<string>("");
const [correo, setCorreo] = useState<string>("");
const [usuario, setUsuario] = useState<string>("");
const [confirmarContrasena, setConfirmarContrasena] = useState<string>("");

const manejarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if (contrasena === confirmarContrasena) {
    console.log("La contraseña sí coinciden");
    const data = { userName:usuario, nombre: nombre, email: correo, passw: contrasena };
     
    fetch('http://192.168.137.135:3000/register', {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.error('Error en la solicitud:', error));
    console.log()
    navegar(inicioSesionURL);
  } else { 
    console.log("La contraseña no coincide");
  }
   
  
};


  return (
    <>
      <form className="formulario" onSubmit={manejarSubmit}>
      <div className="flexp">

<h1 className="formulario-titulo">Registrate</h1>
<div className="flex">
  <p className="formulario-texto-2 txt-f">¿Ya tienes cuenta?</p>
  <a className="formulario-texto-2" onClick={() => navegar(inicioSesionURL)} >Inicia sesion</a>
</div>
</div>
        <div id="a">
          <p className="formulario-texto">Nombre Completo</p>
          <label htmlFor="nombre"></label>
          <input
            className="inputRqd"
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div id="a">
          <p className="formulario-texto">Correo Electronico</p>
          <label htmlFor="correo"></label>
          <input
            className="inputRqd"
            id="correo"
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div id="a">
          <p className="formulario-texto">Usuario</p>
          <label htmlFor="usuario"></label>
          <input
            className="inputRqd"
            id="usuario"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div id="a">
          <label htmlFor="contrasena"></label>
          <p className="formulario-texto">Contraseña</p>
          <input
            className="inputRqd"
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <div id="a">
          <label htmlFor="Ccontrasena"></label>
          <p className="formulario-texto">Confirmar Contraseña</p>
          <input
            className="inputRqd"
            id="Ccontrasena"
            type="password"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
          />
        </div>
        <div id="a">
          <button type="submit" className="boton-Registrarte">Registrarse</button>
        </div>
      </form>
    </>
  );
}
