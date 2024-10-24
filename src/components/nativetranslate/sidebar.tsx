'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
    SidebarCategoryType,
    sidebarConfig,
    SidebarConfigItemType,
    SidebarItemType,
} from '@/lib/configs/sidebar-config';

import { AnimatePresence, motion } from 'framer-motion';

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
            <div className="flex items-center space-x-2">
                {item.icon && <item.icon size={20} />}
                <span>{item.title}</span>
            </div>
            {hasSubItems && (
                <div className="text-gray-400">
                    {isOpen ? (
                        <ChevronDown size={16} />
                    ) : (
                        <ChevronRight size={16} />
                    )}
                </div>
            )}
        </>
    );

    return (
        <div>
            {item.path ? (
                <a
                    href={item.path.replace('[id]', '1')}
                    className={`select-none flex items-center justify-between transition-all space-x-2 px-6 py-3 hover:bg-gray-100 dark:hover:bg-dark-two ${
                        isActive
                            ? 'bg-blue-100 text-blue-600 dark:bg-dark-two dark:text-primary'
                            : 'text-gray-600 dark:text-gray-300'
                    } ${isNested ? 'pl-12' : ''}`}
                >
                    {content}
                </a>
            ) : (
                <div
                    className={`select-none flex items-center justify-between transition-all space-x-2 px-6 py-3 hover:bg-gray-100 dark:hover:bg-dark-two cursor-pointer ${
                        isActive
                            ? 'bg-blue-100 text-blue-600 dark:bg-dark-two dark:text-primary'
                            : 'text-gray-600 dark:text-gray-300'
                    } ${isNested ? 'pl-12' : ''}`}
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
                        {item.items!.map((subItem, index) => (
                            <SidebarItem key={index} item={subItem} isNested />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
const SidebarCategory = ({ category }: { category: SidebarCategoryType }) => {
    return (
        <div className="mt-4">
            <h3 className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400 select-none">
                {category.title}
            </h3>
            {category.items.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}
        </div>
    );
};

const SidebarContent = ({ item }: { item: SidebarConfigItemType }) => {
    if ('items' in item) {
        // @ts-ignore
        return <SidebarCategory category={item} />;
    } else {
        return <SidebarItem item={item} />;
    }
};

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
    return (
        <aside
            className={`bg-light-one dark:bg-dark-one shadow-md z-20 relative h-screen overflow-y-auto transition-all duration-300 ease-in-out ${
                isOpen ? 'w-64' : 'w-0'
            }`}
        >
            <div
                className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="p-4 flex flex-col items-center space-y-2">
                    <img
                        src={'/assets/icons/logo.svg'}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-12 h-12"
                    />
                    <h1 className="text-xl font-bold text-gray-700 dark:text-white">
                        NativeTranslate
                    </h1>
                </div>
                <nav className="mt-8">
                    {sidebarConfig.map(
                        (item: any, index: React.Key | null | undefined) => (
                            <SidebarContent key={index} item={item} />
                        ),
                    )}
                </nav>
            </div>
        </aside>
    );
}
