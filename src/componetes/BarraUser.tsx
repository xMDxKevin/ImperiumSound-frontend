import "../styles/User.css"
import { useNavigate } from "react-router-dom";

function BarraUser() {
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
                    <div className="ContenedorTxtUser">
                        <h1 id="TitUser">INFORMACION PERSONAL</h1>
                        <br /><br />
                        <p id="TxtUser">Nombre: Isabela Avendaño Londoño</p>
                        <br />
                        <p id="TxtUser">Edad: 17</p>
                        <br />
                        <p id="TxtUser">Correo: isaavendal05@gmail.com</p>
                        <br />
                        <p id="TxtUser">Se unió en junio 12 del 2024</p>
                        <br /><br />
                        <h1 id="TitUser">CONTRASEÑA</h1>
                        <input type="text" id="InputContUser" placeholder="Contraseña Actual"/>
                        <br />
                        <input type="text" id="InputContUser" placeholder="Nueva Contraseña"/>
                            <div>
                                <button type="submit" id="BtnUserPass">Guardar</button>
                                <a href=""><button type="button" id="BtnUserPass">Recuperar Contraseña</button></a>
                            </div>
                                <div className="ContenedorUserFoto">
                                    <img id="ImagenUser" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""></img>
                                        <div className="ProfileInfo">
                                            <p>Estudiante</p>
                                            <p>Nombre de Usuario</p>
                                        </div>
                                </div>
                    </div>
                    
        </div>
        </>
    )
}
export default BarraUser;