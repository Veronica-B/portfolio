import React from 'react';
import Vero from "./img/Vero.jpg";
import NavBar from "./components/navBar.js"
import "./css/styles.css"

function App() {
  return (
    <div>
    <NavBar />
    <div className="background">
  
    <img className="profile-pic" src={Vero}alt="Veronica Barcia" />
      <h1 className="background__header">Hello, I'm Veronica</h1>
      
      <p className="about-me"> 
        I'm Veronica Barcia, 
      </p>
      </div>
  
      <section className="background--pink">
      <h2>Resume</h2>
      </section>

      <section className="background--lav">
      <h2>Projects</h2>
      </section>

      <section className="background--pink">
      <h2>Contact Me!</h2>
      </section>
    </div>
  );
}

export default App;
