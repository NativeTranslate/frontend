import React from 'react';
import { Input } from '@/components/ui/input.tsx';

interface InputWithIconProps {
    id: string;
    placeholder: string;
    icon: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ id, placeholder, icon, onChange, value }) => {
    return (
        <div className="relative">
            <Input
                type="text"
                id={id}
                placeholder={placeholder}
                className="w-full bg-dark-300 text-white border-none rounded-full py-6 px-4 pr-12"
                onChange={onChange}
                value={value}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#4a5567]">
                {icon}
            </div>
        </div>
    );
};

export default InputWithIcon;