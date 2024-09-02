// src/lib/utils/index.ts

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import qs from 'query-string';
import { useEffect, useState } from 'react';

/**
 * Combines class names using clsx and tailwind-merge.
 * @param inputs - Array of class values.
 * @returns Combined class string.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Forms a URL query string by adding or updating a key-value pair.
 * @param params - Current query parameters string.
 * @param key - Key to add or update.
 * @param value - Value to set for the key.
 * @returns Formatted URL with query parameters.
 */
export const formUrlQuery = (params: string, key: string, value: string | null): string => {
    const currentUrl = qs.parse(params);
    // @ts-ignore
    currentUrl[key] = value || undefined;

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl
        },
        { skipNull: true }
    );
};

/**
 * Removes specified keys from the URL query parameters.
 * @param params - Current query parameters string.
 * @param keysToRemove - Array of keys to remove.
 * @returns Formatted URL with updated query parameters.
 */
export const removeKeysFromQuery = (params: string, keysToRemove: string[]): string => {
    const currentUrl = qs.parse(params);

    keysToRemove.forEach((key) => {
        delete currentUrl[key];
    });

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl
        },
        { skipNull: true }
    );
};

/**
 * Formats numbers into readable strings (e.g., 1.5K, 2M).
 * @param num - Number to format.
 * @returns Formatted string.
 */
export const formatNumber = (num: number): string => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
    return num.toString();
};

/**
 * Creates an incremental counter effect.
 * @param targetNumber - The final number to count to.
 * @param duration - Duration of the counting effect in milliseconds.
 * @returns Current count value.
 */
export const useIncrementalCounter = (targetNumber: number, duration: number): number => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = targetNumber / (duration / 10);
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev + increment >= targetNumber) {
                    clearInterval(interval);
                    return targetNumber;
                }
                return prev + increment;
            });
        }, 10);

        return () => clearInterval(interval);
    }, [targetNumber, duration]);

    return Math.floor(count);
};
