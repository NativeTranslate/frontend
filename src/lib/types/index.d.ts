// src/lib/types/index.ts

export interface SwitchConfig {
    id: string;
    label: string;
    default?: boolean;
}

export interface CardConfig {
    title: string;
    switches: SwitchConfig[];
}

export interface ImpressumDetails {
    name: string;
    street: string;
    building: string;
    city: string;
}

export interface ImpressumContact {
    phone: string;
    email: string;
}

export interface ImpressumOtherInfo {
    note: string;
}

export interface ImpressumData {
    details: ImpressumDetails;
    contact: ImpressumContact;
    otherInfo: ImpressumOtherInfo;
}

export interface TermsOfServiceData {
    introduction: string;
    userResponsibilities: string;
    limitations: string;
    illegalContent: string;
    legalActions: string;
    modifications: string;
}

export interface User {
    id: string;
    name: string;
    role: string;
    country: string;
    gender: string;
    dateOfBirth: string;
    profilePicture: string;
    aboutMe: string;
}

export interface Project {
    id: number;
    logo: string;
    name: string;
    description: string;
    participants: number;
}

export interface Organization {
    id: string;
    name: string;
    logo: string;
    description: string;
    members: number;
    createdAt: string;
    createdFrom?: string;
}

export interface Integration {
    name: string;
    logo: JSX.Element;
}

export interface SettingsCategory {
    key: string;
    label: string;
    icon: JSX.Element;
}

export interface SidebarLink {
    icon: JSX.Element;
    label: string;
    href?: string;
    children?: SidebarLink[];
}
