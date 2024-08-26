import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from "virtual:generated-pages-react";
import {useRoutes} from "react-router";
import {BrowserRouter} from "react-router-dom";

import './globals.css'


const App = () => {
    return useRoutes(routes);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
