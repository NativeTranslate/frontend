import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import { fakeProjects } from '@/lib/fake-data.ts';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table.tsx';
import { Progress } from '@/components/ui/progress.tsx';
import { cn } from '@/lib/utils.ts';

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

const ProjectPage = () => {
    const project = fakeProjects[0];

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title={project.name} />
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10">
                    <div className={'flex flex-col mx-12 my-12'}>
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
                                                            'border border-yellow-300',
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
