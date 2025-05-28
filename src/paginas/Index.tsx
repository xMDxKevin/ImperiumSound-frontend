import Upsite from "../componetes/Nav-UpsiteComp/Upsite";
import "../styles/index.css";
import Conteo from "../componetes/Nav-UpsiteComp/Conteo";
import { useNavigate } from "react-router-dom";
import { Prueba } from "./prueba";



function Index() {

const navegar = useNavigate();
const registroURL = "/registro";
const ensayar = "/prueba"

  return (
    <>
      <Upsite />
      <div className="container">

      <div className="txtPrincipal">
        <div className="conteo"><Conteo/></div>
    <br />
    <br />
   
        <p className="mrg-general">
          Bienvenidos a Nuestra Página!
          <br />
          <br />
          Estamos encantados de recibirte en nuestro sitio web, donde
          encontrarás todo lo que necesitas. Nuestro equipo se dedica a
          ofrecerte la mejor experiencia posible, brindándote contenido de
          calidad, recursos útiles y el apoyo que necesitas.
        </p>
        <a onClick={() => navegar(registroURL)}><button className="boton-registrarme">
        <div className="bolita"></div>REGISTRARME</button></a>
        <a onClick={() => navegar(ensayar)}><button className="boton-registrarme">
        <div className="bolita"></div>REGISTRARME</button></a>

      </div>
      <div className="senor" />
      </div>
      
      
    </>
  );
}

export default Index;
