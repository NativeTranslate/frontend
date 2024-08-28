import { Input } from '@/components/ui/input.tsx';
import { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react'; // Reagiere entsprechend deiner Router-Konfiguration

interface CustomInputProps {
    route: string;
    iconPosition: string;
    placeholder: string;
    otherClasses?: string;
}

const SearchField = ({
    route,
    iconPosition,
    placeholder,
    otherClasses,
}: CustomInputProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const query = searchParams.get('q');
    const [search, setSearch] = useState(query || '');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (search) {
                searchParams.set('q', search);
                const newUrl = `${location.pathname}?${searchParams.toString()}`;
                navigate(newUrl, { replace: true });
            } else {
                if (location.pathname === route) {
                    searchParams.delete('q');
                    const newUrl = `${location.pathname}?${searchParams.toString()}`;
                    navigate(newUrl, { replace: true });
                }
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [search, route, location.pathname, navigate, searchParams]);

    return (
        <div
            className={`relative flex min-h-[45px] grow items-center gap-4 rounded-full text-gray-400 px-4 ${otherClasses} bg-dark-200 shadow-lg`}
        >
            {iconPosition === 'left' && (
                <SearchIcon size={24} className={'cursor-pointer'} />
            )}

            <Input
                type="text"
                value={search}
                onChange={e => {
                    setSearch(e.target.value);
                }}
                placeholder={placeholder}
                className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none focus:border-none focus-visible:ring-offset-transparent focus-visible:ring-0"
            />

            {iconPosition === 'right' && (
                <SearchIcon size={24} className={'cursor-pointer'} />
            )}
        </div>
    );
};
export default SearchField;
