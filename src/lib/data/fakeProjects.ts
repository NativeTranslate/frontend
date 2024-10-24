import { Project } from '../types';
import { users } from '@/lib/data/fakeUsers.ts';

export const fakeProjects: Project[] = [
    {
        id: '1',
        logo: 'https://i.imgur.com/xrG2lkz.png',
        name: 'InnovateAI',
        description:
            'A cutting-edge project focused on developing advanced AI algorithms to solve real-world problems and improve automation in various industries.',
        participants: 8,
        words: 90828,
        createdAt: '6 years ago',
        lastActivity: '9 months ago',
        managers: [users[0], users[1], users[2], users[3]],
    },
    {
        id: '2',
        logo: 'https://i.imgur.com/gHX5XTb.png',
        name: 'EcoWise',
        description:
            'An initiative aimed at creating sustainable solutions for waste management and recycling, promoting environmental awareness and eco-friendly practices.',
        participants: 12,
        createdAt: '6 years ago',
        managers: [users[0], users[1], users[2], users[3]],
    },
    {
        id: '3',
        logo: 'https://i.imgur.com/8xFoY61.png',
        name: 'HealthTrack',
        createdAt: '6 years ago',
        description:
            'A health and wellness project that focuses on developing a comprehensive platform for tracking fitness, nutrition, and mental health to enhance overall well-being.',
        participants: 15,
        managers: [users[0], users[1], users[2], users[3]],
    },
    {
        id: '4',
        logo: 'https://i.imgur.com/Dmw566e.png',
        name: 'EduTechHub',
        createdAt: '6 years ago',
        description:
            'An educational technology project aimed at creating innovative tools and platforms to enhance online learning experiences and make education more accessible.',
        participants: 20,
        managers: [users[0], users[1], users[2], users[3]],
    },
    {
        id: '5',
        logo: 'https://i.imgur.com/7LPuHru.png',
        name: 'SmartHome Innovations',
        createdAt: '6 years ago',
        description:
            'A project dedicated to developing smart home technologies that integrate seamlessly into daily life, providing convenience, security, and energy efficiency.',
        participants: 10,
        managers: [users[0], users[1], users[2], users[3]],
    },
];
