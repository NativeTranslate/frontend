import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-light-two dark:bg-dark-one text-foreground">
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
                    className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-b from-light-two to-light-one dark:from-dark-two dark:to-dark-one text-center"
                >
                    <div className="container px-6 md:px-8">
                        <h1 className="text-6xl font-bold text-primary mb-4">
                            404
                        </h1>
                        <h2 className="text-3xl font-semibold mb-2">
                            Oops! Page Not Found
                        </h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-6">
                            The page you are looking for does not exist. It
                            might have been removed, had its name changed, or is
                            temporarily unavailable.
                        </p>
                        <Link
                            to="/"
                            className="inline-block mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                        >
                            Go Back to Home
                        </Link>
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
                    <Link
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        to="/tos"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        to="/privacy-policy"
                    >
                        Privacy
                    </Link>
                    <Link
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        to="/imprint"
                    >
                        Imprint
                    </Link>
                </nav>
            </motion.footer>
        </div>
    );
};

export default NotFoundPage;
