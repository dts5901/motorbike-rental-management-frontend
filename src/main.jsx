import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import stylesheets
import './styles/w3.css';
import './styles/w3-colors-win8.css';

//import component
import Login from './login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
