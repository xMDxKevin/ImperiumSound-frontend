import { UpsiteLog } from "../componetes/UpsiteLog";
import "../styles/feedback.css"
import ContactCard from "../componetes/cuadrocontac";
function Feedback(){
   return(<>
   <UpsiteLog></UpsiteLog>
  
   <div className="form-container">
      <form className="contact-form">
        <input type="text" placeholder="Nombre" className="input-field" />
        <input type="text" placeholder="Sugerencias" className="input-field" />
        <textarea placeholder="Mensaje" id="Mensaje" className="input-field textarea-field" />
        <button type="submit" className="submit-button">ENVIAR</button>
      </form>
      <div className="contc1">
      <ContactCard></ContactCard>
      </div>
    </div>
   </>) 
}
export default Feedback;