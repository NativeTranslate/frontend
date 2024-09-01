import { LucideLoaderCircle } from 'lucide-react';

export default function Loading() {
    return (
        <div className="bg-dark-200 flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex flex-row items-center gap-5">
                <img
                    src="/assets/icons/logo.svg"
                    alt="NativeTranslate"
                    className="w-12 h-12"
                />
                <h1 className="text-2xl text-white-900 font-semibold">
                    NativeTranslate
                </h1>
            </div>
            <div className={'mt-5'}>
                <LucideLoaderCircle
                    className={
                        'text-primary-500 w-12 h-12 animate-spin duration-1000'
                    }
                />
            </div>
        </div>
    );
}
