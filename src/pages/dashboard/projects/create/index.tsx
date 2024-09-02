import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import { Label } from '@/components/ui/label.tsx';
import CustomInput from '@/components/shared/custom-input.tsx';
import { GlobeIcon, Loader2, LockIcon } from 'lucide-react';
import CustomTextarea from '@/components/shared/custom-text-area.tsx';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select.tsx';
import LanguageSelector from '@/components/shared/language-selector.tsx';
import { Button } from '@/components/ui/button.tsx';
import ProjectAddressInput from '@/components/shared/project-address-input.tsx';
import { useState } from 'react';
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

const Index = () => {
    const [isSubmitting] = useState(false);

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Create a new project " />

                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10 pb-4 md:pb-0">
                    <div className="flex flex-col mx-4 sm:mx-12 my-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <h1 className="text-2xl text-white-900 font-semibold">
                                Create a new project
                            </h1>
                        </div>
                        <p className="text-wrap max-w-prose text-gray-400 mt-4">
                            Create a new project to start collaborating with
                            your team.
                        </p>

                        <div className="flex flex-col gap-3 sm:gap-8 mt-12">
                            <div className={'space-y-2'}>
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
                                    icon={undefined}
                                    value={''}
                                />
                            </div>
                            <div className={'space-y-2'}>
                                <Label
                                    htmlFor="project-name"
                                    className={'text-gray-400'}
                                >
                                    Project identifier
                                </Label>
                                <ProjectAddressInput
                                    baseUrl={
                                        'https://nativetranslate.ovh/dashboard/project/'
                                    }
                                    onChange={() => {}}
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
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-dark-300 bg-dark-200 p-4 hover:bg-dark-200/50 hover:text-accent-foreground peer-data-[state=checked]:border-primary-500 [&:has([data-state=checked])]:border-primary-500 transition-all"
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
                                                                {
                                                                    type.description
                                                                }
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
                                <LanguageSelector />
                            </div>

                            <div className="space-y-2 flex justify-end">
                                <Button
                                    disabled={isSubmitting}
                                    className="bg-main-two"
                                >
                                    {isSubmitting
                                        ? 'Creating project...'
                                        : 'Create project'}
                                    {isSubmitting && (
                                        <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
export default Index;
