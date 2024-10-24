'use client';

import DashboardLayout from '@/pages/dashboard/layout';
import DashboardHeader from '@/components/nativetranslate/dashboard-header';
import { formatNumber, useIncrementalCounter } from '@/lib/utils';
import {
    BriefcaseBusiness,
    Folder,
    HomeIcon,
    Languages,
    Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { NativeTranslate } from '@/lib/core/nativetranslate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TranslationsChart } from '@/components/nativetranslate/translation-chart.tsx';
import { HorizontalSeparator } from '@/components/nativetranslate/seperator.tsx';
import { fakeProjects } from '@/lib/data/fakeProjects.ts';
import ProjectCard from '@/components/nativetranslate/project-card.tsx';

interface StatCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
    description: string;
}

const StatCard = ({ title, value, icon, description }: StatCardProps) => {
    const formattedValue = formatNumber(useIncrementalCounter(value, 500));

    return (
        <Card className="bg-light-one dark:bg-dark-one shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{formattedValue}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
};

export default function Index() {
    const [stats, setStats] = useState({
        users: 0,
        organizations: 0,
        projects: 0,
        translations: 0,
    });

    useEffect(() => {
        NativeTranslate.getAPI()
            .getStats()
            .then(res => {
                setStats(res);
            });
    }, []);

    return (
        <DashboardLayout>
            <DashboardHeader
                icon={HomeIcon}
                title="Home"
                description="On this page you will find recorded statistics from NativeTranslate."
            >
                <div className={'flex flex-col mx-4 my-4'}>
                    <div className="flex flex-col gap-8 justify-center w-full">
                        <div className="grid gap-6 md:grid-cols-4 w-full">
                            <StatCard
                                title="Total Users"
                                value={stats.users}
                                icon={
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                }
                                description="Active users on the platform"
                            />
                            <StatCard
                                title="Organizations"
                                value={stats.organizations}
                                icon={
                                    <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
                                }
                                description="Registered organizations"
                            />
                            <StatCard
                                title="Projects"
                                value={stats.projects}
                                icon={
                                    <Folder className="h-4 w-4 text-muted-foreground" />
                                }
                                description="Total projects created"
                            />
                            <StatCard
                                title="Translations"
                                value={stats.translations}
                                icon={
                                    <Languages className="h-4 w-4 text-muted-foreground" />
                                }
                                description="Completed translations"
                            />
                        </div>

                        <div className="flex flex-col gap-7 bg-dark-200 rounded-2xl">
                            <h1 className="text-2xl font-semibold">
                                Translations Overview
                            </h1>
                            <TranslationsChart />
                        </div>
                    </div>
                    <HorizontalSeparator />

                    <div>
                        <h1 className="mt-2 text-2xl font-semibold">
                            Suggested Projects
                        </h1>

                        <div className="pt-5 grid grid-cols-3 gap-4 items-center justify-center">
                            {fakeProjects.map((project, index) => (
                                <ProjectCard key={index} item={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </DashboardHeader>
        </DashboardLayout>
    );
}
