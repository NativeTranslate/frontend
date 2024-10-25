import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar.tsx';
import {
    BellIcon,
    ChevronsUpDown,
    CogIcon,
    LogOut,
    UserIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/core/auth-context.tsx';

export default function SidebarUsercard() {
    const auth = useAuth();

    const [username, setUsername] = useState('Loading..');
    const [email, setEmail] = useState('/');
    const [id, setId] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await auth.getMe();
                setUsername(userData.username);
                setEmail(userData.email);
                setId(userData.id);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData().then(_ => _);
    }, [auth]);

    const firstLetter = username.charAt(0).toUpperCase();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={
                    'w-full text-left focus:ring-0 outline-none focus:ring-offset-transparent p-4'
                }
            >
                <div className={'flex flex-row items-center gap-2 w-full'}>
                    <div>
                        <Avatar className={'rounded-md'}>
                            <AvatarImage src="https://randomuser.me/api/portraits/m" />
                            <AvatarFallback>{firstLetter}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className={'flex flex-col'}>
                        <h3 className={'text-sm font-semibold'}>{username}</h3>
                        <p className={'text-xs'}>{email}</p>
                    </div>
                    <div className={'flex-grow'} />
                    <div>
                        <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50 text-dark-input dark:text-light-input" />
                        {/*Notification Icon*/}
                        <div
                            className={
                                'absolute w-3 h-3 bg-red-500 rounded-full -translate-y-5 -translate-x-2'
                            }
                        />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full z-40" align="end" forceMount>
                <div className={'flex flex-row items-center gap-2 w-full'}>
                    <div>
                        <Avatar className={'rounded-md'}>
                            <AvatarImage src="https://randomuser.me/api/portraits/m" />
                            <AvatarFallback>{firstLetter}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className={'flex flex-col'}>
                        <h3 className={'text-sm font-semibold'}>{username}</h3>
                        <p className={'text-xs'}>{email}</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        window.location.href = `/dashboard/profile/${id}`;
                    }}
                >
                    <UserIcon className={'h-4 w-4'} />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {
                        window.location.href = `/dashboard/notifications`;
                    }}
                >
                    <BellIcon className={'h-4 w-4'} />
                    Notifications
                    <div
                        className={
                            'absolute w-3 h-3 bg-red-500 rounded-full -translate-y-2 -translate-x-2'
                        }
                    />
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {
                        window.location.href = `/dashboard/settings`;
                    }}
                >
                    <CogIcon className={'h-4 w-4'} />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        auth.logout();
                        window.location.href = '/sign-in';
                    }}
                >
                    <LogOut className={'h-4 w-4'} />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
