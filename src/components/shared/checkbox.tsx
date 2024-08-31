import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface Props {
    value?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox = ({ value = false, onChange }: Props) => {
    const [checked, setChecked] = useState(value);

    useEffect(() => {
        setChecked(value);
    }, [value]);

    const handleChange = () => {
        const newChecked = !checked;
        setChecked(newChecked);

        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <button
            onClick={handleChange}
            className="flex items-center justify-center h-5 w-5 border-2 border-gray-400 rounded-md"
            style={{
                position: 'relative',
                backgroundColor: checked ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
            }}
        >
            {checked && (
                <Check size={22} className="text-primary-500" />
            )}
        </button>
    );
};

export default Checkbox;
