import React from 'react';
import MobileSideBar from '@/components/shared/mobile-side-bar.tsx';
import LeftSidebar from '@/components/shared/left-sidebar.tsx';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className="relative bg-dark-200 min-h-screen flex">
            {/* Desktop Sidebar */}
            <LeftSidebar />

            {/* Mobile Sidebar */}
            <div className="lg:hidden">
                <MobileSideBar />
            </div>

            {/* Main Content */}
            <section className="flex flex-1 flex-col min-h-screen px-6 sm:px-5 pt-5  ">
                <div className="flex-grow w-full h-full mt-10">{children}</div>
            </section>
        </div>
    );
};

export default Layout;
