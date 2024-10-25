'use client';

import React, { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import Sidebar from '@/components/nativetranslate/sidebar.tsx';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-light-two dark:bg-dark-two">
            <div className="absolute inset-0 z-0">
                <div className="bg-blue-500 h-[50vh] relative w-full">
                    <svg
                        className="absolute bottom-0 left-0 w-full h-auto"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="fill-light-two dark:fill-dark-two"
                            fillOpacity="1"
                            d="M0,192L30,181.3C60,171,120,149,180,138.7C240,128,300,128,360,138.7C420,149,480,171,540,170.7C600,171,660,149,720,160C780,171,840,213,900,202.7C960,192,1020,128,1080,106.7C1140,85,1200,107,1260,122.7C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`transition-all duration-300 ease-in-out ${
                    isSidebarOpen ? 'w-64' : 'w-0'
                }`}
            >
                <Sidebar isOpen={isSidebarOpen} />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top navigation */}
                <header className="flex items-center justify-between p-4 bg-transparent z-30">
                    <div className="flex items-center space-x-2 text-gray-600">
                        <button
                            onClick={toggleSidebar}
                            className="w-12 h-12 rounded-full bg-[#EDF7FD] dark:bg-primary flex items-center justify-center transition-transform duration-300 ease-in-out"
                        >
                            <MenuIcon
                                className={`text-primary dark:text-white transition-transform duration-300 ${
                                    isSidebarOpen ? '' : 'transform rotate-180'
                                }`}
                            />
                        </button>
                    </div>
                </header>

                {children}
            </div>
        </div>
    );
}
