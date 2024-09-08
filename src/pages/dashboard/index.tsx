import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import { BriefcaseBusiness, Folder, Languages, Users } from 'lucide-react';
import { TranslationsChart } from '@/pages/dashboard/translations-chart.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import ProjectCard from '@/components/shared/project-card.tsx';
import { HorizontalSeparator } from '@/components/shared/separator.tsx';
import { fakeProjects } from '@/lib/data/fakeProjects.ts';
import { cn, formatNumber, useIncrementalCounter } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { NativeTranslate } from '@/lib/core/nativetranslate.ts';

interface StatCardProps {
    title: string;
    value: number;
    color: string;
    icon: React.ReactNode;
}

const StatCard = (props: StatCardProps) => {
    return (
        <div className="flex-grow flex flex-row gap-4 items-center bg-dark-200 rounded-2xl p-4">
            <div className={cn(props.color, 'p-4 rounded-md')}>
                {props.icon}
            </div>
            <div className="flex flex-col">
                <p className="text-white-900 text-lg font-semibold">
                    {props.title}
                </p>
                <p className="text-gray-500 px-1">
                    {formatNumber(useIncrementalCounter(props.value, 500))}
                </p>
            </div>
        </div>
    );
};

const Stats = () => {
    const [stats, setStats] = useState({
        users: 0,
        organizations: 0,
        projects: 0,
        translations: 0,
    }) as any;

    useEffect(() => {
        NativeTranslate.getAPI()
            .getStats()
            .then(res => {
                setStats(res);
            });
    }, []);

    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white-900 text-2xl font-semibold">
                Statistics
            </h1>

            <div className="flex flex-wrap gap-5">
                <StatCard
                    title={'Users'}
                    value={stats.users}
                    color={'bg-green-400'}
                    icon={<Users />}
                />
                <StatCard
                    title={'Organizations'}
                    value={stats.organizations}
                    color={'bg-emerald-400'}
                    icon={<BriefcaseBusiness />}
                />
                <StatCard
                    title={'Projects'}
                    value={stats.projects}
                    color={'bg-teal-400'}
                    icon={<Folder />}
                />
                <StatCard
                    title={'Translations'}
                    value={stats.translations}
                    color={'bg-sky-400'}
                    icon={<Languages />}
                />
            </div>

            <div className="flex flex-col gap-7 bg-dark-200 rounded-2xl p-8">
                <h1 className="text-white-900 text-2xl font-semibold">
                    Translations
                </h1>
                <TranslationsChart />
            </div>
        </div>
    );
};

const SuggestedProjects = () => {
    return (
        <div>
            <h1 className="mt-2 text-white-900 text-2xl font-semibold">
                Suggested Projects
            </h1>

            <div className="pt-5 grid grid-cols-3 gap-4 items-center justify-center">
                {fakeProjects.map((project, index) => (
                    <ProjectCard item={project} key={index} />
                ))}
            </div>
        </div>
    );
};

const Index = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Overview" />
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10">
                    <div className={'flex flex-col mx-12 my-12'}>
                        <Stats />
                        <HorizontalSeparator />
                        <SuggestedProjects />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
export default Index;
