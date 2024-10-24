import { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/nativetranslate/input.tsx';

interface CustomInputProps {
    route: string;
    iconPosition: 'left' | 'right';
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
        <Input
            type="text"
            value={search}
            icon={SearchIcon}
            iconDirection={iconPosition}
            onChange={e => {
                setSearch(e.target.value);
            }}
            label={placeholder}
            className={otherClasses}
        />
    );
};
export default SearchField;
