import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';

type Comment = {
    id: string;
    user: {
        name: string;
        avatar: string;
    };
    message: string;
    date: string;
};

const fakeComments: Comment[] = [
    {
        id: '1',
        user: {
            name: 'Alice Johnson',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        message:
            'Great translation! I think this captures the meaning perfectly.',
        date: '2023-06-15T14:30:00Z',
    },
    {
        id: '2',
        user: {
            name: 'Bob Smith',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        message:
            'I suggest changing "app" to "application" for a more formal tone.',
        date: '2023-06-14T09:45:00Z',
    },
    {
        id: '3',
        user: {
            name: 'Charlie Brown',
            avatar: '/placeholder.svg?height=40&width=40',
        },
        message:
            "The context might require a different word choice here. Let's discuss.",
        date: '2023-06-13T16:20:00Z',
    },
];

export default function CommentSection() {
    const [comments, setComments] = useState<Comment[]>(fakeComments);
    const [newComment, setNewComment] = useState('');

    const handleSubmitComment = () => {
        if (newComment.trim()) {
            const comment: Comment = {
                id: Date.now().toString(),
                user: {
                    name: 'Current User',
                    avatar: '/placeholder.svg?height=40&width=40',
                },
                message: newComment.trim(),
                date: new Date().toISOString(),
            };
            setComments([...comments, comment]);
            setNewComment('');
        }
    };

    return (
        <div className="flex flex-col h-full bg-dark-200 rounded-lg">
            <div className="flex-grow overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="p-4 space-y-4">
                        {comments.map(comment => (
                            <div key={comment.id} className="flex space-x-3">
                                <Avatar className="h-10 w-10 flex-shrink-0">
                                    <AvatarImage
                                        src={comment.user.avatar}
                                        alt={comment.user.name}
                                    />
                                    <AvatarFallback>
                                        {comment.user.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-white-900">
                                            {comment.user.name}
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            {new Date(
                                                comment.date,
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-300">
                                        {comment.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            <div className="p-4 border-t border-dark-400">
                <Textarea
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="mb-2 bg-dark-300 text-white-900 border-dark-400 placeholder:text-gray-400"
                />
                <Button
                    onClick={handleSubmitComment}
                    className="w-full bg-main-two hover:bg-main-two/80 text-white-900"
                >
                    Post Comment
                </Button>
            </div>
        </div>
    );
}
