'use client';

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from 'lucide-react';
import { settingsCategories } from '@/lib/configs/settingsCategories.tsx';

interface LayoutProps {
    children: React.ReactNode;
}

export default function SettingsLayout({ children }: LayoutProps) {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState(
        settingsCategories[0].key
    );
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const currentCategory = location.pathname.split('/').pop();
        if (
            settingsCategories.some(
                category => category.key === currentCategory
            )
        ) {
            setActiveCategory(currentCategory as string);
        }
    }, [location.pathname]);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex flex-col lg:flex-row p-2 sm:p-4 bg-dark-300">
            <Button
                variant="ghost"
                size="icon"
                className="lg:hidden mb-4 self-start bg-main-two border-transparent focus:bg-main-two"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? (
                    <XIcon className="h-4 w-4 text-white-900" />
                ) : (
                    <MenuIcon className="h-4 w-4 text-white-900" />
                )}
                <span className="sr-only">Toggle sidebar</span>
            </Button>

            {/* Sidebar */}
            <nav
                className={`w-full h-full lg:w-72 p-3 sm:p-5 space-y-4 rounded-3xl bg-dark-200 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}
            >
                <ul className="space-y-3">
                    {settingsCategories.map(category => (
                        <li key={category.key}>
                            <Link
                                to={`/dashboard/settings/${category.key}`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <span
                                    className={`p-3 sm:p-4 rounded-md flex items-center ${
                                        activeCategory === category.key
                                            ? 'bg-main-two text-white-900'
                                            : 'text-gray-400 hover:bg-dark-200'
                                    }`}
                                >
                                    {category.icon &&
                                        React.cloneElement(category.icon, {
                                            className: 'h-5 w-5 mr-2'
                                        })}
                                    {category.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Main content */}
            <div className="flex-grow mx-0 lg:mx-6 mt-4 lg:mt-0 bg-dark-300 overflow-y-auto rounded-3xl">
                {children}
            </div>
        </div>
    );
}
