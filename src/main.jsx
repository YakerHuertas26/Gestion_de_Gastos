import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import WebFont from 'webfontloader';

// cambiar el icono icono de la aplicación
import { Helmet } from 'react-helmet';
import favicon from './Assets/img.png'
import Onda from './Styles/Onda.jsx';

// cargar la fuente Poppins
// 400,500,700,900
    WebFont.load({
      google: {
        families: ['Poppins:400,500,600,700,900', 'sans-serif']
      }
    });

createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
      <title>APP GESTION DE GASTOS</title>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    </Helmet>

    <StrictMode>
      <App />
      <Onda/>
    </StrictMode>
  </>
)
