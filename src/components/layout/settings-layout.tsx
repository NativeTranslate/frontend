import React, { useEffect, useState } from 'react';
import { settingsCategories } from '@/lib/settings.tsx';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const SettingsLayout = ({ children }: LayoutProps) => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState(settingsCategories[0].key);

    useEffect(() => {
        const currentCategory = location.pathname.split('/').pop();
        if (settingsCategories.some(category => category.key === currentCategory)) {
            // @ts-ignore
            setActiveCategory(currentCategory);
        }
    }, [location.pathname]);

    return (
        <div className="flex p-4 bg-dark-300">
            {/* Sidebar */}
            <nav className="w-72 p-5 space-y-4 rounded-3xl bg-dark-200 h-full">
                <ul className="space-y-3">
                    {settingsCategories.map(category => (
                        <li key={category.key}>
                            <Link to={`/dashboard/settings/${category.key}`}>
                                <span
                                    className={`p-4 rounded-md flex items-center  ${
                                        activeCategory === category.key
                                            ? 'bg-main-two text-white-900'
                                            : 'text-gray-400 hover:bg-dark-200'
                                    }`}
                                >
                                    {category.icon && (
                                        React.cloneElement(category.icon, {
                                            className: 'h-5 w-5 mr-2'
                                        })
                                    )}
                                    {category.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content */}
            <div className="flex-grow mx-6 my-2 bg-dark-300 overflow-y-auto rounded-3xl h-full">
                {children}
            </div>
        </div>
    );
};

export default SettingsLayout;
