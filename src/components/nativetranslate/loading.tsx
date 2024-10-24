import { LucideLoaderCircle } from 'lucide-react';

export default function Loading() {
    return (
        <div className="bg-light-two dark:bg-dark-two flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex flex-row items-center gap-5">
                <img
                    src="/assets/icons/logo.svg"
                    alt="NativeTranslate"
                    className="w-12 h-12"
                />
                <h1 className="text-2xl text-black dark:text-white font-semibold">
                    NativeTranslate
                </h1>
            </div>
            <div className={'mt-5'}>
                <LucideLoaderCircle
                    className={
                        'text-primary w-12 h-12 animate-spin duration-1000'
                    }
                />
            </div>
        </div>
    );
}
