import './App.css';
import LogoPicture from "./images/Logo.png";
import PersonalPhoto from "./images/FotoTamInf.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button type="submit" id="MenuSide" onClick={openNav} >
          {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='whitesmoke'>
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
          </svg>
        </button>

        <div id="mySidenav" class="sidenav">
          <a class="closebtn" onClick={closeNav} >x</a>
          <a href="#">About Me</a>
          <a href="#">Experience</a>
          <a href="#">Education and Skill</a>
          <a href="#">Portfolio</a>
        </div>

        <div class="Space"></div>

        <figure>
          <img src={LogoPicture} alt="Personal Logo" />
        </figure>
    
      </header>

      <section id="Introduce">
        <label>Hello!</label>
        <label>I'm Cristian Miguel</label>
        <label>Computer System Engineer</label>
      </section>

      <section id='AboutMe'>
         <h2>About Me</h2>
        <figure>
          <img src={PersonalPhoto} alt="Personal Photo" width={50}/>
        </figure>
        <p>
          I'm studying Computer System Engineer at the Instituto Tecnologico de Morelia, 
          my specialty is about the create quality software with Development Agile Methodologies. 
          I'm a person with a positive attitude, a teamwork person, and motivation, in the same way, 
          I have disponibility for always learning new technologies.
        </p>

        <div id="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='whitesmoke'>
              {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
            <a href="https://www.linkedin.com/in/cristian-miguel-marin-barrera-936803200">Cristian Miguel Marin Barrera</a>
        </div> 
        

      </section>

      <section id='Experience'>
        <h2>Experience</h2>
        <h4>Sistema de gestión de apoyos sociales.</h4>
        <p>
          Desarrollo de una aplicación de gestión de apoyos sociales, el sistema 
          se está desarrollando para el municipio de Charo, creada con tecnologías de Laravel.
        </p>
        <h4>Concurso para desarrollar un Sistema de gestión de productos en diferentes plataformas</h4>
        <p>
          El sistema constaba de crear un sistema donde se pudiera generar y subir 
          los productos a las diversas plataformas que eran Amazon, Mercado libre y 
          WooCommerce, se optó por utilizar las tecnologías como React y Node.
        </p>
      </section>

      <section id='Education'>
        <h2>Education and Skills</h2>

      </section>

      <footer>

      </footer>

    </div>
  );
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

export default App;
