import Logo from "./Logo";
import Navbar from "./Navbar";
import "./styles/upsite.css";

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
