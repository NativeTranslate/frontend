import { Organization } from '../types';

export const fakeOrganizations: Organization[] = [
    {
        id: 'ORG001',
        name: 'Tech Innovators',
        logo: 'https://media.istockphoto.com/id/1412901513/vector/modern-hand-technology-logo-design.jpg?s=612x612&w=0&k=20&c=zZ4Kh-J2BV_oLfx8Tfd65aUFdTNlCvjmWxLOT4sEeVs=',
        description: 'Pioneering innovation in the tech world.',
        members: 120,
        createdAt: '01/15/2023',
        createdFrom: 'John Doe'
    },
    {
        id: 'ORG002',
        name: 'Green Earth Initiative',
        logo: 'https://img.freepik.com/free-vector/figure-folded-logo_1043-97.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid',
        description: 'Fighting for a sustainable future.',
        members: 80,
        createdAt: '03/10/2022',
        createdFrom: 'Jane Smith'
    },
    {
        id: 'ORG003',
        name: 'Health & Wellness Association',
        logo: 'https://img.freepik.com/free-vector/business-logo_23-2147503133.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid',
        description: 'Promoting health and well-being globally.',
        members: 50,
        createdAt: '11/24/2021'
    },
    {
        id: 'ORG004',
        name: 'EduCoders Society',
        logo: 'https://img.freepik.com/free-vector/abstract-logo_23-2147502760.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid',
        description: 'Empowering the next generation of coders.',
        members: 100,
        createdAt: '07/05/2021'
    },
    {
        id: 'ORG005',
        name: 'Artistic Creations Guild',
        logo: 'https://img.freepik.com/free-vector/abstract-logo_23-2147502760.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid',
        description: 'Celebrating creativity and imagination.',
        members: 70,
        createdAt: '05/18/2020'
    }
];
