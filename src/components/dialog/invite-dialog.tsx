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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import CustomTextarea from '@/components/shared/custom-text-area.tsx';
import UserFinder from '@/components/shared/user-finder.tsx';
import InputLabel from '@/components/shared/input-label.tsx';

const roleExplanations: { [key: string]: string } = {
    manager: 'Has unlimited control over the entire project',
    translator:
        'Can translate the content without needing a review. Can also review translations from the project.',
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
            <DialogContent
                aria-describedby={'Invite people'}
                aria-description={'Invite people to the project'}
                className="sm:max-w-[425px] bg-dark-300 border-transparent"
            >
                <DialogHeader>
                    <DialogTitle className={'text-white-900'}>
                        Invite People
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-4 py-2">
                        <div className="grid gap-2">
                            <InputLabel
                                text={'Select role'}
                                htmlFor={'role'}
                                required
                            />
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
                            <InputLabel
                                text={'Email addresses'}
                                htmlFor={'emails'}
                                required
                            />
                            <UserFinder />
                        </div>
                        <div className="grid gap-2">
                            <InputLabel
                                text={'Message'}
                                htmlFor={'message'}
                                required
                            />
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
