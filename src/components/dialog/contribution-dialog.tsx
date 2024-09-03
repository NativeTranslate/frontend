import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { LinkIcon } from 'lucide-react';
import { users } from '@/lib/data/fakeUsers.ts';

export default function ContributionDialog() {
    const result = users[0];

    return (
        <Dialog>
            <DialogTrigger asChild>
                <p className={'text-primary-500 cursor-pointer underline'}>
                    Details
                </p>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[500px] bg-dark-300 border-transparent">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-white-900">
                        Member info
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage
                                src={result.profilePicture}
                                alt="Fedox"
                            />
                            <AvatarFallback>FD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-lg font-semibold text-white-900">
                                {result.name}
                            </h2>
                            <div className={'flex flex-row gap-x-3'}>
                                <Badge
                                    variant="default"
                                    className="mt-2 rounded-md bg-transparent border-primary-500 hover:bg-transparent"
                                >
                                    Owner
                                </Badge>
                                <Button
                                    variant="default"
                                    size="sm"
                                    className="mt-2 bg-main-two hover:bg-main-two/50"
                                >
                                    Contact
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400">
                        <p>Joined: 29 May 2024</p>
                        <p>Last seen in the project 54 minutes ago</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2 text-white-800">
                            Contribution
                        </h3>
                        <div className="bg-dark-200 h-2 w-full rounded-full mb-4">
                            <div className="bg-primary-500 h-2 w-1/4 rounded-full" />
                        </div>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-muted-foreground">
                                    <th className="text-left font-normal text-white-900">
                                        Project Contribution
                                    </th>
                                    <th className="text-right font-normal text-white-900">
                                        Strings
                                    </th>
                                    <th className="text-right font-normal text-white-900">
                                        Words
                                    </th>
                                </tr>
                            </thead>
                            <tbody className={'text-gray-400'}>
                                <tr>
                                    <td>Translated</td>
                                    <td className="text-right">3</td>
                                    <td className="text-right">4</td>
                                </tr>
                                <tr>
                                    <td>Approved</td>
                                    <td className="text-right">0</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Voted</td>
                                    <td className="text-right">0</td>
                                    <td className="text-right">—</td>
                                </tr>
                                <tr>
                                    <td>Commented</td>
                                    <td className="text-right">0</td>
                                    <td className="text-right">—</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-dark-200/50 text-gray-400 text-sm p-3 rounded-md">
                        Please note, this data shows only current contributions.
                        Removed ones aren't displayed here.
                    </div>
                </div>
                <DialogFooter className="sm:justify-between flex items-center">
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto bg-transparent border-primary-500 text-white-900 hover:bg-transparent hover:border-main-two transition-all hover:text-white-900"
                    >
                        Open Profile
                        <LinkIcon className="ml-2 h-4 w-4" />
                    </Button>
                    <div className={'flex-grow'} />
                    <Button
                        variant="outline"
                        className={
                            'bg-main-two border-transparent text-white-900 hover:bg-main-two/50 hover:text-white-900'
                        }
                    >
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
