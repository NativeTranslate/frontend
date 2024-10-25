import { createRoot } from 'react-dom/client';
import routes from 'virtual:generated-pages-react';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import './globals.css';
import React, {
    StrictMode,
    Suspense,
    useEffect,
    useMemo,
    useState,
} from 'react';
import {
    ThemeSwitcher,
    useTheme,
} from '@/components/nativetranslate/theme-switcher';
import {
    adminRoutes,
    AuthProvider,
    protectedRoutes,
    useAuth,
} from '@/lib/core/auth-context';
import Loading from '@/components/nativetranslate/loading';
import { useLocation } from 'react-router';

const App = (): React.ReactElement | null => {
    const location = useLocation();
    const { isAuthenticated, loading, getMe, userData } = useAuth();
    const theme = useTheme();
    const [isCheckingRole, setIsCheckingRole] = useState(true);
    const [userRole, setUserRole] = useState<string | null>(null);

    const currentPath = location.pathname;
    const isProtectedRoute = useMemo(
        () => protectedRoutes.some(route => currentPath.startsWith(route)),
        [currentPath],
    );
    const isAdminRoute = useMemo(
        () => adminRoutes.some(route => currentPath.startsWith(route)),
        [currentPath],
    );

    useEffect(() => {
        const checkAccess = async () => {
            if (!loading && isAuthenticated) {
                try {
                    const user = userData || (await getMe());
                    setUserRole(user.role);
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                } finally {
                    setIsCheckingRole(false);
                }
            } else if (!loading) {
                setIsCheckingRole(false);
            }
        };

        checkAccess().then(_ => _);
    }, [isAuthenticated, loading, userData, getMe]);

    if (loading || theme === null || isCheckingRole) {
        return <Loading />;
    }

    if (!isAuthenticated && isProtectedRoute) {
        return <Navigate to="/sign-in" replace />;
    }

    if (isAdminRoute && userRole !== 'ADMIN' && userRole !== 'admin') {
        return <Navigate to="/not-authorized" replace />;
    }

    return useRoutes(routes) as React.ReactElement;
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
