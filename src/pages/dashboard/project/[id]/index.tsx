import DashboardLayout from '@/components/layout/dashboard-layout';
import DashboardHeader from '@/components/shared/dashboard-header';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import SearchField from '@/components/shared/search-field';
import { HorizontalSeparator } from '@/components/shared/separator';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTriggerNoIcons,
} from '@/components/ui/select';
import { ArrowDownWideNarrowIcon } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { fakeProjects } from '@/lib/data/fakeProjects';
import { cn } from '@/lib/utils';
import { users } from '@/lib/data/fakeUsers';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User } from '@/lib/types';
import {
    SetupTabs,
    TabContent,
    TabHeader,
} from '@/components/shared/custom-tabs.tsx';
import Basic from '@/pages/dashboard/project/[id]/tabs/basic.tsx';
import Discussions from '@/pages/dashboard/project/[id]/tabs/discussions.tsx';
import Members from '@/pages/dashboard/project/[id]/tabs/members.tsx';

const languages = [
    {
        primary: true,
        name: 'German',
        progress: 75,
        flag: 'DE',
    },
    {
        name: 'Spanish',
        progress: 50,
        flag: 'ES',
    },
    {
        name: 'French',
        progress: 25,
        flag: 'FR',
    },
];

const FilterField = () => {
    return (
        <Select defaultValue="alphabetical">
            <SelectTriggerNoIcons className="h-10 bg-dark-200 border-0 text-white-900 rounded-md">
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger>
                            <ArrowDownWideNarrowIcon className="w-4 h-4" />
                        </TooltipTrigger>
                        <TooltipContent>Sort by</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </SelectTriggerNoIcons>
            <SelectContent position="popper">
                <SelectGroup>
                    <SelectItem value={'alphabetical'}>Alphabetical</SelectItem>
                    <SelectItem value={'progress'}>Progress</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

const ProjectInfoBox = ({ project }: { project: any }) => {
    return (
        <div className="bg-dark-300 rounded-md p-6 w-full md:w-96 text-white h-auto">
            <div className="flex justify-center mb-4">
                <img
                    src={project.logo}
                    alt="Project Logo"
                    className="w-16 h-16"
                />
            </div>
            <h2 className="text-xl font-bold mb-2 text-white-900">
                Description
            </h2>
            <p className="text-sm mb-4 text-gray-400">{project.description}</p>
            <h2 className="text-xl font-bold mb-2 text-white-900">Details</h2>
            <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                    <span className={'text-gray-400'}>Source language</span>
                    <span className={'text-primary-500'}>
                        English, United States
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className={'text-gray-400'}>Project members</span>
                    <span className={'text-primary-500'}>
                        {project.participants}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className={'text-gray-400'}>Created</span>
                    <span className={'text-primary-500'}>
                        {project.createdAt}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className={'text-gray-400'}>Last activity</span>
                    <span className={'text-primary-500'}>
                        {project.lastActivity}
                    </span>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-2 text-white-900">Managers</h2>
            <div className="space-y-4">
                <div className="h-auto overflow-auto">
                    <ScrollArea className={'h-full'}>
                        <div className="space-y-3">
                            {project.managers.map((manager: User) => (
                                <div
                                    key={manager.name}
                                    className="flex items-center space-x-2"
                                >
                                    <img
                                        src={manager.profilePicture}
                                        alt={manager.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <div className="flex-grow">
                                        <p className="text-sm font-medium text-white-900">
                                            {manager.name}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {manager.role}
                                        </p>
                                    </div>
                                    {manager.name === users[0].name && (
                                        <div className="flex-shrink-0">
                                            <span className="text-xs bg-main-two px-2 py-1 rounded-full text-white-900">
                                                Creator
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
};

const ProjectPage = () => {
    const project = fakeProjects[0];

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title={project.name}>
                    <p
                        className={
                            'uppercase text-white-900 font-semibold underline animate-bounce'
                        }
                    >
                        3 reviews pending
                    </p>
                </DashboardHeader>
                <div className="flex flex-col md:flex-row gap-6 my-10 h-full">
                    <div className="flex-grow bg-dark-300 rounded-md overflow-y-auto ">
                        <SetupTabs
                            className={'bg-dark-300 p-4 rounded-lg'}
                            defaultTab="overview"
                        >
                            <TabHeader id="overview">Overview</TabHeader>
                            <TabHeader id="members">Members</TabHeader>
                            <TabHeader id="discussions">Discussions</TabHeader>
                            <TabHeader id="settings">Settings</TabHeader>

                            <TabContent id="overview">
                                <div className={'text-white-900'}>
                                    <div className="flex flex-col mx-4 md:mx-12 my-6 md:my-12 select-none">
                                        <div></div>
                                        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                                            <SearchField
                                                route="/dashboard/project"
                                                iconPosition="right"
                                                placeholder="Search..."
                                                otherClasses="w-full md:max-w-96"
                                            />
                                            <div className="flex flex-row gap-3 items-center w-full md:w-full">
                                                <FilterField />
                                                <div className="flex-grow" />
                                                <Button className="bg-main-two hover:bg-main-one rounded-md w-full md:w-auto">
                                                    Open Editor
                                                </Button>
                                                <Button className="bg-main-two hover:bg-main-one rounded-md w-full md:w-auto">
                                                    Open Reviews
                                                </Button>
                                            </div>
                                        </div>
                                        <HorizontalSeparator />
                                        <Table>
                                            <TableBody>
                                                {languages.map(
                                                    (language: any) => (
                                                        <TableRow
                                                            key={language.name}
                                                        >
                                                            <TableCell>
                                                                <div className="flex flex-row gap-3 items-center">
                                                                    <div
                                                                        className={cn(
                                                                            'p-1.5 bg-dark-200 rounded-md',
                                                                            language.primary &&
                                                                                'border border-primary-500',
                                                                        )}
                                                                    >
                                                                        <img
                                                                            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${language.flag}.svg`}
                                                                            alt={
                                                                                language.name
                                                                            }
                                                                            className="min-w-4 min-h-4 max-w-4 max-h-4"
                                                                        />
                                                                    </div>
                                                                    <p className="font-medium">
                                                                        {
                                                                            language.name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>
                                                                <div className="flex flex-row gap-5 items-center">
                                                                    <div className="flex-grow" />
                                                                    <Progress
                                                                        value={
                                                                            language.progress
                                                                        }
                                                                        className="w-full md:w-60"
                                                                    />
                                                                    <p>
                                                                        {
                                                                            language.progress
                                                                        }
                                                                        %
                                                                    </p>
                                                                </div>
                                                            </TableCell>
                                                        </TableRow>
                                                    ),
                                                )}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </TabContent>
                            <TabContent id="settings">
                                <div className={'text-white-900'}>
                                    <Basic />
                                </div>
                            </TabContent>
                            <TabContent id={'discussions'}>
                                <div className={'text-white-900'}>
                                    <Discussions />
                                </div>
                            </TabContent>
                            <TabContent id={'members'}>
                                <div className={'text-white-900'}>
                                    <Members />
                                </div>
                            </TabContent>
                        </SetupTabs>
                    </div>
                    <div className="w-full md:w-auto md:flex-shrink-0">
                        <ProjectInfoBox project={project} />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ProjectPage;
