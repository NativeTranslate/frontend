import { Avatar } from '@/components/ui/avatar.tsx';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { useAuth } from '@/lib/core/auth-context.tsx';
import { useEffect, useState } from 'react';

export default function UserButton() {
    const auth = useAuth();
    // const [id, setId] = useState('');
    const [username, setUsername] = useState('Loading..');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await auth.getMe();
                setUsername(userData.username);
                console.log(userData);
                // setId(userData.id);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData().then(_ => _);
    }, [auth]);

    const firstLetter = username.charAt(0).toUpperCase();

    return (
        <button className="text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out flex flex-row items-center justify-center gap-3">
            <Avatar className={'h-8 w-8 rounded-full'}>
                {/*TODO: Implement avatar logic from backend*/}
                {/*<AvatarImage src={avatar} alt={username} />*/}
                <AvatarFallback
                    className={
                        'flex items-center justify-center h-full w-full bg-light-two dark:bg-dark-two'
                    }
                >
                    {firstLetter}
                </AvatarFallback>
            </Avatar>
        </button>
    );
}
