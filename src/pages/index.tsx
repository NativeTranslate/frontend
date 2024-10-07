import { Link } from 'react-router-dom';
import { Code, Settings, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
// import {
//     Dialog,
//     DialogContent,
//     DialogTrigger,
// } from '@/components/ui/dialog.tsx';
import { Button } from '@/components/nativetranslate/button.tsx';
import { FlipWords } from '@/components/nativetranslate/flip-words.tsx';

const HomePage = () => {
    const words = [
        'Efficiency',
        'Precision',
        'Ease',
        'Speed',
        'Control',
        'Confidence',
        'Simplicity',
        'Accuracy',
        'Flexibility',
        'Power',
        'NativeTranslate!',
    ];

    return (
        <div className="flex flex-col min-h-screen bg-light-two dark:bg-dark-two text-foreground">
            <motion.header
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-4 lg:px-6 h-16 flex items-center border-b border-accent dark:border-dark-border bg-light-one dark:bg-dark-one shadow-lg relative"
            >
                <Link className="flex items-center justify-center" to="#">
                    <img
                        src="/assets/icons/logo.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-7 h-7"
                    />
                    <span className="ml-3 text-3xl text-primary font-bold">
                        NativeTranslate
                    </span>
                </Link>
                <div className="ml-auto block lg:hidden">
                    {/*<Dialog>*/}
                    {/*    <DialogTrigger>*/}
                    {/*        <Menu className="w-6 h-6 text-primary" />*/}
                    {/*    </DialogTrigger>*/}
                    {/*    <DialogContent className="bg-light-one dark:bg-dark-one p-6 rounded-lg shadow-lg w-full max-w-sm">*/}
                    {/*        <div className="flex justify-end">*/}
                    {/*            <DialogTrigger>*/}
                    {/*                <X className="w-6 h-6 text-primary" />*/}
                    {/*            </DialogTrigger>*/}
                    {/*        </div>*/}
                    {/*        <nav className="flex flex-col gap-6 text-center">*/}
                    {/*            <Link*/}
                    {/*                className="text-lg font-medium text-foreground hover:text-primary transition-colors"*/}
                    {/*                to="/dashboard"*/}
                    {/*            >*/}
                    {/*                Dashboard*/}
                    {/*            </Link>*/}
                    {/*            <Link*/}
                    {/*                className="text-lg font-medium text-foreground hover:text-primary transition-colors"*/}
                    {/*                to="/api-docs"*/}
                    {/*            >*/}
                    {/*                API Docs*/}
                    {/*            </Link>*/}
                    {/*        </nav>*/}
                    {/*    </DialogContent>*/}
                    {/*</Dialog>*/}
                </div>

                {/* Desktop Navigation */}
                <nav className="ml-auto lg:flex hidden gap-6 sm:gap-8">
                    <Link
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        to="/dashboard"
                    >
                        Dashboard
                    </Link>
                    <Link
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        to="/api-docs"
                    >
                        API Docs
                    </Link>
                </nav>
            </motion.header>
            <main className="flex-1">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full py-16 md:py-28 lg:py-36 xl:py-48 bg-gradient-to-b from-light-two to-light-one dark:from-dark-two dark:to-dark-one"
                >
                    <div className="container px-6 md:px-8">
                        <div className="flex flex-col items-center space-y-6 text-center">
                            <div className="space-y-4">
                                <h1 className="text-4xl text-primary font-semibold text-center font-inter tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                                    Manage Your Translations with{' '}
                                    <FlipWords
                                        className="text-4xl font-bold font-inter text-blue-500 tracking-tighter"
                                        words={words}
                                    />
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    NativeTranslate provides a powerful
                                    dashboard for setting and managing your
                                    translation strings, accessible via fast
                                    Rest APIs.
                                </p>
                            </div>
                            <div className="space-x-6">
                                <Button
                                    // onClick={() => {
                                    //     window.location.href = '/dashboard';
                                    // }}
                                    variant="default_raised"
                                >
                                    Go to Dashboard
                                </Button>
                                <Button
                                    onClick={() => {
                                        window.location.href = '/api-docs';
                                    }}
                                    variant="default_outline"
                                >
                                    View API Docs
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full py-16 md:py-28 lg:py-36 bg-light-two dark:bg-dark-two"
                >
                    <div className="container px-6 md:px-8">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
                            <div className="flex flex-col items-center space-y-4 p-6 bg-light-one dark:bg-dark-one rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <Settings className="h-10 w-10 text-primary mb-4" />
                                <h2 className="text-xl font-semibold text-foreground">
                                    Intuitive Dashboard
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Easily set and manage your translation
                                    strings through our user-friendly interface.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 p-6 bg-light-one dark:bg-dark-one rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <Zap className="h-10 w-10 text-primary mb-4" />
                                <h2 className="text-xl font-semibold text-foreground">
                                    Fast API Integration
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Quickly integrate translations into your
                                    applications with our high-performance Rest
                                    APIs.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 p-6 bg-light-one dark:bg-dark-one rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <Code className="h-10 w-10 text-primary mb-4" />
                                <h2 className="text-xl font-semibold text-foreground">
                                    Developer-Friendly
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Comprehensive documentation and SDKs for
                                    seamless integration across multiple
                                    platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-light-one dark:bg-dark-one py-16 md:py-28 lg:py-36"
                >
                    <div className="container px-6 md:px-8">
                        <div className="flex flex-col items-center justify-center space-y-6 text-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl">
                                    Ready to Streamline Your Translations?
                                </h2>
                                <p className="mx-auto max-w-[600px] font-medium text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    NativeTranslate is available by invitation
                                    only. Contact an administrator for access or
                                    to request an invite.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-4">
                                <Button
                                    onClick={() => {
                                        window.location.href = '/sign-up';
                                    }}
                                    className={'w-full'}
                                    variant={'secondary_outline'}
                                >
                                    Sign Up
                                </Button>
                                <p className="text-xs text-muted-foreground">
                                    Need an invite? Contact an system
                                    administrator.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>
            <motion.footer
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-accent dark:border-dark-border bg-light-one dark:bg-dark-one"
            >
                <p className="text-xs text-muted-foreground">
                    © 2024 NativeTranslate. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <a
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        href="/tos"
                    >
                        Terms of Service
                    </a>
                    <a
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        href="/privacy-policy"
                    >
                        Privacy
                    </a>
                    <a
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        href="/imprint"
                    >
                        Imprint
                    </a>
                </nav>
            </motion.footer>
        </div>
    );
};

export default HomePage;
