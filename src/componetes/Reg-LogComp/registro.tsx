import React, { useState, ChangeEvent, FormEvent } from "react";
import "../../styles/formularioReg.css";
import { useNavigate } from "react-router-dom";
import { API } from "../../config";

interface FormData {
  userName: string;
  email: string;
  nombre: string;
  passw: string;
}

export function Registrarse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    email: "",
    nombre: "",
    passw: "",
  });

  const [confirmPassw, setConfirmPassw] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleConfirmPasswChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassw(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de todos los campos
    if (Object.values(formData).some((field) => field === "")) {
      setError("Please fill in all fields.");
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Confirmar que las contraseñas coincidan
    if (formData.passw !== confirmPassw) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }

      navigate("/inicio-sesion"); // Redirigir a la página de inicio de sesión
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="flexp">
        <h1 className="formulario-titulo">Registrate</h1>
        <div className="flex">
          <p className="formulario-texto-2 txt-f">¿Ya tienes cuenta?</p>
          <a className="formulario-texto-2" onClick={() => navigate("/inicio-sesion")}>
            Inicia sesión
          </a>
        </div>
      </div>
      <div id="a">
        <p className="formulario-texto">Nombre Completo</p>
        <input
          className="inputRqd"
          id="nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div id="a">
        <p className="formulario-texto">Correo Electrónico</p>
        <input
          className="inputRqd"
          id="correo"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div id="a">
        <p className="formulario-texto">Usuario</p>
        <input
          className="inputRqd"
          id="usuario"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </div>
      <div id="a">
        <p className="formulario-texto">Contraseña</p>
        <input
          className="inputRqd"
          id="contrasena"
          type="password"
          name="passw"
          value={formData.passw}
          onChange={handleChange}
        />
      </div>
      <div id="a">
        <p className="formulario-texto">Confirmar Contraseña</p>
        <input
          className="inputRqd"
          id="Ccontrasena"
          type="password"
          value={confirmPassw}
          onChange={handleConfirmPasswChange}
        />
      </div>
      {error && <p className="error-texto">{error}</p>}
      <div id="a">
        <button type="submit" className="boton-Registrarte" disabled={loading}>
          {loading ? "Loading..." : "Registrarse"}
        </button>
      </div>
    </form>
  );
}
