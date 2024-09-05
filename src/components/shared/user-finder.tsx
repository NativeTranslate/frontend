/**
 * © 2024 Florian O. (https://github.com/Fedox-die-Ente)
 * Created on: 9/4/2024 9:08 PM
 *
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

import CustomInput from '@/components/shared/custom-input.tsx';
import { Search, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { useRef, useState } from 'react';

interface UserFinderProps {
    users?: string[];
    onAddUser?: (user: string) => void;
    onRemoveUser?: (user: string) => void;
}

const UserFinder = ({
    users: initialUsers = [],
    onAddUser,
    onRemoveUser,
}: UserFinderProps) => {
    const [users, setUsers] = useState<string[]>(initialUsers);
    const [hasError, setHasError] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const input = useRef<HTMLInputElement>(null);

    const removeUser = (user: string) => {
        if (onRemoveUser) {
            onRemoveUser(user);
        }

        setUsers(users.filter(u => u !== user));
    };

    const addUser = (input: HTMLInputElement | null) => {
        if (!input) return;

        const user = input.value;

        if (!validate(user)) return;

        input.value = '';
        if (onAddUser) {
            onAddUser(user);
        }
        setUsers([...users, user]);
    };

    const validate = (user: string) => {
        if (!user) {
            setHasError(true);
            setError('User cannot be empty');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(user)) {
            setHasError(true);
            setError('Please enter a valid email');
            return false;
        }

        if (users.includes(user)) {
            setHasError(true);
            setError('The user is already added');
            return false;
        }

        setHasError(false);
        setError('');
        return true;
    };

    return (
        <div className="space-y-2">
            <div className="flex justify-between w-full max-w-md mx-auto">
                <CustomInput
                    onEnter={() => addUser(input.current)}
                    ref={input}
                    placeholder="Search for users"
                    className="bg-dark-200 text-gray-400 w-full flex-grow"
                    id="user-finder"
                    icon={<Search className="h-4 w-4" />}
                />

                <Button
                    onClick={() => addUser(input.current)}
                    className="ml-2 bg-main-two hover:bg-main-two/50"
                >
                    Add
                </Button>
            </div>
            <div>
                {hasError && (
                    <p className="text-red-500 text-xs mb-2">{error}</p>
                )}

                {/* Users list */}
                <div className="grid gap-2">
                    {users.map(user => (
                        <div
                            key={user}
                            className="flex justify-between items-center bg-dark-200 text-gray-400 p-2 rounded-md"
                        >
                            <p className="text-sm">{user}</p>
                            <Button
                                onClick={() => removeUser(user)}
                                size="icon"
                                className="w-7 h-7 bg-transparent border border-primary-500"
                            >
                                <XIcon className="h-3 w-3" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserFinder;
