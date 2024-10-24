import DashboardLayout from '@/pages/dashboard/layout.tsx';
import DashboardHeader from '@/components/nativetranslate/dashboard-header.tsx';
import { useEffect, useState } from 'react';
import { NativeTranslate } from '@/lib/core/nativetranslate.ts';
import { Users } from 'lucide-react';
import SearchField from '@/components/nativetranslate/search-field.tsx';
import { HorizontalSeparator } from '@/components/nativetranslate/seperator.tsx';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { User } from '@/lib/core/api/types';
import { Button } from '@/components/nativetranslate/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useLocation } from 'react-router';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar.tsx';

export default function Index() {
    const [selected, setSelected] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const location = useLocation();

    useEffect(() => {
        NativeTranslate.getAPI()
            .getUsers()
            .then((users: User[]) => {
                setUsers(users);
            });
    }, []);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('q') || '';
        setSearchQuery(query);
    }, [location.search]);

    const getSelectedUser = (id: number | string) => {
        return users.find(user => user.id === id) || null;
    };

    const filteredUsers = () => {
        return users.filter(user =>
            user.username.toLowerCase().startsWith(searchQuery.toLowerCase()),
        );
    };

    return (
        <DashboardLayout>
            <DashboardHeader
                title={'Users'}
                icon={Users}
                description={
                    'All users listed that are registered on our platform'
                }
            >
                <div className="flex-grow w-full rounded-3xl space-y-5">
                    <div className="flex flex-col w-full justify-between gap-0 md:gap-4">
                        <h2 className="text-2xl font-semibold">Listed users</h2>
                        <SearchField
                            route="/dashboard/users"
                            iconPosition="right"
                            placeholder="Search..."
                            otherClasses="w-full"
                        />
                    </div>
                    <HorizontalSeparator />
                    <div className="overflow-x-auto">
                        <Table className="table-fixed w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-left w-16">
                                        #
                                    </TableHead>
                                    <TableHead className="w-1/3">
                                        Name
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell w-1/3">
                                        Role
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell text-right w-1/4 pr-4">
                                        Country
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredUsers().map(user => (
                                    <TableRow
                                        key={user.id}
                                        onClick={() =>
                                            setSelected(
                                                getSelectedUser(user.id),
                                            )
                                        }
                                        className={cn(
                                            'cursor-pointer',
                                            selected?.id === String(user.id) &&
                                                'border-gray-400 bg-main-one bg-opacity-60 text-white-900 hover:bg-main-two',
                                        )}
                                    >
                                        <TableCell className="w-16 pl-4">
                                            {user.id}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                <Avatar>
                                                    <AvatarImage
                                                        src={user.avatar}
                                                        alt={`${user.username}'s profile`}
                                                    />
                                                    <AvatarFallback>
                                                        {user.username[0].split(
                                                            '',
                                                        )}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <span className="truncate max-w-[100px] sm:max-w-none">
                                                    {user.username}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell w-1/3 pl-4">
                                            {user.role}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell text-right pr-4">
                                            {user.country}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </DashboardHeader>

            {selected && (
                <Dialog
                    open={!!selected}
                    onOpenChange={open => !open && setSelected(null)}
                >
                    <DialogTrigger asChild>
                        <div className="md:hidden"></div>
                    </DialogTrigger>
                    <DialogContent className="rounded-3xl p-6 bg-light-two dark:bg-dark-two border-border sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground opacity-50">
                                ID: {selected.id}
                            </p>
                            <Avatar
                                className={
                                    'w-32 h-32 sm:w-40 sm:h-40 mx-auto mt-4 border-2 border-primary'
                                }
                            >
                                <AvatarImage
                                    className={''}
                                    src={selected.avatar}
                                    alt={`${selected.username}'s profile`}
                                />
                                <AvatarFallback className={'text-3xl'}>
                                    {selected.username[0].split('')}
                                </AvatarFallback>
                            </Avatar>
                            <div className="mt-4 space-y-3">
                                <p className="text-xl sm:text-2xl font-semibold text-foreground">
                                    {selected.username}
                                </p>
                                <p className="text-muted-foreground text-lg">
                                    {selected.role}
                                </p>
                            </div>

                            <HorizontalSeparator />

                            <div className="mt-8">
                                <h3 className="text-left text-foreground font-regular text-xl">
                                    About Me
                                </h3>
                                <p className="text-left text-muted-foreground text-md mt-2 line-clamp-4 text-wrap max-w-prose">
                                    {selected.bio}
                                </p>

                                <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8">
                                    <div>
                                        <h3 className="text-left text-foreground font-regular text-lg sm:text-xl">
                                            Country
                                        </h3>
                                        <p className="text-left text-muted-foreground text-sm sm:text-md mt-2 truncate">
                                            {selected.country}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-left text-foreground font-regular text-lg sm:text-xl">
                                            Date of Birth
                                        </h3>
                                        <p className="text-left text-muted-foreground text-sm sm:text-md mt-2">
                                            {/*1211752800*/}

                                            {new Date(
                                                selected.dateOfBirth * 1000,
                                            ).toLocaleDateString()}

                                            {/*{selected.dateOfBirth}*/}
                                        </p>
                                    </div>
                                </div>

                                <HorizontalSeparator />

                                <div className="my-8">
                                    <h3 className="text-left text-foreground font-regular text-xl mb-4">
                                        Stats
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                        <div className="flex flex-col">
                                            <p className="text-left text-black dark:text-muted-foreground text-sm sm:text-md">
                                                Translated Words
                                            </p>
                                            <p className="text-left text-muted-foreground dark:text-muted-foreground/90 text-xs sm:text-sm mt-1">
                                                42
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-left text-black dark:text-muted-foreground text-sm sm:text-md">
                                                Projects
                                            </p>
                                            <p className="text-left text-muted-foreground dark:text-muted-foreground/90 text-xs sm:text-sm mt-1">
                                                2
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-left text-black dark:text-muted-foreground text-sm sm:text-md">
                                                Organizations
                                            </p>
                                            <p className="text-left text-muted-foreground dark:text-muted-foreground/90 text-xs sm:text-sm mt-1">
                                                1
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <HorizontalSeparator />

                                <div className="flex gap-4 mt-8">
                                    <Button
                                        variant={'default_outline'}
                                        className={
                                            'w-full items-center justify-center'
                                        }
                                    >
                                        Visit Profile
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </DashboardLayout>
    );
}
