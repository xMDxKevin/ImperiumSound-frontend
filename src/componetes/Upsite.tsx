import Logo from "../componetes/Logo";
import Navbar from "../componetes/Navbar";
import "../styles/upsite.css";

function Upsite() {
  return (
    <>
      <div className="upsite">
        <Logo />
        <Navbar Titulos={"Iniciar Sesión"} />
      </div>
    </>
  );
}
export default Upsite;
