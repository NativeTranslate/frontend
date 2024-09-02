import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import ProjectCard from '@/components/shared/project-card.tsx';
import { fakeProjects } from '@/lib/fake-data.ts';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import CreateProject from '@/components/dialog/create-project.tsx';

const Index = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Projects" />
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10 pb-4 md:pb-0">
                    <div className="flex flex-col mx-4 sm:mx-12 my-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <h1 className="text-2xl text-white-900 font-semibold">
                                Your projects
                            </h1>
                            <div className="flex-grow" />
                            <CreateProject />
                        </div>
                        <p className="text-wrap max-w-prose text-gray-400 mt-4">
                            Manage and track your projects with ease. Stay
                            organized and collaborate effectively.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center mx-4 sm:mx-12">
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
