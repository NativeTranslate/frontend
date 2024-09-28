import React, { forwardRef } from 'react';
import { Textarea } from '@/components/ui/textarea.tsx';

interface CustomTextareaProps {
    id: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}

const CustomTextarea = forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
    ({ id, placeholder, value, onChange, className }, ref) => {
        return (
            <Textarea
                id={id}
                ref={ref}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`bg-dark-300 rounded-md border-transparent w-full text-gray-400 placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0 min-h-32 ${className}`}
            />
        );
    },
);

export default CustomTextarea;
