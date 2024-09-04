import React, { useEffect, useState } from 'react';
import {
    Collapsible,
    CollapsibleTrigger,
} from '@/components/ui/collapsible.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ChevronDown, ChevronRight, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { bottomLinks, topLinks } from '@/lib/configs/sidebarConfig.tsx';
import { SidebarLink } from '@/lib/types';
import { AnimatePresence, motion } from 'framer-motion';

const MenuItem = ({ icon, label, children, href }: SidebarLink) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const pathname = window.location.pathname;

    const hasChildren = children && children.length > 0;

    useEffect(() => {
        if (href && pathname.startsWith(href)) {
            setIsOpen(true);
        }
    }, [pathname, href]);

    useEffect(() => {
        if (href && pathname === href && !hasChildren) {
            setIsSelected(true);
        }
    }, [pathname, href]);

    const handleClick = () => {
        if (!children && href) {
            window.location.href = href;
        }
    };

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
                <Button
                    onClick={handleClick}
                    className={cn(
                        'w-full h-14 justify-between text-left text-gray-400 bg-transparent hover:bg-main-two hover:text-white-900 mt-1',
                        isSelected &&
                            'bg-main-two text-white-900 hover:bg-main-two',
                    )}
                >
                    <span className="flex items-center gap-2 text-lg">
                        {icon}
                        {label}
                    </span>
                    {children &&
                        (isOpen ? (
                            <ChevronDown className="h-4 w-4" />
                        ) : (
                            <ChevronRight className="h-4 w-4" />
                        ))}
                </Button>
            </CollapsibleTrigger>
            {children && (
                <AnimatePresence initial={false}>
                    {isOpen && children && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="pl-6 pt-1 overflow-hidden"
                        >
                            {children.map(child => (
                                <MenuItem key={child.label} {...child} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </Collapsible>
    );
};

export default function LeftSidebar() {
    const navigate = useNavigate();

    return (
        <nav
            className={
                'hidden lg:flex sticky bg-dark-300 p-8 m-7 rounded-3xl flex-col top-7 min-h-[95vh] max-h-[95vh]'
            }
        >
            <Link
                to={'/'}
                className="flex items-center text-center space-x-2 mb-8"
            >
                <img
                    src={'/assets/icons/logo.svg'}
                    alt={'Logo'}
                    width={100}
                    height={100}
                    className={'w-6 h-6'}
                />
                <span className="text-2xl font-semibold text-center text-primary-500">
                    NativeTranslate
                </span>
            </Link>

            <div className="overflow-y-auto hidden-scrollbar flex flex-col flex-grow">
                <div className="text-left justify-start items-start flex-grow space-y-3 mt-8">
                    {topLinks.map(link => (
                        <MenuItem key={link.label} {...link} />
                    ))}
                </div>
                <div className={'space-y-3'}>
                    {bottomLinks.map(link => (
                        <MenuItem key={link.label} {...link} />
                    ))}

                    <Button
                        variant="ghost"
                        className="w-full hover:bg-transparent justify-start text-left gap-2 text-main-one hover:text-main-two border border-primary-500"
                        onClick={() => navigate('/login')}
                    >
                        <LogOut className="h-5 w-5" />
                        Logout
                    </Button>
                </div>
            </div>
        </nav>
    );
}
