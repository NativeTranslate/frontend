import {
    Loader2Icon,
    LockIcon,
    Mail,
    PartyPopperIcon,
    User,
} from 'lucide-react';
import { SetStateAction, useState } from 'react';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast.ts';
import FormCard from '@/components/nativetranslate/form-card.tsx';
import { Button } from '@/components/nativetranslate/button.tsx';
import { Input } from '@/components/nativetranslate/input';

const Page = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inviteCode, setInviteCode] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await axios
                .post('/auth/register', {
                    email,
                    username,
                    password,
                    inviteCode,
                })
                .catch((error: any) => {
                    setError(error.response.data.error);
                })
                .then((response: any) => {
                    if (response) {
                        toast({
                            title: 'Success!',
                            description: 'You have successfully signed up.',
                        });
                        if (response.status === 200) {
                            window.location.href = '/sign-in';
                        }
                    }
                });
        } catch (error: any) {
            setError('A server error occurred. Please try again later.');
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-light-two dark:bg-dark-two min-h-screen flex items-center justify-center p-4">
            <div className="bg-light-one dark:bg-dark-one rounded-lg shadow-lg overflow-hidden flex max-w-4xl w-full">
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex items-center space-x-2 mb-8">
                        <img
                            src={'/assets/icons/logo.svg'}
                            alt={'Logo'}
                            width={100}
                            height={100}
                            className={'w-6 h-6'}
                        />
                        <span className="text-lg font-semibold text-primary">
                            NativeTranslate
                        </span>
                    </div>
                    <h2 className="text-2xl text-black dark:text-white font-bold mb-6">
                        Sign Up
                    </h2>
                    <form className="space-y-4" onSubmit={handleSignUp}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1"
                            >
                                Username
                            </label>
                            <div className="relative">
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    label={'Enter your username'}
                                    value={username}
                                    icon={User}
                                    iconDirection={'right'}
                                    onChange={(e: {
                                        target: {
                                            value: SetStateAction<string>;
                                        };
                                    }) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Enter your email"
                                    value={email}
                                    icon={Mail}
                                    iconDirection={'right'}
                                    onChange={(e: {
                                        target: {
                                            value: SetStateAction<string>;
                                        };
                                    }) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="••••••••"
                                    icon={LockIcon}
                                    iconDirection={'right'}
                                    value={password}
                                    onChange={(e: {
                                        target: {
                                            value: SetStateAction<string>;
                                        };
                                    }) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="invite"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1"
                            >
                                Invite
                            </label>
                            <div className="relative">
                                <Input
                                    id="invite"
                                    name="invite"
                                    type="text"
                                    label="Enter your invite code"
                                    value={inviteCode}
                                    icon={PartyPopperIcon}
                                    iconDirection={'right'}
                                    onChange={(e: {
                                        target: {
                                            value: SetStateAction<string>;
                                        };
                                    }) => setInviteCode(e.target.value)}
                                />
                            </div>
                        </div>
                        {error && (
                            <p className="text-red-500 font-medium">{error}</p>
                        )}
                        <Button
                            disabled={isLoading}
                            type="submit"
                            className={'w-full gap-2'}
                            variant={'default_raised'}
                        >
                            {isLoading ? 'Signing up..' : 'Sign up'}
                            {isLoading && (
                                <Loader2Icon className="animate-spin w-5 h-5" />
                            )}
                        </Button>
                    </form>
                    <p className="mt-6 text-sm text-center text-dark-input dark:text-light-input">
                        {'Existing user? '}
                        <a
                            href="/sign-in"
                            className="font-medium text-main-one hover:text-main-two"
                        >
                            Log in here
                        </a>
                    </p>
                </div>
                <FormCard
                    text={[
                        'Welcome!',
                        'Bievenue!',
                        'Willkommen!',
                        '¡Bienvenido!',
                        '欢迎!',
                    ]}
                />
            </div>
        </div>
    );
};

export default Page;
