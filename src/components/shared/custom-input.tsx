import React from 'react';
import { Input } from '@/components/ui/input.tsx';

interface InputWithIconProps {
    id: string;
    ref?: React.RefObject<HTMLInputElement>;
    placeholder: string;
    icon: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    value?: string;
    className?: string;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
    ({ id, placeholder, icon, onChange, onEnter, value, className }, ref) => {
        const handleKeyDown = (
            event: React.KeyboardEvent<HTMLInputElement>,
        ) => {
            if (event.key === 'Enter' && onEnter) {
                onEnter(event);
            }
        };

        return (
            <div className="relative w-full">
                <Input
                    onKeyDown={handleKeyDown}
                    ref={ref}
                    type="text"
                    id={id}
                    placeholder={placeholder}
                    className={`w-full bg-dark-300 text-gray-400 border-none rounded-md px-4 pr-12 placeholder:text-dark-400 placeholder:opacity-100 ${className}`}
                    onChange={onChange}
                    value={value}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    {icon}
                </div>
            </div>
        );
    },
);

export default InputWithIcon;
