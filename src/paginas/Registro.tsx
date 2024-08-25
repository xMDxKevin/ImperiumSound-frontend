
import { Registrarse } from "../componetes/registro";
import Logo from "../componetes/Logo";
import "../styles/registro.css" 

function Registro() {
  return (
    <>
    
      <div className="upsite">
        <Logo/>
      </div>
    <div className="App">
        <div className="contenido">
          <Registrarse />
        </div>
      </div>
    </>
  );
}
export default Registro;
