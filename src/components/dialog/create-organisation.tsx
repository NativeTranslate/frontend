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
import CustomInput from '@/components/shared/custom-input.tsx';
import CustomTextarea from '@/components/shared/custom-text-area.tsx';
import { useState } from 'react';
import { Loader2, PlusIcon } from 'lucide-react';
import InputLabel from '@/components/shared/input-label.tsx';
import LogoUpload from '@/components/shared/logo-upload.tsx';

const CreateOrganization = () => {
    const [isSubmitting] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={'bg-main-two hover:bg-main-two/50 gap-2'}>
                    <PlusIcon />
                    Create new organization
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-dark-300 border-transparent">
                <DialogHeader>
                    <DialogTitle className={'text-white-900'}>
                        New Organization
                    </DialogTitle>
                    <DialogDescription className={'text-gray-400'}>
                        Fill in the details below to create a new organization.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col space-y-3">
                        <InputLabel
                            text={'Organization Name'}
                            required={true}
                        />
                        <CustomInput
                            id="name"
                            placeholder="ACME Inc."
                            className="bg-dark-200"
                            icon={undefined}
                            onChange={function (): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <InputLabel
                            text={'Organization Description'}
                            required={true}
                        />
                        <CustomTextarea
                            className="bg-dark-200"
                            placeholder={'We are a company that does...'}
                        />
                    </div>
                    <div className="flex flex-col space-y-3">
                        <InputLabel
                            text={'Organization Logo'}
                            required={true}
                        />
                        <LogoUpload />
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
export default CreateOrganization;
