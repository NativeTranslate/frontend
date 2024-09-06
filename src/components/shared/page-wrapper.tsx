/**
 * © 2024 Florian O. (https://github.com/Fedox-die-Ente)
 * Created on: 9/6/2024 4:48 AM
 *
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const formatTitle = (path: string) => {
    const baseTitle = 'NativeTranslate';
    const pageTitle =
        path === '/'
            ? 'Home'
            : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);

    if (pageTitle.includes('/')) {
        return `${pageTitle.split('/')[0]} | ${baseTitle}`;
    }

    return `${pageTitle} | ${baseTitle}`;
};

const PageWrapper = ({ children }: any) => {
    const location = useLocation();

    useEffect(() => {
        document.title = formatTitle(location.pathname);
    }, [location.pathname]);

    return <>{children}</>;
};

export default PageWrapper;
