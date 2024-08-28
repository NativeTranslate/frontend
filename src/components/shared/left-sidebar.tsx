import React, { useEffect } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible.tsx';
import { Button } from '@/components/ui/button.tsx';
import { cn } from '@/lib/utils.ts';
import {
    BriefcaseBusiness,
    ChevronDown,
    ChevronRight,
    Cog,
    Folder,
    Home,
    LogOut,
    User,
    Users,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MenuItem = ({
    icon,
    label,
    children,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    children?: React.ReactNode;
    href?: string;
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = window.location.pathname;

    useEffect(() => {
        if (href && pathname === href) {
            setIsOpen(true);
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
                        'w-full h-14 justify-between text-left text-gray-400 bg-transparent hover:bg-main-two hover:text-white-900',
                        isOpen &&
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
                <CollapsibleContent className="pl-6 pt-1">
                    {React.Children.map(children, child =>
                        React.cloneElement(child as React.ReactElement<any>, {
                            className: cn(
                                'w-full text-left text-gray-400 hover:bg-main-two hover:text-white-900',
                                isOpen && 'bg-main-two text-white-900',
                            ),
                        }),
                    )}
                </CollapsibleContent>
            )}
        </Collapsible>
    );
};

export default function LeftSidebar() {
    const navigate = useNavigate();

    return (
        <nav className={'bg-dark-300 p-8 m-7 rounded-3xl flex flex-col'}>
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
            <div className="text-left justify-start items-start flex-grow space-y-3 mt-8">
                <MenuItem
                    icon={<Home className="h-5 w-5" />}
                    label="Home"
                    href="/dashboard"
                />

                <MenuItem
                    icon={<Folder className="h-5 w-5" />}
                    label="Projects"
                    href={'/dashboard/projects'}
                />

                <MenuItem
                    icon={<BriefcaseBusiness className="h-5 w-5" />}
                    label="Organizations"
                    href={'/organizations'}
                />

                <MenuItem
                    icon={<Users className="h-5 w-5" />}
                    label="Users"
                    href={'/dashboard/users'}
                />
            </div>
            <div className={'space-y-3'}>
                <MenuItem
                    icon={<User className="h-5 w-5" />}
                    label="Profile"
                    href="/profile"
                />
                <MenuItem
                    icon={<Cog className="h-5 w-5" />}
                    label="Settings"
                    href="/settings"
                />

                <Button
                    variant="ghost"
                    className="w-full hover:bg-transparent justify-start text-left gap-2 text-main-one hover:text-main-two border border-primary-500"
                    onClick={() => navigate('/login')}
                >
                    <LogOut className="h-5 w-5" />
                    Logout
                </Button>
            </div>
        </nav>
    );
}
