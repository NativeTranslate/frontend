import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select.tsx';

interface CustomSelectProps {
    id: string;
    options: string[];
    placeholder: string;
    onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    id,
    options,
    placeholder,
    onChange,
}) => {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger
                id={id}
                className="w-full bg-dark-300 text-gray-400 rounded-md border-none px-4"
            >
                <SelectValue
                    className="text-gray-400"
                    placeholder={placeholder}
                />
            </SelectTrigger>
            <SelectContent className="bg-dark-300 text-white-900 border-none rounded-3xl">
                {options.map(option => (
                    <SelectItem
                        key={option}
                        className="focus:bg-main-two focus:text-white-900 transition-all"
                        value={option}
                    >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default CustomSelect;
