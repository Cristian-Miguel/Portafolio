import './App.css';
import HomePicture from "./images/code1.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Experience</li>
            <li>Educaction</li>
            <li>Portfolio</li>
          </ul>
        </nav>
      </header>

      <section id="Introduce">
        <label>Hello!</label>
        <label>I'm Cristian Miguel</label>
        <label>Computer System Engineer</label>
      </section>

      <section id='AboutMe'>
        <h3>About Me</h3>

      </section>

      <section id='Experience'>
        <h3>Experience</h3>

      </section>

      <section id='Education'>
        <h3>Education</h3>

      </section>

      <footer>

      </footer>

    </div>
  );
}

export default App;
