import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar.tsx';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CogIcon, UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/core/auth-context.tsx';
import { useEffect, useState } from 'react';

const links = [
    {
        label: 'Profile',
        icon: <UserIcon className={'h-5 w-5 mr-2'} />,
        href: '/dashboard/profile/%id%',
    },
    {
        label: 'Settings',
        icon: <CogIcon className={'h-5 w-5 mr-2'} />,
        href: '/dashboard/settings',
    },
];

const UserButton = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');

    const handleLink = (href: string) => {
        navigate(href.replace('%id%', id));
    };

    const auth = useAuth();
    const [username, setUsername] = useState('Loading..');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await auth.getMe();
                setUsername(userData.username);
                setId(userData.id);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [auth]);

    const firstLetter = username.charAt(0).toUpperCase();

    return (
        <div className={'flex flex-row items-center justify-center gap-4 mr-5'}>
            <DropdownMenu>
                <DropdownMenuTrigger className={''}>
                    <div
                        className={
                            'flex flex-row items-center justify-center gap-3'
                        }
                    >
                        <p className={'text-white-900 font-medium text-lg'}>
                            {username}
                        </p>
                        <Avatar className={'w-10 h-10'}>
                            <AvatarImage src="gasgsa" />
                            <AvatarFallback
                                className={'bg-dark-200 text-white-900'}
                            >
                                {firstLetter}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className={
                        'bg-dark-300 border border-dark-400 text-white-900 mt-1'
                    }
                >
                    {links.map(item => (
                        <DropdownMenuItem
                            onClick={() => handleLink(item.href)}
                            key={item.href}
                            className={'flex flex-row hover:bg-main-two'}
                        >
                            {item.icon}
                            {item.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
export default UserButton;
