import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import App from './App';

function PagesRoutes() {
    return (
        <BrowserRouter>
            <Router path="/" element={ <App/> }>

            </Router>

        </BrowserRouter>
    );
  }
  
  export default PagesRoutes;