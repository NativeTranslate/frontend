'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: boolean;
    icon?: LucideIcon;
    iconDirection?: 'left' | 'right';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className,
            label,
            value,
            error,
            defaultValue,
            icon: Icon,
            iconDirection = 'left',
            ...props
        },
        ref,
    ) => {
        const [isFocused, setIsFocused] = React.useState(false);
        const [hasValue, setHasValue] = React.useState(
            value !== undefined
                ? String(value).length > 0
                : defaultValue !== undefined
                  ? String(defaultValue).length > 0
                  : false,
        );

        React.useEffect(() => {
            if (value !== undefined) {
                setHasValue(String(value).length > 0);
            }
        }, [value]);

        return (
            <div className="relative">
                <textarea
                    className={cn(
                        `${
                            error
                                ? 'border-2 border-bigred focus:border-bigred dark:focus:border-bigred'
                                : 'border-2 border-input dark:border-dark-border dark:focus:border-primary dark:border-opacity-30 focus:border-primary'
                        }
            flex w-full font-semibold font-openSans rounded-md bg-background px-3 pt-6 pb-2 text-sm
            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium
            placeholder:text-transparent file:text-foreground text-muted-foreground focus-visible:outline-none
            focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-input
            placeholder:opacity-0 placeholder:top-3 min-h-[80px] resize-y`,
                        Icon && iconDirection === 'left' && 'pl-10',
                        Icon && iconDirection === 'right' && 'pr-10',
                        className,
                        // Autofill styles
                        '[&:-webkit-autofill]:bg-background [&:-webkit-autofill]:dark:bg-dark-input',
                        '[&:-webkit-autofill]:border-2 [&:-webkit-autofill]:dark:border-dark-border',
                        '[&:-webkit-autofill]:focus:border-primary [&:-webkit-autofill]:dark:focus:border-primary',
                        '[&:-webkit-autofill]:text-foreground [&:-webkit-autofill]:dark:text-white',
                        '[&:-webkit-autofill]:placeholder:text-transparent [&:-webkit-autofill]:dark:placeholder:text-transparent',
                        '[&:-webkit-autofill]:shadow-[0_0_0_1000px_var(--background)_inset] [&:-webkit-autofill]:dark:shadow-[0_0_0_1000px_var(--dark-input)_inset]',
                        '[&:-webkit-autofill]:ring-offset-background [&:-webkit-autofill]:dark:ring-offset-dark-input',
                        '[&:-webkit-autofill]:dark:-webkit-text-fill-color-white',
                    )}
                    ref={ref}
                    value={value}
                    defaultValue={defaultValue}
                    onFocus={() => setIsFocused(true)}
                    onBlur={e => {
                        setIsFocused(false);
                        setHasValue(e.target.value !== '');
                    }}
                    onChange={e => setHasValue(e.target.value !== '')}
                    {...props}
                />
                {label && (
                    <label
                        className={cn(
                            `absolute left-3 top-4 transition-all duration-200 text-muted-foreground pointer-events-none font-openSans font-semibold`,
                            (isFocused || hasValue) &&
                                `text-sm ${error ? 'text-bigred' : 'text-primary'} -translate-y-3`,
                            Icon && iconDirection === 'left' && 'left-10',
                            hasValue && 'text-sm text-primary -translate-y-3',
                        )}
                    >
                        {label}
                    </label>
                )}
                {Icon && (
                    <Icon
                        className={cn(
                            'absolute top-4 text-muted-foreground w-6 h-6',
                            iconDirection === 'left' ? 'left-2' : 'right-3',
                            (isFocused || hasValue) &&
                                (error ? 'text-bigred' : 'text-primary'),
                        )}
                        size={18}
                    />
                )}
            </div>
        );
    },
);

Textarea.displayName = 'Textarea';

export { Textarea };
