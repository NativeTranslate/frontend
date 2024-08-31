import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import qs from 'query-string';
import { useEffect, useState } from 'react';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface UrlQueryParams {
    params: string;
    key: string;
    value: string | null;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
    const currentUrl = qs.parse(params);
    currentUrl[key] = value;

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl,
        },
        {
            skipNull: true,
        },
    );
};

interface RemoveUrlQueryParams {
    params: string;
    keysToRemove: string[];
}

export const removeKeysFromQuery = ({
    params,
    keysToRemove,
}: RemoveUrlQueryParams) => {
    const currentUrl = qs.parse(params);

    keysToRemove.forEach(key => {
        delete currentUrl[key];
    });

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl,
        },
        {
            skipNull: true,
        },
    );
};

/** Number stuff */
export const FormatNumber = (num: number) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }

    return num;
};

export const IncrementalCounter = (num: number, duration: number) => {
    const [internalNum, setInternalNum] = useState(0);
    const [count, setCount] = useState(0);

    const steps = num / duration;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count >= num) {
                setCount(num);
                clearTimeout(timer);
                return;
            }

            setInternalNum(internalNum + steps);
            setCount(Math.round(internalNum));
        }, 1);
    });

    return count;
};
