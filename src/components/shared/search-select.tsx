import { ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { SearchIcon, X } from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar.tsx';
import CustomInput from '@/components/shared/custom-input.tsx';
import { users } from '@/lib/data/fakeUsers.ts';
import { User } from '@/lib/types';

interface Props {
    onSelectedUsersChange: any;
}

export default function Component({ onSelectedUsersChange }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    let searchTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        if (term) {
            setIsSearching(true);
            searchTimeout = setTimeout(() => {
                const results = users.filter(user =>
                    user.name.toLowerCase().includes(term.toLowerCase()),
                );
                setSearchResults(results);
                setIsSearching(false);
            }, 300); // 300ms Debounce-Zeit
        } else {
            setSearchResults([]);
        }
    };

    const handleUserSelect = (user: User) => {
        if (!selectedUsers.some(u => u.id === user.id)) {
            setSelectedUsers(prev => [...prev, user]);
        }
        setSearchTerm('');
        setSearchResults([]);

        onSelectedUsersChange([...selectedUsers, user]);
    };

    const handleUserRemove = (userId: string) => {
        setSelectedUsers(prev => prev.filter(user => user.id !== userId));
        onSelectedUsersChange(selectedUsers.filter(user => user.id !== userId));
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-4">
            <CustomInput
                className={'bg-dark-200'}
                id={'search'}
                placeholder={'Search users (by name or username)'}
                icon={<SearchIcon />}
                onChange={handleSearchChange}
                value={searchTerm}
            />

            {isSearching && (
                <p className="text-sm text-gray-400">Searching...</p>
            )}
            {!isSearching && searchTerm && searchResults.length === 0 && (
                <p className="text-sm text-gray-400">No users found</p>
            )}

            {searchResults.length > 0 && (
                <div className="space-y-2">
                    {searchResults.map((user: any) => (
                        <div
                            key={user.id}
                            className="flex  space-x-4 p-2 rounded-lg hover:bg-dark-200/50 cursor-pointer transition-all text-white-900 text-left items-center "
                            onClick={() => handleUserSelect(user)}
                        >
                            <Avatar>
                                <AvatarImage
                                    src={user.profilePicture}
                                    alt={user.name}
                                />
                                <AvatarFallback className={'bg-dark-200'}>
                                    {user.name[0].toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">
                                    {user.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {user.username}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex flex-wrap gap-2 min-h-[40px]">
                {selectedUsers.map((user: any) => (
                    <Button
                        key={user.id}
                        variant="secondary"
                        size="sm"
                        className={
                            'bg-dark-200 text-white-900 shadow-lg hover:bg-dark-200/50'
                        }
                        onClick={() => handleUserRemove(user.id)}
                    >
                        {user.name}
                        <X className="ml-2 h-4 w-4" />
                    </Button>
                ))}
            </div>
        </div>
    );
}
