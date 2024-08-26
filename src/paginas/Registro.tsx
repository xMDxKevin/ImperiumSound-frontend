import { Registrarse } from "../componetes/registro";
import Logo from "../componetes/Logo";
import "../styles/registro.css" 
import UpsiteInt from "../componetes/UpsiteInt";

function Registro() {
  return (
    <>
    
     <UpsiteInt/>
        <div className="body">  
          <Registrarse />
        </div>
    
    </>
  );
}
export default Registro;
