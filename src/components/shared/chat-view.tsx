import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CogIcon } from 'lucide-react';
import { ClockIcon } from '@radix-ui/react-icons';
import CustomMessageBox from '@/components/shared/custom-message-box';
import CustomTextarea from '@/components/shared/custom-text-area';
import { fakeMessages } from '@/lib/data/fakeMessages';

interface Props {
    topicId: string;
    handleBackButton: () => void;
}

export default function ChatView({ topicId, handleBackButton }: Props) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full overflow-hidden"
        >
            <div className="flex items-center justify-between p-4 border-b border-dark-400">
                <Button
                    key={topicId}
                    onClick={handleBackButton}
                    className="flex items-center gap-1 bg-main-two hover:bg-main-two/90"
                    size="sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="sr-only sm:not-sr-only">Back</span>
                </Button>

                <Button
                    size="icon"
                    className="bg-main-two hover:bg-main-two/90"
                >
                    <CogIcon className="w-4 h-4" />
                </Button>
            </div>

            <div className="flex flex-col items-center mt-4 px-4">
                <p className="text-lg font-semibold">test</p>
                <div className="flex items-center text-muted-foreground mt-1">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">Opened Sep 2, 2024</span>
                </div>
            </div>

            <div className="flex-grow overflow-y-auto mt-6 px-4">
                {fakeMessages.map((message, index) => (
                    <CustomMessageBox
                        key={index}
                        message={message.message}
                        author={message.author}
                        timeAgo={message.timeAgo}
                        textAreaRef={textAreaRef}
                    />
                ))}
            </div>

            <div className="mt-auto p-4 border-t border-dark-400">
                <CustomTextarea
                    ref={textAreaRef}
                    className="w-full p-2 bg-dark-200 rounded-md"
                    placeholder="Leave a comment..."
                />
                <div className="mt-2 flex justify-end">
                    <Button className="bg-main-two hover:bg-main-two/90">
                        Reply
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
