import React from 'react'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import App from '../views/App';
import Portafolio from '../views/Portafolio';

function PagesRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path="/Portafolio/Home" element={<App/>}/>

                <Route exact path="/Portafolio/" element={<App/>}/>

                <Route exact path="/Portafolio" element={<App/>}/>

                <Route exact path="/Portafolio/Proyects" element={<Portafolio/>}/>

                <Route path="*">
                    Page Not Found
                </Route>   

            </Routes>
        </BrowserRouter>
    );
  }
  
  export default PagesRoutes;