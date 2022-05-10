import React from 'react';
import {Routes, Route} from "react-router-dom";
import App from '../views/App';
import Portafolio from '../views/Portafolio';

function PagesRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route exact path="/Proyects" element={<Portafolio/>}/>
        </Routes>
    );
}
  
export default PagesRoutes;
