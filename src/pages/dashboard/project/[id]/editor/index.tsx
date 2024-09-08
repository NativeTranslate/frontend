import { useEffect, useState } from 'react';
import { Save, Search, Trash2, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import CustomInput from '@/components/shared/custom-input.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { SetupTabs, TabHeader } from '@/components/shared/custom-tabs.tsx';

const fakeStrings = [
    {
        id: 1,
        text: 'Welcome to our appafdafjiasfjasuj90fa0suj9f09ujas0f9jash09jf0ha9sfh0ashf0ash09fash hasf 9hasfh09 h90fa sh09asf h90afs h90fash 90f90h ash90f ash90fsa h09fsa h09fash 09fash09 h0f9as 0h9fsa h09asf h09f ah90sfh 90asfh90asf h09as90hfh90asf9h0as0f9as09hfa0h9sfh90asf0h9as0h9f9ash09fas09fsh0a9afdafjiasfjasuj90fa0suj9f09ujas0f9jash09jf0ha9sfh0ashf0ash09fash hasf 9hasfh09 h90fa sh09asf h90afs h90fash 90f90h ash90f ash90fsa h09fsa h09fash 09fash09 h0f9as 0h9fsa h09asf h09f ah90sfh 90asfh90asf h09as90hfh90asf9h0as0f9as09hfa0h9sfh90asf0h9as0h9f9ash09fas09fsh0a9afdafjiasfjasuj90fa0suj9f09ujas0f9jash09jf0ha9sfh0ashf0ash09fash hasf 9hasfh09 h90fa sh09asf h90afs h90fash 90f90h ash90f ash90fsa h09fsa h09fash 09fash09 h0f9as 0h9fsa h09asf h09f ah90sfh 90asfh90asf h09as90hfh90asf9h0as0f9as09hfa0h9sfh90asf0h9as0h9f9ash09fas09fsh0a9',
        status: 'Translated',
    },
    { id: 2, text: 'Please enter your details', status: 'Needs Review' },
    { id: 3, text: 'Thank you for your submission', status: 'Not Started' },
    {
        id: 4,
        text: 'ES IST ZU WARM JUNGE ICH STERB GLEICH',
        status: 'In Progress',
    },
];

export default function AdvancedEditor() {
    const [selectedString, setSelectedString] = useState(fakeStrings[0]);
    const [translation, setTranslation] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions] = useState([]);

    useEffect(() => {
        // Simulating API call for translation suggestions
        const fetchSuggestions = async () => {
            // In a real scenario, you would call an actual translation API here
            // const fakeSuggestions = [
            //     'Willkommen in unserer App',
            //     'Herzlich willkommen bei unserer Anwendung',
            //     'Begrüßung in unserer Applikation',
            // ];
            // setSuggestions(fakeSuggestions!);
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

        console.log(await res.json());

        setTranslation((await res.json()).translatedText);
    };

    const handleSave = async () => {
        console.log('Saving translation:', translation);
        await testTranslation();
    };

    const handleDelete = () => {
        setTranslation('');
    };

    // const handleSendComment = () => {
    //     if (comment.trim()) {
    //         // setComments([
    //         //     ...comments,
    //         //     { text: comment, author: 'You', timestamp: new Date() },
    //         // ]);
    //         setComment('');
    //     }
    // };

    const handleTextToSpeech = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(selectedString.text);

            // Set voice to German

            utterance.voice =
                window.speechSynthesis.getVoices()[
                    Math.floor(Math.random() * 6)
                ];
            setTimeout(() => {
                console.log(window.speechSynthesis.getVoices());
                utterance.voice =
                    window.speechSynthesis.getVoices()[
                        Math.floor(Math.random() * 6)
                    ];
            }, 1000);

            window.speechSynthesis.speak(utterance);
        } else {
            console.log('Text-to-speech not supported');
        }
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Editor" />
                <div className="flex-grow flex flex-row overflow-hidden my-10 bg-dark-300 rounded-3xl">
                    {/* Left Sidebar */}
                    <div className="w-80 shadow-md overflow-hidden border-r border-dark-400 flex flex-col">
                        <div className="p-4">
                            <CustomInput
                                id={'search'}
                                placeholder="Search strings"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="mb-4 bg-dark-200"
                                icon={
                                    <Search className="h-4 w-4 text-gray-400" />
                                }
                            />
                        </div>
                        <div className="px-4 max-w-80 flex flex-col overflow-y-auto max-h-full items-start">
                            {fakeStrings.map(str => (
                                <Button
                                    key={str.id}
                                    onClick={() => setSelectedString(str)}
                                    className={`text-left flex flex-row items-center w-full mb-2 py-2 bg-transparent hover:bg-main-two truncate max-w-full line-clamp-1 ${
                                        selectedString.id === str.id
                                            ? 'bg-main-two'
                                            : ''
                                    }`}
                                >
                                    <div
                                        className={
                                            'flex flex-row gap-2 items-center'
                                        }
                                    >
                                        <div
                                            className={`w-3 h-3 rounded-full bg-red-500 flex-shrink-0`}
                                        />
                                        <p className={'truncate'}>{str.text}</p>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Editor Area */}
                        <div className="flex-grow p-6 overflow-auto">
                            <Card className="mb-6 p-6 shadow-lg bg-dark-200 border-0 border-t-4 border-main-two">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold text-white-900">
                                        Source String
                                    </h2>
                                    <Button
                                        className={
                                            'bg-primary-500 text-white-900 border-transparent hover:bg-main-two/50 hover:text-white-900'
                                        }
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

                            <Card className="mb-6 p-6 shadow-lg bg-dark-200 border-0 border-t-4 border-main-two">
                                <h2 className="text-2xl font-bold mb-4 text-white-900">
                                    Translation
                                </h2>
                                <Textarea
                                    value={translation}
                                    onChange={e =>
                                        setTranslation(e.target.value)
                                    }
                                    placeholder="Enter your translation here..."
                                    className="h-32 bg-dark-300 text-white-900 border border-dark-400 p-4 rounded-lg text-sm mb-4 placeholder:text-gray-40"
                                />
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">
                                        Characters: {translation.length}
                                    </span>
                                    <div className="space-x-2">
                                        <Button
                                            onClick={handleSave}
                                            className="bg-primary-500 hover:bg-primary-500/50"
                                        >
                                            <Save className="h-4 w-4 mr-2" />
                                            Save
                                        </Button>
                                        <Button
                                            className={
                                                'bg-transparent border border-red-500 text-white-900 hover:bg-transparent'
                                            }
                                            variant="destructive"
                                            onClick={handleDelete}
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Clear
                                        </Button>
                                    </div>
                                </div>
                            </Card>

                            <Card className="mb-6 p-6 shadow-lg bg-dark-200 border-transparent border-0 border-t-4 border-main-two">
                                <h2 className="text-2xl font-bold mb-4 text-white-900">
                                    Translation Suggestions
                                </h2>
                                <ul className="space-y-2">
                                    {suggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="bg-dark-300 p-3 rounded-lg flex justify-between items-center text-gray-400"
                                        >
                                            <span>{suggestion}</span>
                                            <Button
                                                size="sm"
                                                className={
                                                    'bg-transparent border border-main-two text-white-900 hover:bg-transparent'
                                                }
                                                onClick={() =>
                                                    setTranslation(suggestion)
                                                }
                                            >
                                                Use
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div
                        className={`w-80 items-center bg-white shadow-md overflow-hidden flex flex-col transition-all duration-300  border-l border-dark-400`}
                    >
                        <SetupTabs
                            className={'bg-dark-300 p-4 rounded-lg'}
                            defaultTab="comments"
                        >
                            <TabHeader id="comments">Comments</TabHeader>
                            <TabHeader id="history">History</TabHeader>
                        </SetupTabs>
                        {/*<Tabs*/}
                        {/*    defaultValue="comments"*/}
                        {/*    className="flex-grow flex flex-col"*/}
                        {/*>*/}
                        {/*    <TabsList className="grid w-full grid-cols-4 bg-dark-200">*/}
                        {/*        <TabsTrigger value="comments">*/}
                        {/*            <MessageCircle className="h-5 w-5" />*/}
                        {/*        </TabsTrigger>*/}
                        {/*        <TabsTrigger value="history">*/}
                        {/*            <History className="h-5 w-5" />*/}
                        {/*        </TabsTrigger>*/}
                        {/*    </TabsList>*/}
                        {/*    <TabsContent*/}
                        {/*        value="comments"*/}
                        {/*        className="flex-grow flex flex-col p-4"*/}
                        {/*    >*/}
                        {/*        <h2 className="text-xl font-bold mb-4">*/}
                        {/*            Comments*/}
                        {/*        </h2>*/}
                        {/*        <ScrollArea className="flex-grow mb-4">*/}
                        {/*            {comments.map((c, index) => (*/}
                        {/*                <div*/}
                        {/*                    key={index}*/}
                        {/*                    className="bg-gray-100 p-3 rounded-lg mb-2"*/}
                        {/*                >*/}
                        {/*                    <p className="text-sm font-medium">*/}
                        {/*                        {c.author}*/}
                        {/*                    </p>*/}
                        {/*                    <p className="text-gray-700">*/}
                        {/*                        {c.text}*/}
                        {/*                    </p>*/}
                        {/*                    <p className="text-xs text-gray-500 mt-1">*/}
                        {/*                        {c.timestamp.toLocaleString()}*/}
                        {/*                    </p>*/}
                        {/*                </div>*/}
                        {/*            ))}*/}
                        {/*        </ScrollArea>*/}
                        {/*        <div className="flex items-center space-x-2">*/}
                        {/*            <Input*/}
                        {/*                value={comment}*/}
                        {/*                onChange={e =>*/}
                        {/*                    setComment(e.target.value)*/}
                        {/*                }*/}
                        {/*                placeholder="Add a comment..."*/}
                        {/*                className="flex-grow"*/}
                        {/*            />*/}
                        {/*            <Button onClick={handleSendComment}>*/}
                        {/*                <Send className="h-4 w-4" />*/}
                        {/*            </Button>*/}
                        {/*        </div>*/}
                        {/*    </TabsContent>*/}
                        {/*    <TabsContent value="history" className="p-4">*/}
                        {/*        <h2 className="text-xl font-bold mb-4">*/}
                        {/*            Translation History*/}
                        {/*        </h2>*/}
                        {/*        <ul className="space-y-2">*/}
                        {/*            <li className="text-sm">*/}
                        {/*                <p>*/}
                        {/*                    <strong>Version 2:</strong>{' '}*/}
                        {/*                    Willkommen in unserer App*/}
                        {/*                </p>*/}
                        {/*                <p className="text-xs text-gray-500">*/}
                        {/*                    2023-06-15 14:30*/}
                        {/*                </p>*/}
                        {/*            </li>*/}
                        {/*            <li className="text-sm">*/}
                        {/*                <p>*/}
                        {/*                    <strong>Version 1:</strong>{' '}*/}
                        {/*                    Willkommen bei unserer Anwendung*/}
                        {/*                </p>*/}
                        {/*                <p className="text-xs text-gray-500">*/}
                        {/*                    2023-06-14 10:15*/}
                        {/*                </p>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </TabsContent>*/}
                        {/*</Tabs>*/}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
