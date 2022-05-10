import React from 'react'
import {Routes, Route, HashRouter} from "react-router-dom";
import App from '../views/App';
import Portafolio from '../views/Portafolio';

function PagesRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/Portafolio" element={<App/>}/>

                <Route exact path="/Portafolio/Proyects"element={<Portafolio/>}/>

            </Routes>
        </HashRouter> 
    );
}
  
export default PagesRoutes;
