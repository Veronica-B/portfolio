import React from 'react';


const NavBar = () => {
return(
 <header>
   <nav className="navbar sticky">
       <ul className= "navbar__ul">
           <li className= "navbar__ul__items"><a href="">About Me</a></li>
           <li className= "navbar__ul__items"><a href="#resume"> Resume </a></li>
            <li className= "navbar__ul__items"><a href="#project">Projects</a></li>
            <li className= "navbar__ul__items"><a href="#contact">Get In Touch</a></li>
       </ul>
   </nav>
    </header>

)

}


export default NavBar


