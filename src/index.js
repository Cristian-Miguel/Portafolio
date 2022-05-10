import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Routas from './config/Rutas';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routas />
    </HashRouter>
  </React.StrictMode>
);

