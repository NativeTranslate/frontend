import { motion, Variants } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Button } from '@/components/nativetranslate/button';
import { ArrowLeft, Frown, Laugh, Lock } from 'lucide-react';

const Confetti = lazy(() => import('react-confetti'));

export default function NotAuthorized() {
    const [isLaughing, setIsLaughing] = useState(false);
    const [confetti, setConfetti] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.2,
                ease: 'easeInOut',
            },
        },
    };

    const lockVariants: Variants = {
        wiggle: {
            rotate: [0, -10, 10, -10, 10, 0],
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse' as const,
            },
        },
    };

    const faceVariants = {
        frown: { scale: 1, rotate: 0 },
        laugh: {
            scale: 1.2,
            rotate: [0, -5, 5, -5, 5, 0],
            transition: { duration: 0.5 },
        },
    };

    const handleMoodChange = () => {
        setIsLaughing(!isLaughing);
        if (!isLaughing) {
            setConfetti(true);
            setTimeout(() => setConfetti(false), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary to-secondary flex items-center justify-center p-4">
            {confetti && (
                <Suspense fallback={null}>
                    <Confetti
                        width={windowSize.width}
                        height={windowSize.height}
                        recycle={false}
                        numberOfPieces={350}
                    />
                </Suspense>
            )}
            <motion.div
                className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="text-6xl mb-4 inline-block text-primary"
                    variants={lockVariants}
                    animate="wiggle"
                >
                    <Lock size={64} />
                </motion.div>
                <h1 className="text-4xl font-bold mb-4 text-gray-800">
                    Oops! Not Authorized
                </h1>
                <p className="text-xl mb-6 text-gray-600">
                    Looks like you're trying to sneak into the VIP section
                    without a golden ticket!
                </p>
                <motion.div
                    className="text-6xl mb-6 inline-block text-primary"
                    variants={faceVariants}
                    animate={isLaughing ? 'laugh' : 'frown'}
                >
                    {isLaughing ? <Laugh size={64} /> : <Frown size={64} />}
                </motion.div>
                <div className="space-y-4 flex flex-col">
                    <Button
                        variant="default_outline"
                        className="w-full"
                        onClick={handleMoodChange}
                    >
                        {isLaughing
                            ? "Okay, that's enough laughing"
                            : 'Cheer me up!'}
                    </Button>
                    <a href="/">
                        <Button className="w-full">
                            <ArrowLeft className="mr-2" size={16} />
                            Back to safety
                        </Button>
                    </a>
                </div>
                <p className="mt-6 text-sm text-gray-500">
                    If you think this is a mistake, try bribing the developer
                    with cookies. It works 60% of the time, every time.
                </p>
            </motion.div>
        </div>
    );
}
