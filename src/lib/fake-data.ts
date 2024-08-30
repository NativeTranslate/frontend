function generateId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'NT';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length),
        );
    }
    return result;
}

export const users = [
    {
        id: '1',
        name: 'John Doe',
        role: 'CEO of NativeTranslate',
        country: 'United States',
        gender: 'Male',
        dateOfBirth: '1985-07-14',
        profilePicture:
            'https://lh4.googleusercontent.com/proxy/wHtlS6a-bjPq1V6VDAPMDmuDe5sLGrKfWFD9J23aUj2ZAdRQUen1ftzeEPTi3bkpsEiKWY5xOW41ArOxGGlSVeOwQZnB1ZSA1dU4',
        aboutMe:
            'Tech enthusiast and avid gamer. Love exploring new technologies and coding in my free time.',
    },
    {
        id: generateId(),
        name: 'Jane Smith',
        role: 'Admin',
        country: 'Canada',
        gender: 'Female',
        dateOfBirth: '1990-02-10',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-young-beautiful-woman_23-2148161297.jpg',
        aboutMe:
            'Passionate about web development and cybersecurity. Always eager to learn and share knowledge.',
    },
    {
        id: generateId(),
        name: 'Carlos García',
        role: 'Moderator',
        country: 'Spain',
        gender: 'Male',
        dateOfBirth: '1988-11-25',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-happy-young-man_23-2148210560.jpg',
        aboutMe:
            'Enjoys photography and traveling. Loves capturing moments and sharing stories through pictures.',
    },
    {
        id: generateId(),
        name: 'Emily Johnson',
        role: 'User',
        country: 'Australia',
        gender: 'Female',
        dateOfBirth: '1995-04-17',
        profilePicture:
            'https://img.freepik.com/free-photo/smiling-woman-wearing-glasses_23-2148201807.jpg',
        aboutMe:
            'Bookworm and nature lover. Often found hiking or reading a good novel in a cozy corner.',
    },
    {
        id: generateId(),
        name: 'Hiroshi Yamamoto',
        role: 'User',
        country: 'Japan',
        gender: 'Male',
        dateOfBirth: '1982-09-08',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-happy-asian-man-wearing-glasses_23-2148412133.jpg',
        aboutMe:
            'Foodie and music enthusiast. Enjoys trying out new recipes and playing the guitar in my free time.',
    },
    {
        id: generateId(),
        name: 'Fatima Al-Zahra',
        role: 'Admin',
        country: 'United Arab Emirates',
        gender: 'Female',
        dateOfBirth: '1993-12-02',
        profilePicture:
            'https://img.freepik.com/free-photo/smiling-arabic-woman-wearing-hijab_23-2148538048.jpg',
        aboutMe:
            'Creative writer with a passion for poetry and storytelling. Loves expressing thoughts through words.',
    },
    {
        id: generateId(),
        name: 'Luca Bianchi',
        role: 'User',
        country: 'Italy',
        gender: 'Male',
        dateOfBirth: '1987-06-23',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-smiling-young-man_23-2148394447.jpg',
        aboutMe:
            'Cycling enthusiast and coffee lover. Spends weekends exploring the countryside on my bike.',
    },
    {
        id: generateId(),
        name: 'Anna Müller',
        role: 'Moderator',
        country: 'Germany',
        gender: 'Female',
        dateOfBirth: '1991-03-30',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-beautiful-young-woman_23-2148396221.jpg',
        aboutMe:
            'Digital artist and designer. Passionate about creating visually appealing content and art.',
    },
    {
        id: generateId(),
        name: 'David Brown',
        role: 'User',
        country: 'United Kingdom',
        gender: 'Male',
        dateOfBirth: '1984-08-15',
        profilePicture:
            'https://img.freepik.com/free-photo/smiling-young-man-wearing-blue-shirt_23-2148204103.jpg',
        aboutMe:
            'Sports fanatic and fitness enthusiast. Enjoys staying active and playing football with friends.',
    },
    {
        id: generateId(),
        name: 'Olivia Lee',
        role: 'Admin',
        country: 'South Korea',
        gender: 'Female',
        dateOfBirth: '1996-11-05',
        profilePicture:
            'https://img.freepik.com/free-photo/portrait-beautiful-asian-woman_23-2148514627.jpg',
        aboutMe:
            'Tech-savvy and passionate about AI. Loves exploring the latest trends in technology and innovation.',
    },
];

export const fakeProjects = [
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
