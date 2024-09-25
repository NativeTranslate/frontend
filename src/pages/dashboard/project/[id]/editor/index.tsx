'use client';

import { useEffect, useState } from 'react';
import {
    ArrowDownWideNarrowIcon,
    Menu,
    MessageSquare,
    Save,
    Trash2,
    Volume2,
    X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import DashboardHeader from '@/components/shared/dashboard-header';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectTriggerNoIcons,
    SelectValue,
} from '@/components/ui/select';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import CustomInput from '@/components/shared/custom-input';
import {
    SetupTabs,
    TabContent,
    TabHeader,
} from '@/components/shared/custom-tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import TextStatus from '@/components/shared/text-status.tsx';
import SuggestionCard from '@/components/shared/suggestion-card.tsx';
import { fakeLanguages } from '@/lib/data/fakeLanguages.ts';
import CommentSection from '@/components/shared/comment-section.tsx';

const fakeStatus: String = 'not-translated';

const fakeStrings = [
    { id: 1, text: 'Welcome to our app', status: 'Translated' },
    { id: 2, text: 'Please enter your details', status: 'Needs Review' },
    { id: 3, text: 'Thank you for your submission', status: 'Not Started' },
    {
        id: 4,
        text: 'ES IST ZU WARM JUNGE ICH STERB GLEICH',
        status: 'In Progress',
    },
];

const FilterField = () => (
    <Select defaultValue="alphabetical">
        <SelectTriggerNoIcons className="h-10 bg-dark-200 border-0 text-white-900 rounded-md">
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger>
                        <ArrowDownWideNarrowIcon className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>Sort by</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </SelectTriggerNoIcons>
        <SelectContent position="popper">
            <SelectGroup>
                <SelectItem value="translated">Translated</SelectItem>
                <SelectItem value="notranslated">Not Translated</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
);

const LeftSidebar = ({
    selectedString,
    setSelectedString,
    setLeftSidebarOpen,
    searchQuery,
    setSearchQuery,
}: any) => (
    <div className="w-full h-full flex flex-col">
        <div className="p-4 flex flex-col sm:flex-row gap-2">
            <CustomInput
                id="search"
                placeholder="Search strings"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="mb-2 sm:mb-0 bg-dark-200 flex-grow"
                icon={undefined}
            />
            <FilterField />
        </div>
        <div className="px-4 flex flex-col overflow-y-auto flex-grow">
            {fakeStrings.map(str => (
                <Button
                    key={str.id}
                    onClick={() => {
                        setSelectedString(str);
                        setLeftSidebarOpen(false);
                    }}
                    className={`bg-dark-200 text-left flex flex-row items-center w-full mb-2 py-2 hover:bg-main-two truncate max-w-full line-clamp-1 ${
                        selectedString.id === str.id ? 'bg-main-two' : ''
                    }`}
                >
                    <TextStatus text={str.text} status={`${fakeStatus}`} />
                </Button>
            ))}
        </div>
    </div>
);

const RightSidebar = () => (
    <div className="flex flex-col flex-grow w-full h-full">
        <SetupTabs
            className="bg-dark-300 p-4 rounded-lg flex flex-col h-full"
            defaultTab="comments"
        >
            <TabHeader id="comments">Comments</TabHeader>
            {/*<TabHeader id="history">History</TabHeader>*/}

            {/*<TabContent id={'history'}>*/}
            {/*    <HistoryTab />*/}
            {/*</TabContent>*/}

            <TabContent id={'comments'}>
                <CommentSection />
            </TabContent>
        </SetupTabs>
    </div>
);

export default function AdvancedEditor() {
    const [selectedString, setSelectedString] = useState(fakeStrings[0]);
    const [translation, setTranslation] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions] = useState([
        [
            {
                text: 'Bonjour le monde',
                creator: 'MateCat',
                quality: '74',
                matchPercentage: 0.89,
            },
            {
                text: 'Salut tout le monde',
                creator: 'John Doe',
                quality: '24',
                matchPercentage: 0.51,
            },
            {
                text: 'Coucou à tous',
                creator: 'Machine Translation',
                quality: '90',
                matchPercentage: 0.34,
            },
        ],
    ]);
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchSuggestions = async () => {
            // Simulating API call for translation suggestions
        };
        fetchSuggestions();
    }, [selectedString]);

    const testTranslation = async () => {
        const res = await fetch(
            'https://translate.astral-network.eu/translate',
            {
                method: 'POST',
                body: JSON.stringify({
                    q: selectedString.text,
                    source: 'auto',
                    target: 'de',
                    format: 'text',
                    alternatives: 3,
                    api_key: '',
                }),
                headers: { 'Content-Type': 'application/json' },
            },
        );

        const data = await res.json();
        setTranslation(data.translatedText);
    };

    const handleSave = async () => {
        console.log('Saving translation:', translation);
        await testTranslation();
    };

    const handleDelete = () => setTranslation('');

    const handleTextToSpeech = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(selectedString.text);
            utterance.voice =
                window.speechSynthesis.getVoices()[
                    Math.floor(Math.random() * 6)
                ];
            window.speechSynthesis.speak(utterance);
        } else {
            console.log('Text-to-speech not supported');
        }
    };

    return (
        <div className="p-4 flex flex-col h-screen overflow-hidden gap-4">
            <DashboardHeader title="Editor">
                <Select defaultValue={'German'}>
                    <SelectTrigger className="w-full bg-dark-200 border-transparent text-gray-400 max-w-64">
                        <p className={'hidden md:block'}>Selected language:</p>
                        <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                        {fakeLanguages.map(language => (
                            <SelectItem
                                key={language}
                                value={language}
                                className={'text-gray-400'}
                            >
                                {language}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </DashboardHeader>

            <div className="flex flex-grow overflow-hidden">
                <div className="flex-grow flex flex-col lg:flex-row overflow-hidden bg-dark-300 rounded-3xl relative">
                    <div className="flex flex-row lg:hidden justify-between p-4">
                        <Sheet
                            open={leftSidebarOpen}
                            onOpenChange={setLeftSidebarOpen}
                        >
                            <SheetTrigger asChild>
                                <Button
                                    className="bg-main-two text-white-900"
                                    variant="ghost"
                                >
                                    <Menu className="h-4 w-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[300px] sm:w-[400px] bg-dark-300 text-white-900"
                            >
                                <LeftSidebar
                                    selectedString={selectedString}
                                    setSelectedString={setSelectedString}
                                    setLeftSidebarOpen={setLeftSidebarOpen}
                                    searchQuery={searchQuery}
                                    setSearchQuery={setSearchQuery}
                                />
                            </SheetContent>
                        </Sheet>
                        <Sheet
                            open={rightSidebarOpen}
                            onOpenChange={setRightSidebarOpen}
                        >
                            <SheetTrigger asChild>
                                <Button
                                    className="bg-main-two text-white-900"
                                    variant="ghost"
                                >
                                    <MessageSquare className="h-4 w-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[300px] sm:w-[400px] bg-dark-300 h-full"
                            >
                                <Button
                                    onClick={() => setRightSidebarOpen(false)}
                                    className="absolute right-4 top-4"
                                    variant="ghost"
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                                <RightSidebar />
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="hidden lg:flex lg:w-[500px] lg:shadow-md lg:overflow-hidden lg:border-r lg:border-dark-400/50 flex-col">
                        <LeftSidebar
                            selectedString={selectedString}
                            setSelectedString={setSelectedString}
                            setLeftSidebarOpen={setLeftSidebarOpen}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                    </div>
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="flex-grow p-4 sm:p-6 overflow-auto">
                            <Card className="mb-6 p-4 sm:p-6 shadow-lg bg-dark-200 border-0 border-t-4 border-main-two">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                                    <h2 className="text-xl sm:text-2xl font-bold text-white-900">
                                        Source String
                                    </h2>
                                    <Button
                                        className="bg-primary-500 text-white-900 border-transparent hover:bg-main-two/50 hover:text-white-900 w-full sm:w-auto"
                                        variant="outline"
                                        size="sm"
                                        onClick={handleTextToSpeech}
                                    >
                                        <Volume2 className="h-4 w-4 mr-2" />
                                        Listen
                                    </Button>
                                </div>
                                <p className="bg-dark-300 text-white-900 border border-dark-400 p-4 rounded-lg text-sm mb-4">
                                    {selectedString.text}
                                </p>
                                <div className="text-sm text-gray-400 space-y-1">
                                    <p>
                                        <span className="font-semibold">
                                            Context:
                                        </span>{' '}
                                        Example Context
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Identifier:
                                        </span>{' '}
                                        example_identifier
                                    </p>
                                    <p>
                                        <span className="font-semibold">
                                            Status:
                                        </span>{' '}
                                        {selectedString.status}
                                    </p>
                                </div>
                            </Card>
                            <Card className="mb-6 p-4 sm:p-6 shadow-lg bg-dark-200 border-0 border-t-4 border-main-two">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white-900">
                                    Translation
                                </h2>
                                <Textarea
                                    value={translation}
                                    onChange={e =>
                                        setTranslation(e.target.value)
                                    }
                                    placeholder="Enter your translation here..."
                                    className="h-32 bg-dark-300 text-white-900 border border-dark-400 p-4 rounded-lg text-sm mb-4 placeholder:text-gray-400"
                                />
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                    <span className="text-sm text-gray-400">
                                        Characters: {translation.length}
                                    </span>
                                    <div className="space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                                        <Button
                                            onClick={handleSave}
                                            className="bg-primary-500 hover:bg-primary-500/50 w-full sm:w-auto"
                                        >
                                            <Save className="h-4 w-4 mr-2" />
                                            Save
                                        </Button>
                                        <Button
                                            className="bg-transparent border border-red-500 text-white-900 hover:bg-red-500 w-full sm:w-auto"
                                            variant="destructive"
                                            onClick={handleDelete}
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Clear
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                            <Card className="mb-6 p-4 sm:p-6 shadow-lg bg-dark-200 border-0 border-t-4 border-main-two">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white-900">
                                    Translation Suggestions
                                </h2>
                                <ul className="space-y-2">
                                    {suggestions[0].map((suggestion, index) => (
                                        <SuggestionCard
                                            text={suggestion.text}
                                            creator={suggestion.creator}
                                            quality={suggestion.quality}
                                            matchPercentage={
                                                suggestion.matchPercentage
                                            }
                                            onClick={() =>
                                                setTranslation(suggestion.text)
                                            }
                                            key={index}
                                        />
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>

                    <div className="hidden lg:flex w-[450px] flex-shrink-0 overflow-hidden border-l border-dark-400/50">
                        <div className="flex flex-col h-full overflow-hidden">
                            <div className="flex-grow overflow-y-auto items-center h-full">
                                <RightSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
