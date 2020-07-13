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
        I'm Veronica Barcia, an avid programmer and foodie. I'm currently partcipating in the Road to Hire program, learning a mutiltude of languages,
        and professional development. I aim to be a fullstack developer one day, and I'm commited to learning more and more in this everchanging landscape, that is known as coding.
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
