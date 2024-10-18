import "../styles/User.css"
import UpsiteUser from "../componetes/Upsite_User";
import BarraUser from "../componetes/BarraUser";

function Cuenta(){
return(
<>
  <div className="ContainerUser">
    <UpsiteUser/>
    <div className="ContainerContenidoUser">
        <BarraUser></BarraUser>
    </div>
  </div>
</>
);
}
export default Cuenta;