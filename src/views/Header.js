import LogoPicture from "../images/Logo.png";
import '../css/Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="App-header">

            <button type="submit" id="MenuSide" onClick={openNav} >
                {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='whitesmoke'>
                    <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                </svg>
            </button>

            <div id="mySidenav" className="sidenav">
                <button href='#' className="closebtn" onClick={closeNav} >x</button>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/Proyects">Projets</Link></button>
            </div>

            <div className="Space"></div>

            <figure>
                <img src={LogoPicture} alt="Personal Logo" />
            </figure>
        </header>
    );
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

export default Header;