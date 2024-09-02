import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableHeadRow, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import SearchField from '@/components/shared/search-field.tsx';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import { users } from '@/lib/data/fakeUsers.ts';
import { cn } from '@/lib/utils';

const Index = () => {
    const [selected, setSelected] = useState<{
        id: string;
        name: string;
        role: string;
        country: string;
        profilePicture: string;
        aboutMe: string;
        dateOfBirth: string;
    } | null>(null);

    const getSelectedUser = (id: string) => {
        return users.find(user => user.id === id) || null;
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Users" />
                <div className="flex-grow w-full rounded-3xl my-10">
                    <div className="bg-dark-300 rounded-3xl p-4 md:p-6 h-full">
                        <div className="my-6">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-5">
                                <h2 className="text-xl md:text-2xl font-medium text-white-900">
                                    Listed users
                                </h2>
                                <div className="flex-grow" />
                                <SearchField
                                    route="/dashboard/users"
                                    iconPosition="right"
                                    placeholder="Search..."
                                    otherClasses="w-10 h-10 md:w-12 md:h-12"
                                />
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableHeadRow>
                                        <TableHead className="text-left pr-10 md:pr-14">
                                            ID
                                        </TableHead>
                                        <TableHead className="text-left">
                                            Name
                                        </TableHead>
                                        <TableHead className="text-center">
                                            Role
                                        </TableHead>
                                        <TableHead className="text-right">
                                            Country
                                        </TableHead>
                                    </TableHeadRow>
                                </TableHeader>
                                <TableBody>
                                    {users.map(user => (
                                        <TableRow
                                            key={user.id}
                                            onClick={() =>
                                                setSelected(
                                                    getSelectedUser(user.id)
                                                )
                                            }
                                            className={cn(
                                                selected?.id === user.id &&
                                                'border-gray-400 bg-main-one bg-opacity-60 text-white-900 hover:bg-main-two'
                                            )}
                                        >
                                            <TableCell className="text-left">
                                                {user.id}
                                            </TableCell>
                                            <TableCell className="text-left gap-2 flex items-center">
                                                <img
                                                    src={user.profilePicture}
                                                    className="w-6 h-6 md:w-7 md:h-7 rounded-full object-cover"
                                                    alt="Profile Picture"
                                                />
                                                {user.name}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {user.role}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {user.country}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {selected && (
                        <Dialog
                            open={!!selected}
                            onOpenChange={open => !open && setSelected(null)}
                        >
                            <DialogTrigger asChild>
                                <div className="md:hidden"></div>
                            </DialogTrigger>
                            <DialogContent
                                className="rounded-3xl p-6 bg-dark-300 border-transparent md:mx-auto md:my-auto max-w-md md:max-w-lg">
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 opacity-50">
                                        ID: {selected.id}
                                    </p>
                                    <img
                                        src={selected.profilePicture}
                                        className="w-40 h-40 rounded-full object-cover mx-auto mt-4"
                                        alt="Profile Picture"
                                    />
                                    <div className="mt-4 space-y-3">
                                        <p className="text-2xl font-semibold text-white-900">
                                            {selected.name}
                                        </p>
                                        <p className="text-gray-400 text-lg">
                                            {selected.role}
                                        </p>
                                    </div>

                                    <div className="bg-dark-400 rounded-3xl mt-8 h-[2px] w-full" />

                                    <div className="mt-8">
                                        <h3 className="text-left text-white-900 font-regular text-xl">
                                            About Me
                                        </h3>
                                        <p className="text-left text-gray-400 text-md mt-2 line-clamp-4 text-wrap max-w-prose">
                                            {selected.aboutMe}
                                        </p>

                                        <div className="grid grid-cols-2 gap-8 mt-8">
                                            <div>
                                                <h3 className="text-left text-white-900 font-regular text-xl">
                                                    Country
                                                </h3>
                                                <p className="text-left text-gray-400 text-md mt-2 truncate">
                                                    {selected.country}
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-left text-white-900 font-regular text-xl">
                                                    Date of Birth
                                                </h3>
                                                <p className="text-left text-gray-400 text-md mt-2">
                                                    {selected.dateOfBirth}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-dark-400 rounded-3xl mt-8 h-[2px] w-full" />

                                        <div className="my-8">
                                            <h3 className="text-left text-white-900 font-regular text-xl mb-4">
                                                Stats
                                            </h3>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="flex flex-col">
                                                    <p className="text-left text-gray-400 text-md">
                                                        Translated Words
                                                    </p>
                                                    <p className="text-left text-gray-500 text-sm mt-1">
                                                        42
                                                    </p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-left text-gray-400 text-md">
                                                        Projects
                                                    </p>
                                                    <p className="text-left text-gray-500 text-sm mt-1">
                                                        2
                                                    </p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-left text-gray-400 text-md">
                                                        Organizations
                                                    </p>
                                                    <p className="text-left text-gray-500 text-sm mt-1">
                                                        1
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-dark-400 rounded-3xl mt-8 h-[2px] w-full" />

                                        <div className="flex gap-4 mx-12 mt-8">
                                            <Button
                                                className="w-full bg-main-two hover:bg-main-one transition-all focus:ring-0 focus:ring-offset-0">
                                                Visit Profile
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <DialogClose className="absolute top-4 right-4 bg-dark-200 p-2 rounded-3xl">
                                    <XIcon className="w-6 h-6 text-white-900" />
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Index;
