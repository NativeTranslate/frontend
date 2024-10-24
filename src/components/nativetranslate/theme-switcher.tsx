'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export function ThemeSwitcher() {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as
            | 'light'
            | 'dark'
            | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
            .matches
            ? 'dark'
            : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.classList.add(initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
    };

    if (theme === null) {
        return null;
    }

    return (
        <div
            onClick={toggleTheme}
            className="bg-gray-300 bg-opacity-20 backdrop-blur-lg dark:bg-gray-700 dark:bg-opacity-20 rounded-full p-4 cursor-pointer"
        >
            {theme === 'light' ? (
                <MoonIcon className="h-6 w-6 text-light-400" />
            ) : (
                <SunIcon className="h-6 w-6 text-light-400" />
            )}
        </div>
    );
}

export function useTheme() {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as
            | 'light'
            | 'dark'
            | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
            .matches
            ? 'dark'
            : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.classList.add(initialTheme);
    }, []);

    return theme;
}
