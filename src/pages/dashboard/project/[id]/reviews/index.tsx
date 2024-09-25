import { useState } from 'react';
import DashboardLayout from '@/components/layout/dashboard-layout';
import DashboardHeader from '@/components/shared/dashboard-header';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type Review = {
    id: string;
    language: string;
    flag: string;
    originalText: string;
    translatedText: string;
    currentText?: string;
    translator: string;
    type: string;
};

const fakeReviews: Review[] = [
    {
        id: '1',
        language: 'German',
        flag: 'DE',
        originalText:
            'Once upon a time, in a land far, far away, there lived a brave knight. He was known throughout the kingdom for his courage and kindness. One day, he set out on a quest to save a princess from a fearsome dragon.',
        translatedText:
            'Es war einmal, in einem weit, weit entfernten Land, da lebte ein tapferer Ritter. Er war im ganzen Königreich für seinen Mut und seine Freundlichkeit bekannt. Eines Tages machte er sich auf den Weg, um eine Prinzessin vor einem furchterregenden Drachen zu retten.',
        translator: 'Alice',
        type: 'New Translation',
    },
    {
        id: '2',
        language: 'German',
        flag: 'DE',
        originalText: 'The player {0} got banned.',
        currentText: 'Der Spieler {0} wurde gesperrt.',
        translatedText: 'Der Spieler {0} wurde gebannt.',
        translator: 'Fedox',
        type: 'Change Request',
    },
    {
        id: '3',
        language: 'German',
        flag: 'DE',
        originalText: 'The player {0} got kicked.',
        currentText: 'Der Spieler {0} wurde gekickt.',
        translatedText: 'Der Spieler {0} wurde vom Server geworfen.',
        translator: 'Fedox',
        type: 'Change Request',
    },
    {
        id: '4',
        language: 'Spanish',
        flag: 'ES',
        originalText:
            'The sun was setting on the horizon, painting the sky in vibrant hues of orange and pink. The old fisherman sat on the beach, mending his nets and reflecting on the days catch. He knew that tomorrow would bring new adventures on the vast, unpredictable sea.',
        translatedText:
            'El sol se ponía en el horizonte, pintando el cielo con vibrantes tonos de naranja y rosa. El viejo pescador estaba sentado en la playa, remendando sus redes y reflexionando sobre la pesca del día. Sabía que mañana traería nuevas aventuras en el vasto e impredecible mar.',
        translator: 'Bob',
        type: 'New Translation',
    },
];

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>(fakeReviews);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

    const languages = [
        'All',
        ...new Set(reviews.map(review => review.language)),
    ];

    const filteredReviews =
        selectedLanguage === 'All'
            ? reviews
            : reviews.filter(review => review.language === selectedLanguage);

    const handleAccept = (id: string) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    const handleReject = (id: string) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Pending Reviews" />
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-hidden my-10">
                    <div className="flex flex-col p-6">
                        <div className="flex justify-between items-center mb-6">
                            <Select
                                value={selectedLanguage}
                                onValueChange={setSelectedLanguage}
                            >
                                <SelectTrigger className="w-48 bg-dark-200 border-0 text-white-900">
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {languages.map(lang => (
                                        <SelectItem key={lang} value={lang}>
                                            {lang}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <span className="text-white-900 font-semibold">
                                {filteredReviews.length} reviews pending
                            </span>
                        </div>
                        <ScrollArea className="h-[calc(100vh-250px)]">
                            <div className="space-y-6">
                                {filteredReviews.map(review => (
                                    <Card
                                        key={review.id}
                                        className="bg-dark-200 border-dark-400"
                                    >
                                        <CardHeader className="flex flex-row items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${review.flag}.svg`}
                                                    alt={review.language}
                                                    className="w-6 h-4"
                                                />
                                                <span className="font-bold text-white-900">
                                                    {review.language}
                                                </span>
                                                <span
                                                    className={`font-semibold text-sm px-2 py-1 rounded-full ${
                                                        review.type ===
                                                        'New Translation'
                                                            ? 'bg-blue-500 text-white'
                                                            : 'bg-yellow-500 text-black'
                                                    }`}
                                                >
                                                    {review.type}
                                                </span>
                                            </div>
                                            <span className="text-gray-400 text-sm">
                                                Translator: {review.translator}
                                            </span>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                                                    Original Text:
                                                </h3>
                                                <p className="text-white-900 bg-dark-300 p-3 rounded-md">
                                                    {review.originalText}
                                                </p>
                                            </div>
                                            {review.currentText && (
                                                <div>
                                                    <h3 className="text-sm font-semibold text-gray-400 mb-2">
                                                        Current Text:
                                                    </h3>
                                                    <p className="text-white-900 bg-dark-300 p-3 rounded-md">
                                                        {review.currentText}
                                                    </p>
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-400 mb-2">
                                                    {review.type ===
                                                    'Change Request'
                                                        ? 'Proposed Text:'
                                                        : 'Translated Text:'}
                                                </h3>
                                                <p className="text-white-900 bg-dark-300 p-3 rounded-md">
                                                    {review.translatedText}
                                                </p>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="justify-end space-x-2">
                                            <Button
                                                onClick={() =>
                                                    handleAccept(review.id)
                                                }
                                                size="sm"
                                                className="bg-main-two hover:bg-main-two/80"
                                            >
                                                <Check className="w-4 h-4 mr-2" />{' '}
                                                Accept
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    handleReject(review.id)
                                                }
                                                size="sm"
                                                variant="destructive"
                                            >
                                                <X className="w-4 h-4 mr-2" />{' '}
                                                Reject
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
