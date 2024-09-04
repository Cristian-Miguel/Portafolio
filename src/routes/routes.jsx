import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Projects from '../pages/projects';
import Header  from '../components/header';

function PagesRoutes() {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route exact path="/projects" element={ <Projects/> }/>
            </Routes>
        </>
    );
}
  
export default PagesRoutes;
