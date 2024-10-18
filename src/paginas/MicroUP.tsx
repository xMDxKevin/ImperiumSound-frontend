import "../styles/User.css"
import UpsiteUser from "../componetes/Upsite_User";
import MicrophoneVisualizer from "../componetes/MicroPrueba";
import { useNavigate } from "react-router-dom";

function MicroUP (){
    return(
        <>
        <div className="ContainerUser">
    <UpsiteUser/>
    <div className="ContainerContenidoUser">
        <NavUser/>
        <div>
            <h1>Visualizador de Micrófono</h1>
            <MicrophoneVisualizer></MicrophoneVisualizer>
        </div>
    </div>
  </div>
        </>
    )
}
export default MicroUP;

export function NavUser(){
    const navegar = useNavigate();
    const Microfono = "/microConfig";
    const Soporte = "/soporte";
    const Info = "/cuenta";
    return(
        <>
        <div className="ContenedorListaUser">
            <ul>
                <a onClick={() => navegar(Info)}>{" "}<li id="ListaUser"><h1>INFORMACION</h1></li></a>
                <a onClick={() => navegar(Microfono)}>{" "}<li id="ListaUser"><h1>MICROFONO</h1></li></a>
                <a onClick={() => navegar(Soporte)}>{" "}<li id="ListaUser"><h1>SOPORTE</h1></li></a>
            </ul>
                <div className="Linea"></div>
        </div>
        </>
    )
}