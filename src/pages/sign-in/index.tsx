import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2Icon, LockIcon, Mail } from 'lucide-react';
import { useState } from 'react';
import FormCard from '@/components/shared/form-card.tsx';
import ResetPassword from '@/components/dialog/reset-password.tsx';
import { useAuth } from '@/lib/core/auth-context.tsx';

const Page = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const handleLogin = async () => {
        setIsLoading(true);
        setError('');

        try {
            await login(email, password);
        } catch (err) {
            setError('Invalid email or password');
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
                        Sign In
                    </h2>
                    <div className="space-y-4">
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
                                    onChange={e => setEmail(e.target.value)}
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
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <LockIcon className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <ResetPassword />
                        </div>
                        {error && (
                            <p className="text-red-500 font-medium">{error}</p>
                        )}
                        <Button
                            disabled={isLoading}
                            className="w-full bg-main-two hover:bg-main-one text-white-800 gap-2"
                            onClick={handleLogin}
                        >
                            {isLoading ? 'Logging in..' : 'Log in'}
                            {isLoading && (
                                <Loader2Icon className="animate-spin w-5 h-5" />
                            )}
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-center text-gray-400">
                        {'New to our platform? '}
                        <a
                            href="/sign-up"
                            className="font-medium text-main-one hover:text-main-two"
                        >
                            Get started here!
                        </a>
                    </p>
                </div>
                <FormCard
                    text={['Hey there!', 'Salut!', 'Hallo!', '¡Hola!', '你好!']}
                />
            </div>
        </div>
    );
};

export default Page;
