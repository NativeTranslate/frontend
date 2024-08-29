import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import UserButton from '@/components/shared/user-button.tsx';
import { BriefcaseBusiness, Folder, Languages, Users } from 'lucide-react';
import { TranslationsChart } from '@/pages/dashboard/translations-chart.tsx';
import { cn } from '@/lib/utils.ts';

interface StatCardProps {
    title: string;
    value: number;
    color: string;
    icon: React.ReactNode;
}

const FormatNumber = (num: number) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }

    return num;
};

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
                    {FormatNumber(props.value)}
                </p>
            </div>
        </div>
    );
};

const Stats = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-white-900 text-2xl font-semibold">
                Statistics
            </h1>

            <div className="flex flex-wrap gap-5">
                <StatCard
                    title={'Users'}
                    value={276}
                    color={'bg-cyan-400'}
                    icon={<Users />}
                />
                <StatCard
                    title={'Organizations'}
                    value={2}
                    color={'bg-teal-400'}
                    icon={<BriefcaseBusiness />}
                />
                <StatCard
                    title={'Projects'}
                    value={17}
                    color={'bg-emerald-400'}
                    icon={<Folder />}
                />
                <StatCard
                    title={'Translations'}
                    value={12500}
                    color={'bg-green-400'}
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
            <h1 className="text-white-900 text-2xl font-semibold">
                Suggested Projects
            </h1>

            <div className="pt-5 grid grid-cols-3 gap-4 items-center justify-center">
                {/* repeat 20 times a div */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="p-2 h-52 bg-dark-200 rounded-2xl"
                    ></div>
                ))}
            </div>
        </div>
    );
};

const Index = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <div className="flex flex-row items-center">
                    <p className="text-2xl text-white-900 font-semibold">
                        Overview
                    </p>
                    <div className="flex-grow" />
                    <UserButton />
                </div>
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10">
                    <div className={'flex flex-col mx-12 my-12'}>
                        <Stats />
                        <div className="bg-dark-400 rounded-3xl h-[2px] mt-6 mb-2 w-full" />
                        <SuggestedProjects />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
export default Index;
