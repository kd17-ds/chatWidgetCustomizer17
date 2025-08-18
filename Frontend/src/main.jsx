import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { GeneralProvider } from "./contexts/GeneralContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </BrowserRouter>,
);
