import React from "react";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 
function Contact(props) {
  return (
    <div>
      <h1>Contact</h1>
      <div className="contactContainer">
        <div className="contactItem"><FontAwesomeIcon icon={faGithub} className="fontAwesomeTop" /><a href="https://github.com/TylerOlli" className="item">Github</a></div>
        <div className="contactItem"><FontAwesomeIcon icon={faLinkedinIn} className="fontAwesomeTop" /><a href="https://www.linkedin.com/in/tylerolli/" className="item">LinkedIn</a></div>
        <div className="contactItem"><FontAwesomeIcon icon={faPhone} className="fontAwesomeTop" /><a href="tel:+9145844184" className="item">Phone</a></div>
        <div className="contactItem"><FontAwesomeIcon icon={faEnvelope} className="fontAwesomeTop" /><a href="mailto:ollityler@gmail.com" className="item">Email</a></div>
      </div>
    </div>
  )
}
 
export default Contact;