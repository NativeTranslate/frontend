import UserButton from '@/components/shared/user-button.tsx';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import SearchField from '@/components/shared/search-field.tsx';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { users } from '@/lib/fake-data.ts';


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
                <div className="flex flex-row items-center">
                    <p className="text-2xl text-white-900 font-semibold">
                        Users
                    </p>
                    <div className="flex-grow" />
                    <UserButton />
                </div>
                <div className="flex-grow w-full rounded-3xl overflow-y-auto my-10">
                    {/* Adjusted grid layout here */}
                    <div className="grid grid-cols-[3fr_1fr] gap-x-12 h-full">
                        <div className="bg-dark-300 rounded-3xl p-6">
                            <div className="my-6">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-2xl font-medium text-white-900">Listed users</h2>
                                    <div className={'flex-grow'} />
                                    <SearchField
                                        route="/dashboard/users"
                                        iconPosition="right"
                                        placeholder="Search..."
                                        otherClasses="w-12 h-12"
                                    />
                                </div>
                                <Table>
                                    <TableHeader>
                                        <TableRow className="hover:bg-transparent">
                                            <TableHead className="text-left text-primary-500 pr-14">ID</TableHead>
                                            <TableHead className="text-left text-primary-500">Name</TableHead>
                                            <TableHead className="text-center text-primary-500">Role</TableHead>
                                            <TableHead className="text-right text-primary-500">Country</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {users.map(user => (
                                            <TableRow
                                                key={user.id}
                                                onClick={() => setSelected(getSelectedUser(user.id))}
                                                className={
                                                    selected?.id === user.id
                                                        ? 'border-gray-400 bg-main-one bg-opacity-60 text-white-900 hover:bg-main-two'
                                                        : 'text-gray-400 hover:bg-opacity-60 hover:bg-main-two hover:text-white-900 border-b border-gray-400'
                                                }
                                            >
                                                <TableCell className="text-left">{user.id}</TableCell>
                                                <TableCell className="text-left gap-2 flex items-center">
                                                    <img
                                                        src={user.profilePicture}
                                                        className="w-7 h-7 rounded-full object-cover"
                                                        alt="Profile Picture"
                                                    />
                                                    {user.name}
                                                </TableCell>
                                                <TableCell className="text-center">{user.role}</TableCell>
                                                <TableCell className="text-right">{user.country}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        <div
                            className="bg-dark-300 rounded-3xl p-6 flex flex-col justify-center items-center h-full">
                            <div className="w-full max-w-lg">
                                {selected ? (
                                    <div className="text-center">
                                        <p className="text-sm text-gray-400 opacity-50">ID: {selected.id}</p>
                                        <div className="mt-12">
                                            <img
                                                src={selected.profilePicture}
                                                className="w-40 h-40 rounded-full object-cover mx-auto"
                                                alt="Profile Picture"
                                            />
                                            <div className="mt-10 space-y-3">
                                                <p className="text-2xl font-semibold text-white-900">{selected.name}</p>
                                                <p className="text-gray-400 text-lg">{selected.role}</p>
                                            </div>

                                            <div className="bg-dark-400 rounded-3xl mt-10 h-[2px] w-full" />

                                            <div className="mx-6 my-12">
                                                <h3 className="text-left text-white-900 font-regular text-xl">About
                                                    Me</h3>
                                                <p className="text-left text-gray-400 text-md mt-2 line-clamp-4 text-wrap max-w-prose">
                                                    {selected.aboutMe}
                                                </p>

                                                <div className="grid grid-cols-2 gap-8 mt-14">
                                                    <div>
                                                        <h3 className="text-left text-white-900 font-regular text-xl">Country</h3>
                                                        <p className="text-left text-gray-400 text-md mt-2 truncate">{selected.country}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-left text-white-900 font-regular text-xl">Date
                                                            of Birth</h3>
                                                        <p className="text-left text-gray-400 text-md mt-2">{selected.dateOfBirth}</p>
                                                    </div>
                                                </div>

                                                <div className="bg-dark-400 rounded-3xl mt-10 h-[2px] w-full" />

                                                <div className="my-12">
                                                    <h3 className="text-left text-white-900 font-regular text-xl mb-4">Stats</h3>
                                                    <div className="grid grid-cols-2 gap-6">
                                                        <div className="flex flex-col">
                                                            <p className="text-left text-gray-400 text-md">Translated
                                                                Words</p>
                                                            <p className="text-left text-gray-500 text-sm mt-1">42</p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-left text-gray-400 text-md">Projects</p>
                                                            <p className="text-left text-gray-500 text-sm mt-1">2</p>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <p className="text-left text-gray-400 text-md">Organizations</p>
                                                            <p className="text-left text-gray-500 text-sm mt-1">1</p>
                                                        </div>
                                                        {/* Weitere Stats hinzufügen, falls benötigt */}
                                                    </div>
                                                </div>

                                                <div className="bg-dark-400 rounded-3xl mt-10 h-[2px] w-full" />

                                                <div className="flex gap-4 mx-12 mt-10">
                                                    <Button
                                                        className="w-full bg-main-two hover:bg-main-one transition-all">
                                                        Visit Profile
                                                    </Button>
                                                    <div className="flex-grow" />
                                                    <Button
                                                        className="w-full bg-dark-400 hover:bg-gray-400 transition-all">
                                                        Send Message
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <XIcon className="w-24 h-24 text-red-500" />
                                        <h1 className="text-4xl text-red-500 font-bold mt-4">No User Found</h1>
                                        <p className="text-white-900 text-lg mt-2 text-center">
                                            Oops! No user has been selected. <br />
                                            Use the sidebar to find and choose a user.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Index;