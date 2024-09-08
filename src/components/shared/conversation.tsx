import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PlusIcon, SendIcon, Settings2Icon } from 'lucide-react';
import CustomInput from '@/components/shared/custom-input.tsx'; // Interface for a conversation

// Interface for a conversation
export interface Conversation {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: string;
}

// Interface for a message
export interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
}

// ConversationsList component
const ConversationsList = ({
    conversations,
    selectedConversation,
    onSelectConversation,
}: {
    conversations: Conversation[];
    selectedConversation: string | null;
    onSelectConversation: (id: string) => void;
}) => (
    <div className="w-64 border-r border-dark-400 flex flex-col h-full">
        <div className="p-4">
            <Button className="w-full bg-main-two hover:bg-main-two/50 text-white-900">
                <PlusIcon className="mr-2 h-4 w-4" />
                Create Conversation
            </Button>
        </div>
        <ScrollArea className="flex-grow h-full">
            {conversations.map(conv => (
                <div
                    key={conv.id}
                    className={`p-4 cursor-pointer hover:bg-dark-200 ${selectedConversation === conv.id ? 'bg-dark-200' : ''}`}
                    onClick={() => onSelectConversation(conv.id)}
                >
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarFallback className={'bg-dark-200'}>
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
);

// ChatMessage component
const ChatMessage = ({ message }: { message: Message }) => (
    <div key={message.id} className="mb-4">
        <div className="flex items-start">
            <Avatar className="mr-2">
                <AvatarFallback className={'bg-dark-200'}>
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
                <p className="text-sm mt-1">{message.content}</p>
            </div>
        </div>
    </div>
);

// ChatWindow component
const ChatWindow = ({
    conversation,
    messages,
    newMessage,
    onSendMessage,
    onNewMessageChange,
    className,
}: {
    conversation: Conversation | undefined;
    messages: Message[];
    newMessage: string;
    onSendMessage: () => void;
    className?: string;
    onNewMessageChange: (message: string) => void;
}) => (
    <div className={`flex-1 flex flex-col h-full ${className}`}>
        {/* Chat header */}
        <div className="flex justify-between items-center p-4 border-b border-dark-200">
            <h2 className="text-xl font-semibold">
                {conversation ? conversation.name : 'No Subject'}
            </h2>
            <Button variant="ghost" size="icon">
                <Settings2Icon className="h-5 w-5" />
            </Button>
        </div>

        {/* Chat messages */}
        <ScrollArea className="flex-grow p-4">
            {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
            ))}
        </ScrollArea>

        {/* Message input */}
        <div className="p-4 border-t border-dark-200">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    onSendMessage();
                }}
                className="flex space-x-2"
            >
                <CustomInput
                    placeholder="New message"
                    value={newMessage}
                    onChange={e => onNewMessageChange(e.target.value)}
                    className="flex-grow bg-dark-200 border-dark-100"
                    icon={undefined}
                    id={'message'}
                />
                <Button
                    className={'bg-main-two hover:bg-main-two/50'}
                    type="submit"
                    size="icon"
                >
                    <SendIcon className="h-4 w-4" />
                </Button>
            </form>
        </div>
    </div>
);

export { ConversationsList, ChatMessage, ChatWindow };
