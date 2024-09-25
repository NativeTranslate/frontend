/**
 * © 2024 Florian O. (https://github.com/Fedox-die-Ente)
 * Created on: 9/23/2024 5:04 PM
 *
 * https://www.youtube.com/watch?v=tjBCjfB3Hq8
 */

import { Button } from '@/components/ui/button.tsx';

interface Suggestion {
    text: string;
    creator: string;
    quality: string;
    matchPercentage: number;
    onClick: (text: string) => void;
}

export default function SuggestionCard({
    text,
    creator,
    quality,
    matchPercentage,
    onClick,
}: Suggestion) {
    const handleClick = () => {
        onClick(text);
    };

    return (
        <li className="bg-dark-300 p-3 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-300 gap-2">
            <div className="flex flex-col w-full sm:w-auto">
                <span className="break-all font-medium">{text}</span>
                <div className="text-sm text-gray-400 mt-1">
                    <span>Creator: {creator}</span>
                    <span className="mx-2">|</span>
                    <span>Quality: {quality}%</span>
                    <span className="mx-2">|</span>
                    <span>Match: {matchPercentage}%</span>
                </div>
            </div>
            <Button
                size="sm"
                className="bg-primary-500 text-white hover:bg-primary-500/50 w-full sm:w-auto"
                onClick={() => handleClick()}
            >
                Use
            </Button>
        </li>
    );
}
