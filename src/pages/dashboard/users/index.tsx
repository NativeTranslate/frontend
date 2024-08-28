import UserButton from '@/components/shared/user-button.tsx';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import SearchField from '@/components/shared/search-field.tsx';

const users = [
    {
        id: 1,
        name: 'John Doe',
        role: 'User',
        country: 'United States',
        profilePicture:
            'https://img.freepik.com/free-photo/close-up-woman-wearing-earphones_23-2149002500.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'Admin',
        country: 'Canada',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-young-beautiful-woman_23-2148161297.jpg',
    },
    {
        id: 3,
        name: 'Carlos García',
        role: 'Moderator',
        country: 'Spain',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-happy-young-man_23-2148210560.jpg',
    },
    {
        id: 4,
        name: 'Emily Johnson',
        role: 'User',
        country: 'Australia',
        profilePicture:
            'https://img.freepik.com/free-photo/smiling-woman-wearing-glasses_23-2148201807.jpg',
    },
    {
        id: 5,
        name: 'Hiroshi Yamamoto',
        role: 'User',
        country: 'Japan',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-happy-asian-man-wearing-glasses_23-2148412133.jpg',
    },
    {
        id: 6,
        name: 'Fatima Al-Zahra',
        role: 'Admin',
        country: 'United Arab Emirates',
        profilePicture:
            'https://img.freepik.com/free-photo/smiling-arabic-woman-wearing-hijab_23-2148538048.jpg',
    },
    {
        id: 7,
        name: 'Luca Bianchi',
        role: 'User',
        country: 'Italy',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-smiling-young-man_23-2148394447.jpg',
    },
    {
        id: 8,
        name: 'Anna Müller',
        role: 'Moderator',
        country: 'Germany',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-beautiful-young-woman_23-2148396221.jpg',
    },
    {
        id: 9,
        name: 'David Brown',
        role: 'User',
        country: 'United Kingdom',
        profilePicture:
            'https://img.freepik.com/free-photo/smiling-young-man-wearing-blue-shirt_23-2148204103.jpg',
    },
    {
        id: 10,
        name: 'Olivia Lee',
        role: 'Admin',
        country: 'South Korea',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-beautiful-asian-woman_23-2148514627.jpg',
    },
];

const Index = () => {
    const [selected, setSelected] = useState(0);

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
                    <div className={'grid grid-cols-2 gap-x-20 h-full'}>
                        <div className={'bg-dark-300 rounded-3xl'}>
                            <div className={'my-12 mx-12'}>
                                <div
                                    className={
                                        'flex items-center justify-center mb-5'
                                    }
                                >
                                    <h2
                                        className={
                                            'text-2xl font-medium text-white-900 my-5'
                                        }
                                    >
                                        Listed users
                                    </h2>
                                    <div className={'flex-grow'} />
                                    <SearchField
                                        route={'/dashboard/users'}
                                        iconPosition={'right'}
                                        placeholder={'Search...'}
                                        otherClasses={'w-12 h-12'}
                                    />
                                </div>
                                <Table>
                                    <TableHeader>
                                        <TableRow
                                            className={'hover:bg-transparent'}
                                        >
                                            <TableHead
                                                className={
                                                    'text-left text-primary-500 pr-14'
                                                }
                                            >
                                                ID
                                            </TableHead>
                                            <TableHead
                                                className={
                                                    'text-left text-primary-500'
                                                }
                                            >
                                                Name
                                            </TableHead>
                                            <TableHead
                                                className={
                                                    'text-center text-primary-500'
                                                }
                                            >
                                                Role
                                            </TableHead>
                                            <TableHead
                                                className={
                                                    'text-right text-primary-500'
                                                }
                                            >
                                                Country
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {users.map(user => (
                                            <TableRow
                                                key={user.id}
                                                onClick={() =>
                                                    setSelected(user.id)
                                                }
                                                className={
                                                    selected === user.id
                                                        ? 'border-gray-400 bg-main-one bg-opacity-60 text-white-900 hover:bg-main-two'
                                                        : 'text-gray-400 hover:bg-opacity-60 hover:bg-main-two hover:text-white-900 border-b border-gray-400'
                                                }
                                            >
                                                <TableCell
                                                    className={'text-left'}
                                                >
                                                    {user.id}
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        'text-left gap-2 flex items-center justify-start'
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            user.profilePicture
                                                        }
                                                        className={
                                                            'w-7 h-7 rounded-full object-cover'
                                                        }
                                                        alt={'Profile Picture'}
                                                    />
                                                    {user.name}
                                                </TableCell>
                                                <TableCell
                                                    className={'text-center'}
                                                >
                                                    {user.role}
                                                </TableCell>
                                                <TableCell
                                                    className={'text-right'}
                                                >
                                                    {user.country}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        <div
                            className={
                                'items-center justify-center text-center h-full'
                            }
                        >
                            test 2
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
export default Index;
