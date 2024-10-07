import { createRoot } from 'react-dom/client';
import routes from 'virtual:generated-pages-react';
import { useLocation, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './globals.css';
import { StrictMode, useEffect } from 'react';
import ThemeSwitcher from '@/components/nativetranslate/theme-switcher.tsx';
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
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <div className={'relative'}>
                    <App />
                </div>
                <div className="fixed bottom-4 right-4">
                    <ThemeSwitcher />
                </div>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
);
