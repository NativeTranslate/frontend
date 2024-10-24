'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    (
        { className, label, defaultChecked = false, onCheckedChange, ...props },
        ref,
    ) => {
        const [isChecked, setIsChecked] = React.useState(defaultChecked);

        const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
            setIsChecked(event.target.checked);
            onCheckedChange?.(event.target.checked);
        };

        return (
            <div className="flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isChecked}
                        onChange={handleToggle}
                        ref={ref}
                        {...props}
                    />
                    <div
                        className={cn(
                            "w-11 h-6 bg-gray-200 dark:bg-dark-input rounded-full peer peer-focus:ring-0 peer-focus:ring-primary/20 peer-checked:after:translate-x-full peer-checked:after:border-white dark:peer-checked:after:border-dark-border dark:peer-checked:after:border-opacity-30 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white dark:after:bg-dark-two dark:after:bg-opacity-90 dark:after:border-dark-border dark:after:border-opacity-10 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary",
                            className,
                        )}
                    ></div>
                    {label && (
                        <span className="ml-3 text-sm font-semibold font-openSans text-muted-foreground select-none">
                            {label}
                        </span>
                    )}
                </label>
            </div>
        );
    },
);

Switch.displayName = 'Switch';

export { Switch };
