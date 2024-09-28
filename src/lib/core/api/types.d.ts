export type APIStats = {
    users: number;
    organizations: number;
    projects: number;
    translations: number;
};

export type APIProject = {
    id: number;
    name: string;
    identifier: string;
    description: string;
    privateProject: boolean;
    sourceLanguage: string;
    targetLanguages: string[];
    created: number;
};

export type User = {
    id: number;
    username: string;
    gender: string;
    dateOfBirth: number;
    email: string;
    phoneNumber: string;
    location: string;
    bio: string;
    role: string;
};
