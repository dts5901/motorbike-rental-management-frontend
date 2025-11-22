import { StrictMode } from 'react';
import  { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

//import stylesheets
import './styles/common.css';
import './styles/w3.css';
import './styles/w3-colors-win8.css';

//import app component
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/motorbike-rental">
      <App />
    </BrowserRouter>
  </StrictMode>
);
