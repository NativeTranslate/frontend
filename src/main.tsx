import { createRoot } from 'react-dom/client';
import routes from 'virtual:generated-pages-react';
import { useLocation, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './globals.css';
import { StrictMode, Suspense, useEffect } from 'react';
import {
    ThemeSwitcher,
    useTheme,
} from '@/components/nativetranslate/theme-switcher';
import {
    AuthProvider,
    protectedRoutes,
    useAuth,
} from '@/lib/core/auth-context';
import Loading from '@/components/nativetranslate/loading';

const App = (): JSX.Element | null => {
    const location = useLocation();
    const { isAuthenticated, loading } = useAuth();
    const theme = useTheme();

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

    if (theme === null) {
        return null;
    }

    return useRoutes(routes) as JSX.Element;
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Suspense fallback={<Loading />}>
                    <div className="relative">
                        <App />
                    </div>
                    <div className="fixed bottom-4 right-4 z-50">
                        <ThemeSwitcher />
                    </div>
                </Suspense>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
);
