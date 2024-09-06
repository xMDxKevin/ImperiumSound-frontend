import { UpsiteLog } from "../componetes/UpsiteLog";
import "../styles/caracteristicas.css"
import CuadroCarac from "../componetes/CuadroCaracteristicas";
function Caracteristicas(){
    return(
        <>
        <UpsiteLog></UpsiteLog> 
            <div className="tituloCarac"><h1>CARACTERISTICAS</h1></div>
            <CuadroCarac></CuadroCarac>

        </>
    )
    
}
export default Caracteristicas;