import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Trash2 } from 'lucide-react';
import CustomInput from '@/components/shared/custom-input.tsx';
import Checkbox from './checkbox';
import { fakeLanguages } from '@/lib/data/fakeLanguages.ts';

export default function LanguageSelector() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const filteredLanguages = fakeLanguages.filter(lang =>
        lang.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleLanguage = (lang: string) => {
        setSelectedLanguages(prev =>
            prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
        );
    };

    return (
        <div className="bg-dark-200 text-gray-300 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <div className="relative mb-4 border-b border-primary-500 pb-4">
                        <CustomInput

                            placeholder="Search languages"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            icon={<Search className="text-gray-500" />}
                            id={'search-languages'}

                        />
                    </div>
                    <ScrollArea className="h-[300px]">
                        {filteredLanguages.map((lang) => (
                            <div key={lang} className="flex items-center space-x-2 py-2">
                                <Checkbox
                                    id={lang}
                                    value={selectedLanguages.includes(lang)}
                                    onChange={() => toggleLanguage(lang)}
                                />
                                <label
                                    htmlFor={lang}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {lang}
                                </label>
                            </div>
                        ))}
                    </ScrollArea>
                </div>
                {!isMobile ? (
                    <div className="w-full md:w-1/2 bg-dark-300 p-4 rounded-lg">
                        {selectedLanguages.length === 0 ? (
                            <div className="text-center text-gray-500">
                                <p className={'font-bold text-2xl text-primary-500'}>No language selected</p>
                                <p className="mt-4">Select project target languages from the left-hand list</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold">Selected Languages</h3>
                                </div>
                                <ScrollArea className="h-[300px]">
                                    {selectedLanguages.map((lang) => (
                                        <div key={lang} className="flex items-center justify-between py-2 pr-5">
                                            <span>{lang}</span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className={'bg-main-two hover:bg-main-two/50 hover:text-white-900'}
                                                onClick={() => toggleLanguage(lang)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </ScrollArea>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="text-center mt-4">
                        <p>{selectedLanguages.length} languages selected</p>
                    </div>
                )}
            </div>
        </div>
    );
}