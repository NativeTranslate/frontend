import { AvatarFallback } from '@/components/ui/avatar';

function stringToColor(string: string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 50%)`;
}

function getInitials(name: string) {
    const names = name.split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (
        names[0].charAt(0) + names[names.length - 1].charAt(0)
    ).toUpperCase();
}

interface ImprovedAvatarFallbackProps {
    name: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function ImprovedAvatarFallback({
    name,
    size = 'md',
}: ImprovedAvatarFallbackProps) {
    const backgroundColor = stringToColor(name);
    const initials = getInitials(name);

    const sizeClasses = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-12 h-12 text-sm',
        lg: 'w-16 h-16 text-base',
    };

    return (
        <AvatarFallback
            className={`flex items-center justify-center rounded-full font-semibold text-white ${sizeClasses[size]}`}
            style={{ backgroundColor }}
        >
            <span className="sr-only">{name}</span>
            {initials}
        </AvatarFallback>
    );
}
