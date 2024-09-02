import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label.tsx';
import CustomInput from '@/components/shared/custom-input.tsx';
import CustomTextarea from '@/components/shared/custom-text-area.tsx';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const CreateTopic = () => {
    const [isSubmitting] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={'bg-main-two hover:bg-main-two/50'}>
                    Create new topic
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-dark-300 border-transparent">
                <DialogHeader>
                    <DialogTitle className={'text-white-900'}>
                        New Topic
                    </DialogTitle>
                    <DialogDescription className={'text-gray-400'}>
                        Fill in the details below to create a new topic.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col space-y-3">
                        <Label
                            htmlFor="name"
                            className="text-left text-gray-400"
                        >
                            Name
                        </Label>
                        <CustomInput
                            id="name"
                            placeholder="I like ducks because.."
                            className="bg-dark-200"
                            icon={undefined}
                            onChange={function (): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <Label
                            htmlFor="username"
                            className="text-left text-gray-400"
                        >
                            Content
                        </Label>
                        <CustomTextarea
                            className="bg-dark-200"
                            placeholder={'Hello World!'}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        disabled={isSubmitting}
                        type="submit"
                        className={
                            'bg-main-two hover:bg-main-two/50 transition-all'
                        }
                    >
                        {isSubmitting ? 'Creating...' : 'Create'}
                        {isSubmitting && (
                            <Loader2 className={'w-6 h-6 ml-2 animate-spin'} />
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
export default CreateTopic;
