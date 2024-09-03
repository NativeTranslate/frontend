import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { users } from '@/lib/data/fakeUsers';
import ContributionDialog from '@/components/dialog/contribution-dialog';
import { Separator } from '@/components/ui/separator.tsx';
import Checkbox from '@/components/shared/checkbox.tsx';
import SearchField from '@/components/shared/search-field.tsx';
import InviteDialog from '@/components/dialog/invite-dialog.tsx';

export default function Members() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="relative w-full sm:max-w-md">
                        <SearchField
                            route={`${window.location}`}
                            iconPosition={'right'}
                            placeholder={'Search a user..'}
                        />
                    </div>
                    <div className="flex gap-2 sm:ml-auto w-full sm:w-auto">
                        <InviteDialog />
                    </div>
                </div>
                <Separator className={'bg-dark-400'} />
                <div className="overflow-x-auto rounded-md border border-dark-400">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">
                                    <Checkbox />
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="hidden sm:table-cell">
                                    Role
                                </TableHead>
                                <TableHead className="hidden sm:table-cell">
                                    Country
                                </TableHead>
                                <TableHead className="text-right">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={user.profilePicture}
                                                alt={`${user.name}'s profile`}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                            <div>
                                                <p>{user.name}</p>
                                                <p className="text-sm text-muted-foreground sm:hidden">
                                                    {user.role}
                                                </p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        {user.role}
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        {user.country}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end">
                                            <ContributionDialog />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
