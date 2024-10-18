
import { Formulario } from "../componetes/Reg-LogComp/formulario";
import UpsiteInt from "../componetes/Nav-UpsiteComp/UpsiteInt";
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
