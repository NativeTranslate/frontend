import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PlusIcon, SendIcon, Settings2Icon } from 'lucide-react';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';

interface Conversation {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: string;
}

interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
}

const mockConversations: Conversation[] = [
    {
        id: '1',
        name: 'testuser2',
        lastMessage: 'York hi',
        timestamp: 'Yesterday',
    },
    // Add more mock conversations as needed
];

const mockMessages: Message[] = [
    {
        id: '1',
        sender: 'Fedox',
        content: 'Fedox created the conversation and added 1 user',
        timestamp: '04:03',
    },
    { id: '2', sender: 'Fedox', content: 'hi', timestamp: '04:03' },
    // Add more mock messages as needed
];

export default function ConversationsPage() {
    const [selectedConversation, setSelectedConversation] = useState<
        string | null
    >(null);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Here you would typically send the message to your backend
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    };

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Conversations" />

                <div className="flex h-full bg-dark-300 text-white-900 rounded-3xl my-10 overflow-hidden w-full">
                    {/* Left sidebar */}
                    <div className="w-64 border-r border-dark-200 flex flex-col">
                        <div className="p-4">
                            <Button className="w-full bg-dark-200 hover:bg-dark-100 text-white-900">
                                <PlusIcon className="mr-2 h-4 w-4" />
                                Create Conversation
                            </Button>
                        </div>
                        <ScrollArea className="flex-grow">
                            {mockConversations.map(conv => (
                                <div
                                    key={conv.id}
                                    className={`p-4 cursor-pointer hover:bg-dark-200 ${selectedConversation === conv.id ? 'bg-dark-200' : ''}`}
                                    onClick={() =>
                                        setSelectedConversation(conv.id)
                                    }
                                >
                                    <div className="flex items-center space-x-4">
                                        <Avatar>
                                            <AvatarFallback>
                                                {conv.name[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">
                                                {conv.name}
                                            </p>
                                            <p className="text-xs text-gray-400 truncate">
                                                {conv.lastMessage}
                                            </p>
                                        </div>
                                        <span className="text-xs text-gray-400">
                                            {conv.timestamp}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                    </div>

                    {/* Right chat area */}
                    <div className="flex-1 flex flex-col">
                        {/* Chat header */}
                        <div className="flex justify-between items-center p-4 border-b border-dark-200">
                            <h2 className="text-xl font-semibold">
                                {selectedConversation
                                    ? mockConversations.find(
                                          c => c.id === selectedConversation,
                                      )?.name
                                    : 'No Subject'}
                            </h2>
                            <Button variant="ghost" size="icon">
                                <Settings2Icon className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Chat messages */}
                        <ScrollArea className="flex-grow p-4">
                            {mockMessages.map(message => (
                                <div key={message.id} className="mb-4">
                                    <div className="flex items-start">
                                        <Avatar className="mr-2">
                                            <AvatarFallback>
                                                {message.sender[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">
                                                {message.sender}{' '}
                                                <span className="text-gray-400 text-xs ml-2">
                                                    {message.timestamp}
                                                </span>
                                            </p>
                                            <p className="text-sm mt-1">
                                                {message.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>

                        {/* Message input */}
                        <div className="p-4 border-t border-dark-200">
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    handleSendMessage();
                                }}
                                className="flex space-x-2"
                            >
                                <Input
                                    type="text"
                                    placeholder="New message"
                                    value={newMessage}
                                    onChange={e =>
                                        setNewMessage(e.target.value)
                                    }
                                    className="flex-grow bg-dark-200 border-dark-100"
                                />
                                <Button type="submit" size="icon">
                                    <SendIcon className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
