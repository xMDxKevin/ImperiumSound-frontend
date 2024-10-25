import { useState } from 'react';
import '../../styles/panelDesplegable.css'; 
import { useNavigate } from "react-router-dom";

export function User() {
 
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navegar = useNavigate();
  const cuenta = "/cuenta";
  const foro = "/foro"
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button id='btnUser' type='button' onClick={toggleMenu}>
          <MyUser />
        </button>

        {isMenuOpen && (
          <div className="menu-desplegable">
            <ul>
            <p id='UserBienvenida'>¡Hola!</p>
              <a onClick={() => navegar(cuenta)}><li> Cuenta{" "}</li></a>
              <a onClick={() => navegar(foro)}><li> Foro{" "}</li></a>
              <li>Cerrar Sesion</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export function MyUser() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="MyUser"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        <path
          fillRule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
        />
      </svg>
    </>
  );
}