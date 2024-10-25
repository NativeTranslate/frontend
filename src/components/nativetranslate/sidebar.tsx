'use client';

import React, { useState } from 'react';
import {
    BookOpen,
    ChevronDown,
    ChevronRight,
    Clock,
    Folder,
    FrameIcon,
    LayoutGrid,
    MapIcon,
    Settings,
    Star,
} from 'lucide-react';
import { SidebarItemType } from '@/lib/configs/sidebar-config';
import { AnimatePresence, motion } from 'framer-motion';
import OrganisationChooser from '@/components/nativetranslate/organisation-chooser';
import SidebarUsercard from '@/components/nativetranslate/sidebar-usercard.tsx';

const SidebarItem = ({
    item,
    isNested = false,
}: {
    item: SidebarItemType;
    isNested?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = window.location.pathname;
    const isActive = item.path ? pathname === item.path : false;
    const hasSubItems = item.items && item.items.length > 0;

    const toggleSubItems = (e: React.MouseEvent) => {
        if (hasSubItems) {
            e.preventDefault();
            setIsOpen(prev => !prev);
        }
    };

    const content = (
        <>
            <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-200">
                {item.icon && (
                    <item.icon
                        size={20}
                        className="text-gray-500 dark:text-gray-400"
                    />
                )}
                <span className="font-medium">{item.title}</span>
            </div>
            {hasSubItems && (
                <motion.div
                    className="text-gray-400 dark:text-gray-500"
                    initial={false}
                    animate={{ rotate: isOpen ? 360 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? (
                        <ChevronDown size={18} />
                    ) : (
                        <ChevronRight size={18} />
                    )}
                </motion.div>
            )}
        </>
    );

    return (
        <div>
            {item.path ? (
                <a
                    href={item.path.replace('[id]', '1')}
                    className={`select-none flex items-center justify-between transition-all space-x-2 py-3 px-4 rounded-md ${
                        isActive
                            ? 'bg-primary bg-opacity-10 text-primary dark:bg-opacity-20'
                            : 'text-gray-700 dark:text-gray-200 hover:bg-light-two dark:hover:bg-dark-two'
                    } ${isNested ? 'ml-6 border-l' : ''}`}
                >
                    {content}
                </a>
            ) : (
                <div
                    className={`text-sm select-none flex items-center justify-between transition-all space-x-2 py-3 px-4 rounded-md cursor-pointer ${
                        isActive
                            ? 'bg-primary bg-opacity-10 text-primary dark:bg-opacity-20'
                            : 'text-gray-700 dark:text-gray-200 hover:bg-light-two dark:hover:bg-dark-two'
                    } ${isNested ? 'ml-6 border-l' : ''}`}
                    onClick={toggleSubItems}
                >
                    {content}
                </div>
            )}
            <AnimatePresence initial={false}>
                {hasSubItems && isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden ml-4"
                    >
                        {item.items!.map(
                            (
                                subItem: any,
                                index: React.Key | null | undefined,
                            ) => (
                                <SidebarItem
                                    key={index}
                                    item={subItem}
                                    isNested
                                />
                            ),
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const platformItems: SidebarItemType[] = [
    {
        icon: LayoutGrid,
        title: 'Playground',
        items: [
            { title: 'History', icon: Clock },
            { title: 'Starred', icon: Star },
            { title: 'Settings', icon: Settings },
        ],
    },
    { icon: Folder, title: 'Models' },
    { icon: BookOpen, title: 'Documentation' },
    { icon: Settings, title: 'Settings' },
];

const projectItems: SidebarItemType[] = [
    { icon: FrameIcon, title: 'Design Engineering' },
    { icon: Clock, title: 'Sales & Marketing' },
    { icon: MapIcon, title: 'Travel' },
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
    return (
        <aside
            className={`bg-light-one dark:bg-dark-one shadow-lg z-20 relative h-screen flex flex-col transition-all duration-300 ease-in-out ${
                isOpen ? 'w-64' : 'w-0'
            }`}
        >
            {/* Header */}
            <div
                className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="p-6 flex flex-col items-center space-y-4 border-b border-gray-200 dark:border-dark-border">
                    <OrganisationChooser />
                </div>
            </div>

            {/* Scrollable Content */}
            <nav className="flex-1 overflow-y-auto p-4">
                <div className="mb-6">
                    <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Platform
                    </h3>
                    {platformItems.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </div>

                <div>
                    <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Projects
                    </h3>
                    {projectItems.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </div>
            </nav>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-dark-border hover:bg-light-two dark:hover:bg-dark-two/50 cursor-pointer">
                <SidebarUsercard />
            </div>
        </aside>
    );
}
