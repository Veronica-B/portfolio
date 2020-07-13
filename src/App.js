import React from 'react';
import Vero from "./img/Vero.jpg";
import Resume from "./img/resume-pic.png"
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
      <div className="container--resume">
   <a className="a--resume"href="https://docs.google.com/document/d/1vZwJYfSS7kVToykG_XUi8ld_kagfFvN1T0HioIQB5qE/edit"><img className="pic--resume" src={Resume} alt="resume"/></a> 
    <ul className="ul--resume">Hard Skills
      <li>HTML 5</li>
      <li>CSS (SASS)</li>
      <li>Javascript</li>
      <li>Mysql</li>
    </ul>

    <ul className="ul--resume">Soft Skills
      <li>Teamwork</li>
      <li>Public Speaking</li>
      <li>Fast Learner</li>
      <li>Time Management</li>
    </ul>

    <p className="p--resume">Want to know more? Check out my <a href="https://www.linkedin.com/in/veronica-barcia3/">LinkedIn Profile</a>!</p>
      </div>
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
