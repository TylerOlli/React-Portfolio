import React from "react";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 
function Contact(props) {
  return (
    <div>
      <h1>Contact</h1>
      <ul className="Left-list">
        <li><FontAwesomeIcon icon={faGithub} className="fontAwesomeList" /><a href="https://github.com/TylerOlli" className="item">Github</a></li>
        <li><FontAwesomeIcon icon={faLinkedinIn} className="fontAwesomeList" /><a href="https://www.linkedin.com/in/tylerolli/" className="item">LinkedIn</a></li>
        <li><FontAwesomeIcon icon={faPhone} className="fontAwesomeList" /><a href="tel:+9145844184" className="item">Phone</a></li>
        <li><FontAwesomeIcon icon={faEnvelope} className="fontAwesomeList" /><a href="mailto:ollityler@gmail.com" className="item">Email</a></li>
      </ul>
    </div>
  )
}
 
export default Contact;