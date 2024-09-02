import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

interface ProjectAddressInputProps {
    baseUrl: string;
    value?: string;
    onChange: (value: string) => void;
}

export default function ProjectAddressInput({
    baseUrl,
    value,
    onChange,
}: ProjectAddressInputProps) {
    const [identifier, setIdentifier] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setIdentifier(newValue);
        onChange(newValue);
    };

    useEffect(() => {
        setIdentifier(value || '');
    }, []);

    return (
        <div className="space-y-2 w-full">
            <div className="flex flex-col sm:flex-row rounded-md overflow-hidden bg-dark-200">
                <div className="flex-shrink-0 bg-dark-200 px-3 py-2 text-xs sm:text-sm text-gray-400 border-b sm:border-b-0 sm:border-r border-primary-500">
                    {baseUrl}
                </div>
                <Input
                    type="text"
                    id="project-address"
                    value={identifier}
                    onChange={handleInputChange}
                    className="flex-1 bg-dark-200 border-0 focus:ring-0 text-gray-400 text-xs sm:text-sm"
                    placeholder="<identifier>"
                />
            </div>
        </div>
    );
}
