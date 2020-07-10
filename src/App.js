import React from 'react';
import Vero from "./img/Vero.jpg";
import NavBar from "./components/navBar.js"
import "./css/styles.css"

function App() {
  return (
    <div>
    <NavBar />
    <div className="background">
      <div className="triangle--long-base left-side"></div>
      <div className="triangle--long-base upside-down--left"></div>
      <div></div> 
      <div className="triangle--iso tilted-right"></div>
      <div className="triangle--long-base tilted"></div> 
      
      <h1 className="background__header">Hello, I'm Veronica</h1>

      <div className="triangle--long-base tilted"></div> 
      </div>
      <img src={Vero}alt="Veronica Barcia" />
      <h2>About Me</h2>
      <p> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
      </p>
      <h2>My Work</h2>
    </div>
  );
}

export default App;
