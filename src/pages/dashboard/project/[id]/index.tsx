import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table.tsx';
import { Progress } from '@/components/ui/progress.tsx';
import SearchField from '@/components/shared/search-field.tsx';
import { HorizontalSeparator } from '@/components/shared/separator.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTriggerNoIcons } from '@/components/ui/select.tsx';
import { ArrowDownWideNarrowIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip.tsx';
import { fakeProjects } from '@/lib/data/fakeProjects.ts';
import { cn } from '@/lib/utils';

const languages = [
    {
        primary: true,
        name: 'German',
        progress: 75,
        flag: 'DE'
    },
    {
        name: 'Spanish',
        progress: 50,
        flag: 'ES'
    },
    {
        name: 'French',
        progress: 25,
        flag: 'FR'
    }
];

const FilterField = () => {
    return (
        <Select defaultValue="alphabetical">
            <SelectTriggerNoIcons className="h-10 bg-dark-200 border-0 text-white-900 rounded-3xl">
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

const ProjectPage = () => {
    const project = fakeProjects[0];

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title={project.name} />
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10">
                    <div className="flex flex-col mx-12 my-12 select-none">
                        <div className="flex flex-row gap-3 items-center">
                            <SearchField
                                route="/dashboard/project"
                                iconPosition="right"
                                placeholder="Search..."
                                otherClasses="max-w-96"
                            />
                            <FilterField />
                            <div className="flex-grow" />
                            <Button className="bg-main-two hover:bg-main-one rounded-3xl">
                                Open Editor
                            </Button>
                        </div>
                        <HorizontalSeparator />
                        <Table>
                            <TableBody>
                                {languages.map((language: any) => (
                                    <TableRow>
                                        <TableCell>
                                            <div className="flex flex-row gap-3 items-center">
                                                <div
                                                    className={cn(
                                                        'p-1.5 bg-dark-200 rounded-md',
                                                        language.primary &&
                                                        'border border-primary-500'
                                                    )}
                                                >
                                                    <img
                                                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${language.flag}.svg`}
                                                        alt={language.name}
                                                        className="min-w-4 min-h-4 max-w-4 max-h-4"
                                                    />
                                                </div>
                                                <p className="font-medium">
                                                    {language.name}
                                                </p>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-row gap-5 items-center">
                                                <div className="flex-grow" />
                                                <Progress
                                                    value={language.progress}
                                                    className="w-60"
                                                />
                                                <p>{language.progress}%</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ProjectPage;
