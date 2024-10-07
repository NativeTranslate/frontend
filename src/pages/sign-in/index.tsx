import { Loader2Icon, LockIcon, Mail } from 'lucide-react';
import { useState } from 'react';
import FormCard from '@/components/nativetranslate/form-card.tsx';
import { Button } from '@/components/nativetranslate/button.tsx';
import { Input } from '@/components/nativetranslate/input';
import { useAuth } from '@/lib/core/auth-context.tsx';
// import { useAuth } from '@/lib/core/auth-context.tsx';
// import ResetPassword from '@/components/dialog/reset-password.tsx';

const Page = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
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
                        Sign In
                    </h2>
                    <form className="space-y-4" onSubmit={handleLogin}>
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
                                    onChange={e => setEmail(e.target.value)}
                                    icon={Mail}
                                    iconDirection={'right'}
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
                                    onChange={e => setPassword(e.target.value)}
                                    icon={LockIcon}
                                    iconDirection={'right'}
                                />
                            </div>
                        </div>
                        <div className="text-right">
                            {/*<ResetPassword />*/}
                        </div>
                        {error && (
                            <p className="text-red-500 font-medium">{error}</p>
                        )}
                        <Button
                            disabled={isLoading}
                            className="w-full gap-2"
                            variant={'default_raised'}
                            type="submit"
                        >
                            {isLoading ? 'Logging in..' : 'Log in'}
                            {isLoading && (
                                <Loader2Icon className="animate-spin w-5 h-5" />
                            )}
                        </Button>
                    </form>
                    <p className="mt-6 text-sm text-center text-dark-input dark:text-light-input">
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
