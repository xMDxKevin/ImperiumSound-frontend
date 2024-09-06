import Logo from "./Logo";
import "../styles/upsite.css";

const inicio = "/";
function UpsiteInt() {
  return (
    <>
      <div className="upsiteInt">
        <Logo />
        <div>
        <a id="volver" href={inicio}>Regresar</a>
        </div>
      </div>
    </>
  );
}

export default UpsiteInt;
