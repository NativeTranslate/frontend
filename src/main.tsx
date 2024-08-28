import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import routes from 'virtual:generated-pages-react';
import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './globals.css';

/**
 * The main application component.
 * Uses `useRoutes` to render the routes defined in the `routes` object.
 *
 * @returns {JSX.Element} The rendered routes.
 */
const App = () => {
    return useRoutes(routes);
};

// Create a root element and render the application within it.
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
