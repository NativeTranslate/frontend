import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { NativeTranslate } from '@/lib/core/nativetranslate.ts';
import { useState } from 'react';
import { Loader2Icon } from 'lucide-react';

const ResetPassword = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleClick = () => {
        setIsLoading(true);

        if (!email) {
            setError('Please enter your email');
            return;
        }

        NativeTranslate.getAPI()
            .sendResetPasswordEmail(email)
            .then(_ => {
                window.location.href = '/reset-password';
            })
            .catch(error => {
                setError(error.response.data.error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <a
                    href="#"
                    className="text-sm font-medium text-main-one hover:text-main-two"
                >
                    Forgot password?
                </a>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-dark-300 border-dark-300">
                <DialogHeader>
                    <DialogTitle className={'text-white-900'}>
                        Reset Password
                    </DialogTitle>
                    <DialogDescription>
                        Enter your email address and we will send you a link to
                        reset your password.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="bg-dark-200 w-full border-none text-white-800"
                        />
                    </div>
                </div>
                <p className="text-red-500 font-medium">{error}</p>
                <DialogFooter className="sm:justify-start">
                    <Button
                        onClick={handleClick}
                        disabled={isLoading}
                        type="button"
                        className={
                            'w-full bg-main-two hover:bg-main-one transition-colors gap-2'
                        }
                    >
                        Submit
                        {isLoading && (
                            <Loader2Icon className={'animate-spin'} />
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
export default ResetPassword;
