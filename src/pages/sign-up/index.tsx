import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Loader2Icon,
    LockIcon,
    Mail,
    PartyPopperIcon,
    User,
} from 'lucide-react';
import { useState } from 'react';
import FormCard from '@/components/shared/form-card.tsx';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast.ts';

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
        <div className="bg-dark-200 min-h-screen flex items-center justify-center p-4">
            <div className="bg-dark-300 rounded-lg shadow-lg overflow-hidden flex max-w-4xl w-full">
                <div className="w-full md:w-1/2 p-8">
                    <div className="flex items-center space-x-2 mb-8">
                        <img
                            src={'/assets/icons/logo.svg'}
                            alt={'Logo'}
                            width={100}
                            height={100}
                            className={'w-6 h-6'}
                        />
                        <span className="text-lg font-semibold text-primary-500">
                            NativeTranslate
                        </span>
                    </div>
                    <h2 className="text-2xl text-white-900 font-bold mb-6">
                        Sign Up
                    </h2>
                    <form className="space-y-4" onSubmit={handleSignUp}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-400 mb-1"
                            >
                                Username
                            </label>
                            <div className="relative">
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    className="bg-dark-200 border-dark-300 pr-10 w-full text-white-800"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)} // State aktualisieren
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400 mb-1"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-dark-200 border-dark-300 pr-10 w-full text-white-800"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} // State aktualisieren
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-400 mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-dark-200 border-dark-300 pr-10 w-full text-white-800"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} // State aktualisieren
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <LockIcon className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="invite"
                                className="block text-sm font-medium text-gray-400 mb-1"
                            >
                                Invite
                            </label>
                            <div className="relative">
                                <Input
                                    id="invite"
                                    name="invite"
                                    type="text"
                                    placeholder="Enter your invite code"
                                    className="bg-dark-200 border-dark-300 pr-10 w-full text-white-800"
                                    value={inviteCode}
                                    onChange={e =>
                                        setInviteCode(e.target.value)
                                    } // State aktualisieren
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <PartyPopperIcon className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        {error && (
                            <p className="text-red-500 font-medium">{error}</p>
                        )}
                        <Button
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-main-two hover:bg-main-one text-white-800 gap-2"
                        >
                            {isLoading ? 'Signing up..' : 'Sign up'}
                            {isLoading && (
                                <Loader2Icon className="animate-spin w-5 h-5" />
                            )}
                        </Button>
                    </form>
                    <p className="mt-6 text-sm text-center text-gray-400">
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
