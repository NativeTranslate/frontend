import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

type TranslationHistoryEntry = {
    id: string;
    user: {
        name: string;
        avatar: string;
    };
    originalText: string;
    translatedText: string;
    date: string;
};

const fakeTranslationHistory: TranslationHistoryEntry[] = [
    {
        id: '1',
        user: {
            name: 'Alice Johnson',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        originalText: 'Welcome to our app',
        translatedText: 'Willkommen in unserer App',
        date: '2023-06-15T14:30:00Z',
    },
    {
        id: '2',
        user: {
            name: 'Bob Smith',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        originalText: 'Please enter your details',
        translatedText: 'Bitte geben Sie Ihre Daten ein',
        date: '2023-06-14T09:45:00Z',
    },
    {
        id: '3',
        user: {
            name: 'Charlie Brown',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        originalText: 'Thank you for your submission',
        translatedText: 'Vielen Dank für Ihre Einreichung',
        date: '2023-06-13T16:20:00Z',
    },
    {
        id: '4',
        user: {
            name: 'Diana Prince',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        originalText: 'ES IST ZU WARM JUNGE ICH STERB GLEICH',
        translatedText: 'IT IS TOO HOT KID I AM ABOUT TO DIE',
        date: '2023-06-12T11:05:00Z',
    },
];

function TruncatedText({
    text,
    maxLength = 50,
}: {
    text: string;
    maxLength?: number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= maxLength) {
        return <p className="text-sm text-white-900">{text}</p>;
    }

    return (
        <div>
            <p className="text-sm text-white-900">
                {isExpanded ? text : `${text.slice(0, maxLength)}...`}
            </p>
            <Button
                variant="link"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1 p-0 h-auto text-main-two hover:text-main-two/80"
            >
                {isExpanded ? 'Show less' : 'Show more'}
            </Button>
        </div>
    );
}

export default function TranslationHistoryTab() {
    return (
        <ScrollArea className="h-full w-full rounded-md p-4 bg-dark-200">
            {fakeTranslationHistory.map(entry => (
                <div
                    key={entry.id}
                    className="mb-6 last:mb-0 pb-6 border-b border-dark-400 last:border-b-0"
                >
                    <div className="flex items-start space-x-4 mb-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage
                                src={entry.user.avatar}
                                alt={entry.user.name}
                            />
                            <AvatarFallback>
                                {entry.user.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none text-white-900">
                                {entry.user.name}
                            </p>
                            <p className="text-xs text-gray-400">
                                {new Date(entry.date).toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <div className="ml-14 space-y-2">
                        <TruncatedText text={entry.translatedText} />
                    </div>
                </div>
            ))}
        </ScrollArea>
    );
}
