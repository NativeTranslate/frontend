import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2Icon, LockIcon } from 'lucide-react';
import { useState } from 'react';
import FormCard from '@/components/shared/form-card.tsx';

const Page = () => {
    const [error] = useState(null);
    const [isLoading] = useState(false);

    const [isChanged] = useState(false);

    return (
        <div className="bg-dark-200 min-h-screen flex items-center justify-center p-4">
            <div className="bg-dark-300 rounded-lg shadow-lg overflow-hidden flex max-w-4xl w-full">
                {!isChanged ? (
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
                            Reset Password
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-400 mb-1"
                                >
                                    Enter safety code
                                </label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your safety code"
                                        className="bg-dark-200 border-dark-300 pr-10 w-full text-white-800"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <LockIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-400 mb-1"
                                >
                                    New Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your new password"
                                        className="bg-dark-200 border-dark-300 pr-10 w-full text-white-800"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <LockIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block text-sm font-medium text-gray-400 mb-1"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type="password"
                                        placeholder="Confirm your new password"
                                        className="bg-dark-200 border-dark-300 pr-10 w-full text-white-800"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <LockIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            {error && (
                                <p className="text-red-500 font-medium">
                                    {error}
                                </p>
                            )}
                            <Button
                                disabled={isLoading}
                                type="submit"
                                className="w-full bg-main-two hover:bg-main-one text-white-800 gap-2"
                            >
                                {isLoading
                                    ? 'Changing password...'
                                    : 'Change Password'}
                                {isLoading && (
                                    <Loader2Icon className="animate-spin w-5 h-5" />
                                )}
                            </Button>
                        </form>
                        <p className="mt-6 text-sm text-center text-gray-400">
                            {'Want to go back? '}
                            <a
                                href="/sign-in"
                                className="font-medium text-main-one hover:text-main-two"
                            >
                                Sign in
                            </a>
                        </p>
                    </div>
                ) : (
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

                        <img
                            src={'/assets/icons/checkmark.svg'}
                            className={'mx-auto m-5'}
                            alt={'checkmark'}
                            width={100}
                            height={91}
                        />

                        <div
                            className={
                                'text-center items-center justify-center mx-auto space-y-3'
                            }
                        >
                            <h2 className={'text-2xl text-white-900 font-bold'}>
                                Reset Successfully!
                            </h2>
                            <p className={'text-gray-400'}>
                                Your NativeTranslate password has been updated
                                successfully.
                            </p>
                        </div>

                        <Button
                            className={
                                'w-full bg-main-two hover:bg-main-one text-white-800 mt-6'
                            }
                            onClick={() => {
                                window.location.href = '/sign-in';
                            }}
                        >
                            Continue to Sign In
                        </Button>
                    </div>
                )}
                <FormCard
                    text={['Oops!', 'Oups!', 'Hoppla!', '¡Vaya!', '哎呀!']}
                />
            </div>
        </div>
    );
};

export default Page;
