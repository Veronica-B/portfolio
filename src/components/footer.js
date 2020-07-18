import React from 'react';
import Github from "../img/Github.png"
import Linked from "../img/linkedin.png"
import Insta from "../img/insta.png"

const Footer = () => {
return(
<footer className="footer">
   <div>
   <a href="https://github.com/Veronica-B"><img src={Github} alt="Github icon"/></a>
   <a href="https://www.linkedin.com/in/veronica-barcia3/"><img src={Linked} alt="Linkedin icon"/></a>
   <a href="https://www.instagram.com/vero__barcia/"><img src={Insta} alt="Instagram icon"/></a>
   </div>
   Site By Veronica Barcia
   &copy; VB 2020----
   Last Updated 7/17/20
</footer>

)

}


export default Footer
