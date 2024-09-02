import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    SetupTabs,
    TabContent,
    TabHeader,
} from '@/components/shared/custom-tabs';
import CustomInput from '@/components/shared/custom-input';
import { ArrowDownWideNarrowIcon, SearchIcon } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTriggerNoIcons,
} from '@/components/ui/select';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import TopicCard from '@/components/shared/topic-card';
import CreateTopic from '@/components/dialog/create-topic';
import ChatView from '@/components/shared/chat-view';

const FilterField = () => {
    return (
        <Select defaultValue="newest">
            <SelectTriggerNoIcons className="h-10 bg-dark-200 border-0 text-primary rounded-md">
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger>
                            <ArrowDownWideNarrowIcon className="w-4 h-4 text-white-900" />
                        </TooltipTrigger>
                        <TooltipContent>Sort by</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </SelectTriggerNoIcons>
            <SelectContent position="popper">
                <SelectGroup>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="most-commented">
                        Most commented
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

const ListHeader = ({ createButton }: { createButton: boolean }) => {
    return (
        <div className="flex flex-col sm:flex-row my-5 gap-3 items-start sm:items-center pb-2 border-b border-dark-400">
            <div className="flex-grow w-full sm:w-auto">
                <CustomInput
                    className="bg-dark-200 w-full"
                    icon={<SearchIcon />}
                    placeholder="Search in topics"
                    id="search-topics"
                    onChange={() => {
                        throw new Error('Function not implemented.');
                    }}
                />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
                <FilterField />
                {createButton && <CreateTopic />}
            </div>
        </div>
    );
};

export default function Component() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string>('open');

    const handleTopicClick = (topicId: string) => {
        setSelectedTopic(topicId);
    };

    const handleBackClick = () => {
        setSelectedTopic(null);
    };

    return (
        <div className="w-full mx-auto px-4">
            <SetupTabs
                className="p-4 rounded-lg overflow-hidden"
                defaultTab="open"
                onChange={(tabId: string) => setActiveTab(tabId)}
            >
                <TabHeader id="open">Open</TabHeader>
                <TabHeader id="closed">Closed</TabHeader>

                <TabContent id="open">
                    <div className="flex flex-col">
                        <AnimatePresence mode="wait">
                            {selectedTopic && activeTab === 'open' ? (
                                <ChatView
                                    key="chat-view-open"
                                    handleBackButton={handleBackClick}
                                    topicId={selectedTopic}
                                />
                            ) : (
                                <motion.div
                                    key="topic-list-open"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ListHeader createButton={true} />
                                    <div className="flex flex-col gap-5">
                                        <TopicCard
                                            onClick={() =>
                                                handleTopicClick('1')
                                            }
                                        />
                                        <TopicCard
                                            onClick={() =>
                                                handleTopicClick('2')
                                            }
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </TabContent>
                <TabContent id="closed">
                    <div className="flex flex-col">
                        <AnimatePresence mode="wait">
                            {selectedTopic && activeTab === 'closed' ? (
                                <ChatView
                                    key="chat-view-closed"
                                    handleBackButton={handleBackClick}
                                    topicId={selectedTopic}
                                />
                            ) : (
                                <motion.div
                                    key="topic-list-closed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ListHeader createButton={false} />
                                    <div className="flex flex-col gap-5">
                                        <TopicCard
                                            onClick={() =>
                                                handleTopicClick('3')
                                            }
                                        />
                                        <TopicCard
                                            onClick={() =>
                                                handleTopicClick('4')
                                            }
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </TabContent>
            </SetupTabs>
        </div>
    );
}
