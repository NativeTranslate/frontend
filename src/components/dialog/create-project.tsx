import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { FolderIcon, GlobeIcon, LockIcon, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Label } from '@/components/ui/label.tsx';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.tsx';
import CustomInput from '@/components/shared/custom-input.tsx';
import CustomTextarea from '@/components/shared/custom-text-area.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { fakeLanguages } from '@/lib/data/fakeLanguages.ts';

const projectTypes = [
    {
        id: 'public',
        name: 'Public',
        description: 'Visible to everyone. You can restrict access later.',
        icon: <GlobeIcon className="w-6 h-6 text-white-900" />,
    },
    {
        id: 'private',
        name: 'Private',
        description:
            'Visible only to you and the people you invite to the project.',
        icon: <LockIcon className="w-6 h-6 text-white-900" />,
    },
];

const CreateProject = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="gap-2 bg-main-two hover:bg-main-two/50 transition-all">
                    <PlusIcon className="w-4 h-4" />
                    Create new project
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[750px] bg-dark-300 border-transparent">
                <form>
                    <DialogHeader>
                        <DialogTitle className={'text-white-900'}>
                            Create new project
                        </DialogTitle>
                        <DialogDescription className={'text-gray-400'}>
                            Create a new project to start collaborating with
                            your team.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-8">
                        <div className="space-y-2">
                            <Label
                                htmlFor="project-name"
                                className={'text-gray-400'}
                            >
                                Project name
                            </Label>
                            <CustomInput
                                className={'bg-dark-200'}
                                id="project-name"
                                placeholder="Enter project name"
                                onChange={() => {}}
                                icon={<FolderIcon />}
                                value={''}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="project-description"
                                className={'text-gray-400'}
                            >
                                Project description
                            </Label>
                            <CustomTextarea
                                className={'bg-dark-200'}
                                placeholder="Enter project description"
                                onChange={() => {}}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className={'text-gray-400'}>
                                Project visibility
                            </Label>
                            <RadioGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent">
                                {projectTypes.map(type => (
                                    <div key={type.id}>
                                        <RadioGroupItem
                                            value={type.id}
                                            id={type.id}
                                            className="peer sr-only"
                                        />
                                        <Label
                                            htmlFor={type.id}
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-dark-300 bg-dark-200 p-4 hover:bg-dark-200/50 hover:text-accent-foreground peer-data-[state=checked]:border-primary-500 [&:has([data-state=checked])]:border-primary-500 transition-all rounded-3xl"
                                        >
                                            <Card className="w-full bg-dark-300 border-transparent shadow-lg">
                                                <CardContent className="flex items-center space-x-4 p-4">
                                                    <div className="flex-shrink-0 text-foreground">
                                                        {type.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-base font-semibold text-white-900">
                                                            {type.name}
                                                        </div>
                                                        <p className="text-sm text-gray-400">
                                                            {type.description}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="project-description"
                                className={'text-gray-400'}
                            >
                                Source language
                            </Label>
                            <Select defaultValue={'English'}>
                                <SelectTrigger className="w-full bg-dark-200 border-transparent text-gray-400">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    {fakeLanguages.map(language => (
                                        <SelectItem
                                            key={language}
                                            value={language}
                                            className={'text-gray-400'}
                                        >
                                            {language}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="project-description"
                                className={'text-gray-400'}
                            >
                                Target languages
                            </Label>
                            {/*<LanguageSelector />*/}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            className="w-full sm:w-auto bg-main-two hover:bg-main-two/50 transition-all"
                        >
                            Create project
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateProject;
