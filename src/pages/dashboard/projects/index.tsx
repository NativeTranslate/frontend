import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import { Button } from '@/components/ui/button.tsx';
import ProjectCard from '@/components/shared/project-card.tsx';
import { PlusIcon } from 'lucide-react';
import { fakeProjects } from '@/lib/fake-data.ts';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';

const Index = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Projects" />
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10">
                    <div className={'flex flex-col mx-12 my-12'}>
                        <div className={'flex flex-row'}>
                            <h1
                                className={
                                    'text-2xl text-white-900 font-semibold'
                                }
                            >
                                Your projects
                            </h1>
                            <div className={'flex-grow'} />
                            <Button
                                className={
                                    'bg-main-two text-white-900 hover:bg-main-one transition-colors gap-1'
                                }
                            >
                                <PlusIcon />
                                Create new project
                            </Button>
                        </div>
                        <p className={'text-wrap max-w-prose text-gray-400'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center justify-center mx-12">
                        {fakeProjects.map((project, index) => (
                            <ProjectCard item={project} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Index;
