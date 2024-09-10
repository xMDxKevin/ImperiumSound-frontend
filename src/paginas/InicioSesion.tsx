import Upsite from "../componetes/Upsite";
import { Formulario } from "../componetes/formulario";
import UpsiteInt from "../componetes/UpsiteInt";
import "../styles/inicioSesion.css";

function InicioSesion() {
  return (
    <>
      <UpsiteInt />
     
      <div className="body">
        <Formulario />
      </div>
    </>
  );
}

export default InicioSesion;  
