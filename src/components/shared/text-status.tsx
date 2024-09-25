import { useEffect, useState } from 'react';

interface Props {
    text: string;
    status: string;
}

const TextStatus = ({ text, status }: Props) => {
    const [color, setColor] = useState('');

    useEffect(() => {
        switch (status) {
            case 'translated':
                setColor('bg-blue-500');
                break;
            case 'not-translated':
                setColor('bg-red-500');
                break;
            case 'waiting-for-approval':
                setColor('bg-green-500');
                break;
            default:
                setColor('bg-red-500');
                break;
        }
    }, []);

    return (
        <div className="flex flex-row gap-2 items-center">
            <div
                className={`w-5 h-5 flex items-center justify-center rounded-md`}
            >
                <div
                    className={`w-3 h-3 ${color} rounded-full flex-shrink-0`}
                />
            </div>
            <p className="truncate text-xs">{text}</p>
        </div>
    );
};
export default TextStatus;
