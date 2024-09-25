'use client';

import { useEffect, useState } from 'react';

export default function Custom404() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <img
                src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
                className="absolute h-full w-full object-cover"
                alt={'background'}
            />
            <div className="inset-0 bg-black opacity-25 absolute"></div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white-900 leading-tight mt-4">
                        Oh, well this is awkward. You're lost. Let's get you
                        back on track.
                    </h1>
                    <p className="font-extrabold text-8xl my-44 text-white-900 animate-spin">
                        404
                    </p>
                    <p className="text-xl text-center text-white-900 mb-8">
                        Don't worry, it happens to the best of us. You can go
                        back back. Or get a cup of coffee. Your choice. 🤷‍♂️
                    </p>
                    <button
                        onClick={handleGoBack}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
