import React from 'react';
import Github from "../img/Github.png"
import Linked from "../img/linkedin.png"
import Insta from "../img/insta.png"

const Footer = () => {
return(
<footer className="footer">
   <img src={Github} alt="Github icon"/>
   <img src={Linked} alt="Linkedin icon"/>
   <img src={Insta} alt="Instagram icon"/>
</footer>

)

}


export default Footer
