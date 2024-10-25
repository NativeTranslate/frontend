import { useEffect, useState } from 'react';
import { StarIcon } from 'lucide-react';

// <StarIcon
//     key={star}
//     className={`w-5 h-5 ${
//         star <= lang.level
//             ? 'text-yellow-400 fill-yellow-400'
//             : 'text-gray-300 dark:text-gray-600'
//     }`}
// />

interface StarSelectorProps {
    value?: number | 0;
    onChange?: (stars: number) => void;
}

export default function StarSelector({ value, onChange }: StarSelectorProps) {
    const [selectedStars, setSelectedStars] = useState(0);

    useEffect(() => {
        setSelectedStars(value);
    }, []);

    useEffect(() => {
        if (onChange) {
            onChange(selectedStars);
        }
    }, [selectedStars]);

    return (
        <div>
            <div className="flex flex-row gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                    <StarIcon
                        key={star}
                        className={`w-5 h-5 ${
                            star <= selectedStars
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300 dark:text-gray-600'
                        }`}
                        onClick={() => setSelectedStars(star)}
                    />
                ))}
            </div>
        </div>
    );
}
