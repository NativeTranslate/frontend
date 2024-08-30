import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import routes from 'virtual:generated-pages-react';
import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';


import './globals.css';
import Loading from '@/components/shared/loading.tsx';

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
            <Suspense fallback={<Loading />}>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeIn' }}
                    className="relative"
                >
                    <App />
                </motion.div>
            </Suspense>
        </BrowserRouter>
    </StrictMode>
);
