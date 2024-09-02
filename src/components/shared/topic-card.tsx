import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ChatBubbleIcon, ClockIcon } from '@radix-ui/react-icons';

const fakeData = {
    title: 'Topic Title',
    lastRepliedBy: 'John Doe',
    lastRepliedAt: 'Sep 2, 2024',
    replyCount: 3,
    lastRepliedTime: 'a hour ago',
};

interface Props {
    onClick?: () => void;
}

export default function Component({ onClick }: Props) {
    return (
        <div onClick={onClick} className="bg-dark-200 rounded-md shadow-xl">
            <div className="flex flex-col gap-y-3 p-4">
                <div>
                    <p className="text-lg font-semibold">{fakeData.title}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarFallback className="bg-dark-300">
                                {fakeData.lastRepliedBy[0]}
                            </AvatarFallback>
                        </Avatar>
                        <p className="text-muted-foreground text-sm">
                            {fakeData.lastRepliedBy} at {fakeData.lastRepliedAt}
                        </p>
                    </div>
                    <div className="flex-grow hidden sm:block" />
                    <div className="flex flex-wrap gap-3 sm:gap-5 mt-2 sm:mt-0">
                        <p className="text-muted-foreground text-sm flex items-center gap-1">
                            <ChatBubbleIcon className="h-4 w-4" />{' '}
                            {fakeData.replyCount} replies
                        </p>
                        <p className="text-muted-foreground text-sm flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />{' '}
                            {fakeData.lastRepliedTime}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
