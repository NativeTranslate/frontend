'use client';

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface Props {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    id?: string;
}

export default function Checkbox({ value = false, onChange, label, id }: Props) {
    const [checked, setChecked] = useState(value);

    useEffect(() => {
        setChecked(value);
    }, [value]);

    const handleChange = () => {
        const newChecked = !checked;
        setChecked(newChecked);

        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <div className="flex items-center">
            <button
                onClick={handleChange}
                className={`flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-primary-500 transition-colors ${
                    checked ? 'bg-main-two border-main-two' : 'bg-transparent'
                }`}
                aria-checked={checked}
                role="checkbox"
                id={id}
            >
                {checked && <Check className="text-white-900 w-3 h-3 sm:w-4 sm:h-4" />}
            </button>
            {label && (
                <label
                    htmlFor={id}
                    className="ml-2 text-sm sm:text-base text-gray-700 cursor-pointer select-none"
                >
                    {label}
                </label>
            )}
        </div>
    );
}