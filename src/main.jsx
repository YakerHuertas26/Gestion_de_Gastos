import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import WebFont from 'webfontloader';

// cargar la fuente Poppins
// 400,500,700,900
    WebFont.load({
      google: {
        families: ['Poppins:400,500,700,900', 'sans-serif']
      }
    });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
