import Logo from "../componetes/Logo";
import "../styles/servicios.css";
import Cuadro from "../componetes/cuadro";
function Servicios() {
  return (
    <>
    <div className="upsite">
        <Logo/>
        <a href="./" id="volver"><p>Volver</p></a>
      </div>
      <div className="titulo1">
      <h1>SERVICIOS</h1>
      </div>
      <Cuadro></Cuadro>
    </>
  );
}

export default Servicios;