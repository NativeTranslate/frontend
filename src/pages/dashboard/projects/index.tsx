import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import UserButton from '@/components/shared/user-button.tsx';
import { Button } from '@/components/ui/button.tsx';
import ProjectCard from '@/components/shared/project-card.tsx';
import { PlusIcon } from 'lucide-react';

const fakeProjects = [
    {
        id: 1,
        logo: 'https://i.imgur.com/7t76jSw.png',
        name: 'InnovateAI',
        description:
            'A cutting-edge project focused on developing advanced AI algorithms to solve real-world problems and improve automation in various industries.',
        participants: 8,
    },
    {
        id: 2,
        logo: 'https://i.imgur.com/gHX5XTb.png',
        name: 'EcoWise',
        description:
            'An initiative aimed at creating sustainable solutions for waste management and recycling, promoting environmental awareness and eco-friendly practices.',
        participants: 12,
    },
    {
        id: 3,
        logo: 'https://i.imgur.com/8xFoY61.png',
        name: 'HealthTrack',
        description:
            'A health and wellness project that focuses on developing a comprehensive platform for tracking fitness, nutrition, and mental health to enhance overall well-being.',
        participants: 15,
    },
    {
        id: 4,
        logo: 'https://i.imgur.com/Dmw566e.png',
        name: 'EduTechHub',
        description:
            'An educational technology project aimed at creating innovative tools and platforms to enhance online learning experiences and make education more accessible.',
        participants: 20,
    },
    {
        id: 5,
        logo: 'https://i.imgur.com/7LPuHru.png',
        name: 'SmartHome Innovations',
        description:
            'A project dedicated to developing smart home technologies that integrate seamlessly into daily life, providing convenience, security, and energy efficiency.',
        participants: 10,
    },
];

const Index = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <div className="flex flex-row items-center">
                    <p className="text-2xl text-white-900 font-semibold">
                        Projects
                    </p>
                    <div className="flex-grow" />
                    <UserButton />
                </div>
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
