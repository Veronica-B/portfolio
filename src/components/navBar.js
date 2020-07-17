import React, { useState } from 'react';


const NavBar = () => {

    const [show, setShow]= useState(false);

    const handleMobileNav= () => {
        const navBar=document.querySelector(".navbar");
        const sidenav=document.querySelector(".nav--mobile");
        navBar.classList.toggle('change')
    if (show===false){
        setShow(true);
        console.log(show)
        return(
        sidenav.style.display="flex"
        )
    }else{
        setShow(false);
        return(
        sidenav.style.display="none"
        )
}
    }
return(
 <header>
   <nav className="navbar sticky">
       <ul className= "navbar__ul">
           <li className= "navbar__ul__items"><a href="#">About Me</a></li>
           <li className= "navbar__ul__items"><a href="#resume"> Resume </a></li>
            <li className= "navbar__ul__items"><a href="#project">Projects</a></li>
            <li className= "navbar__ul__items"><a href="#contact">Get In Touch</a></li>
       </ul>

       <div class="hamburger--container" onClick={() => handleMobileNav()}>
                <div class="hamburger--line line--one"></div>
                <div class="hamburger--line line--two"></div>
                <div class="hamburger--line line--three"></div>
        </div>
   </nav>

   <nav class="nav--mobile">
            
            <ul class="nav_ul--mobile  sticky">
  <li className= "navbar__ul__items "><a href="" >About Me</a></li>
           <li className= "navbar__ul__items  "><a href="#resume" onClick={ () => handleMobileNav()}> Resume </a></li>
            <li className= "navbar__ul__items"><a href="#project" onClick={ () => handleMobileNav()}>Projects</a></li>
            <li className= "navbar__ul__items"><a href="#contact" onClick={ () => handleMobileNav()}>Get In Touch</a></li>
            </ul>
        </nav>
    </header>

)

}


export default NavBar


