import { Suspense, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import routes from 'virtual:generated-pages-react';
import { useLocation, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster.tsx';

import './globals.css';
import Loading from '@/components/shared/loading.tsx';
import PageWrapper from '@/components/shared/page-wrapper.tsx';
import { AuthProvider, protectedRoutes, useAuth } from '@/lib/core/auth-context.tsx';

/**
 * The main application component.
 * Uses `useRoutes` to render the routes defined in the `routes` object.
 *
 * @returns {JSX.Element} The rendered routes.
 */
const App = (): JSX.Element | null => {
    const location = useLocation();
    const { isAuthenticated, loading } = useAuth();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            const currentPath = location.pathname;
            const isProtectedRoute = protectedRoutes.some(route =>
                currentPath.startsWith(route),
            );
            if (isProtectedRoute) {
                window.location.href = '/sign-in';
            }
        }
    }, [isAuthenticated, loading, location]);

    return useRoutes(routes) as JSX.Element;
};

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthProvider>
            <Suspense fallback={<Loading />}>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeIn' }}
                    className="relative"
                >
                    <PageWrapper>
                        <App />
                        <Toaster />
                    </PageWrapper>
                </motion.div>
            </Suspense>
        </AuthProvider>
    </BrowserRouter>,
);
