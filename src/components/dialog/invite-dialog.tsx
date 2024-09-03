import { useState } from 'react';
import { UserPlus2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import CustomTextarea from '@/components/shared/custom-text-area.tsx';

const roleExplanations: { [key: string]: string } = {
    manager: 'Has unlimited control over the entire project',
    translator: 'Can translate the content and vote for existing translations',
};

export default function InviteDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const roleExplanation = selectedRole
        ? roleExplanations[selectedRole.toLowerCase()]
        : '';

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="flex-1 sm:flex-initial bg-main-two hover:bg-main-two/50">
                    <UserPlus2 className="h-4 w-4 mr-2" />
                    Invite
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-dark-300 border-transparent">
                <DialogHeader>
                    <DialogTitle className={'text-white-900'}>
                        Invite People
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-4 py-2">
                        <div className="grid gap-2">
                            <label
                                htmlFor="role"
                                className="text-sm font-medium text-gray-400"
                            >
                                Select role
                            </label>
                            <Select onValueChange={setSelectedRole}>
                                <SelectTrigger
                                    className={
                                        'bg-dark-200 border-transparent text-gray-400'
                                    }
                                    id="role"
                                >
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="manager">
                                        Manager
                                    </SelectItem>
                                    <SelectItem value="translator">
                                        Translator
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-sm text-gray-400">
                                {roleExplanation}
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <label
                                htmlFor="emails"
                                className="text-sm font-medium text-gray-400"
                            >
                                Emails or usernames
                            </label>
                            <Textarea
                                id="emails"
                                placeholder="james, joe@example.net, jane@example.com"
                                className="min-h-[80px]"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-gray-400"
                            >
                                Message
                            </label>
                            <CustomTextarea
                                placeholder="You're invited to join the project AMPBot."
                                className="min-h-[80px] bg-dark-200"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <Button
                        className={'w-full bg-main-two hover:bg-main-two/50'}
                        onClick={() => setIsOpen(false)}
                    >
                        Invite
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
