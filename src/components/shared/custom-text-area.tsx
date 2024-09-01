import React from 'react';
import { Textarea } from '@/components/ui/textarea.tsx';

interface CustomTextareaProps {
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
    placeholder,
    value,
    onChange,
    className,
}) => {
    return (
        <Textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`bg-dark-300 rounded-3xl border-transparent w-full text-gray-400 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0 ${className}`}
        />
    );
};

export default CustomTextarea;
