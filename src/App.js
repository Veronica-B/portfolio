import React from 'react';
import Vero from "./img/Vero.jpg";
import Resume from "./img/resume-pic.png"
import Github from "./img/Github.png"
import Linked from "./img/linkedin.png"
import NavBar from "./components/navBar.js"
import Footer from "./components/footer.js"
import "./css/styles.css"

function App() {
  return (
    <div>
      <NavBar />
      <div className="background">

        <img className="profile-pic" src={Vero} alt="Veronica Barcia" />
        <h1 className="background__header">Hello, I'm Veronica</h1>

        <p id="resume" className="about-me" >
          I'm Veronica Barcia, an avid programmer and foodie. I'm currently partcipating in the Road to Hire program, learning a mutiltude of languages,
          and professional development. I aim to be a fullstack developer one day, and I'm commited to learning more and more in this everchanging landscape, that is known as coding.
      </p>
      </div>

      <section className="background--pink">
        <h2  >Resume</h2>
        <div className="container--resume">
          <a className="a--resume" href="https://docs.google.com/document/d/1vZwJYfSS7kVToykG_XUi8ld_kagfFvN1T0HioIQB5qE/edit"><img className="pic--resume" src={Resume} alt="resume" /></a>
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

          <p id="project" className="p--resume">Want to know more? Check out my <a href="https://www.linkedin.com/in/veronica-barcia3/">LinkedIn Profile</a>!</p>
        </div>
      </section>

      <section className="background--lav">
        <h2 id="projects">Projects</h2>
      </section>

      <section className="background--pink">
        <h2 id="contact">Contact Me!</h2>

        <div className="container--contact">
          <ul className="contact-info">
            <li className="bigger">Stay in Touch:</li>
            <li>Email: veronicabarcia4@gmail.com</li>
            <li>Phone #: 803-431-0834</li>
            <li className="bigger">You can also find me here!</li>
            <li>
              <a href="https://github.com/Veronica-B">
                <img className="contact--icon" src={Github} alt="Github Icon" />
        Github</a>
            </li>
            <li><a href="https://www.linkedin.com/in/veronica-barcia3/" >
            <img className="contact--icon" src={Linked} alt="Linkedin Icon" />
              LinkedIn</a></li>
          </ul>
          <form method="POST" className="container--form">
            <label htmlFor="full_name">Full Name:</label>
            <input type="text" name="full_name"></input>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email"></input>
            <label htmlFor="message">Message:</label>
            <textarea type="text" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
