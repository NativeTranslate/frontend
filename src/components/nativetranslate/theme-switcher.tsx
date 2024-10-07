'use client';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else {
            const systemTheme = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches
                ? 'dark'
                : 'light';
            setTheme(systemTheme);
            document.documentElement.classList.add(systemTheme);
        }
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        // Update the class on the root element
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
    };

    if (!mounted) {
        return null;
    }

    return (
        <div
            onClick={toggleTheme}
            className={
                'bg-gray-300 bg-opacity-20 backdrop-blur-lg dark:bg-gray-700 dark:bg-opacity-20 rounded-full p-4 cursor-pointer'
            }
        >
            {theme === 'light' ? (
                <MoonIcon className={'h-6 w-6 text-light-400'} />
            ) : (
                <SunIcon className={'h-6 w-6 text-light-400'} />
            )}
        </div>
    );
}
