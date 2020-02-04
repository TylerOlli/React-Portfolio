import React from "react"
 
function Contact(props) {
  return (
    <div>
      <h1>Contact</h1>
      <ul className="Left-list">
        <li><a href="https://github.com/TylerOlli" className="item">Github</a></li>
        <li><a href="https://www.linkedin.com/in/tylerolli/" className="item">LinkedIn</a></li>
        <li><a href="tel:+9145844184" className="item">Phone</a></li>
        <li><a href="mailto:ollityler@gmail.com" className="item">Email</a></li>
      </ul>
    </div>
  )
}
 
export default Contact;