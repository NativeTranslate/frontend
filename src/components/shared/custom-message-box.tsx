import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { QuoteIcon, TrashIcon } from '@radix-ui/react-icons';

interface CustomMessageBoxProps {
    message: string;
    author: string;
    timeAgo: string;
    textAreaRef?: React.RefObject<HTMLTextAreaElement>;
}

export default function CustomMessageBox({
    message,
    author,
    timeAgo,
    textAreaRef,
}: CustomMessageBoxProps) {
    const renderMessage = () => {
        return message.split('\n').map((line, index) => {
            if (line.startsWith('> ')) {
                return (
                    <div
                        key={index}
                        className="flex space-x-2 mb-1 items-center"
                    >
                        <div className="w-1 bg-muted-foreground h-6" />
                        <p className="text-gray-400 text-sm">{line.slice(2)}</p>
                    </div>
                );
            }
            return (
                <p key={index} className="text-white-900 text-sm mb-1">
                    {line}
                </p>
            );
        });
    };

    const quoteMessage = () => {
        if (textAreaRef && textAreaRef.current) {
            textAreaRef.current.value += `> ${author} said: \n> ${message}\n`;
            textAreaRef.current.focus();
        }
    };

    return (
        <div className="bg-dark-200 p-4 rounded-md mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarFallback className="bg-dark-300">
                            {author.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-dark-400">{author}</p>
                </div>
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2">
                    <span className="text-xs text-gray-400">{timeAgo}</span>
                    <div className="flex gap-2">
                        <Button
                            className="bg-main-two hover:bg-main-two/90"
                            onClick={quoteMessage}
                            size="icon"
                        >
                            <QuoteIcon className="h-4 w-4" />
                        </Button>
                        <Button
                            className="border-main-two hover:border-main-two/90 border bg-transparent hover:bg-transparent"
                            onClick={quoteMessage}
                            size="icon"
                        >
                            <TrashIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="message-content mt-2 text-white-900">
                {renderMessage()}
            </div>
        </div>
    );
}
