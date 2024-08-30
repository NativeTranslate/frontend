'use client';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 lg:px-6 h-16 flex items-center border-b border-primary-500 bg-gradient-to-r from-dark-200 to-dark-300 shadow-lg relative"
        >
            <Link className="flex items-center justify-center" to="#">
                <img
                    src={'/assets/icons/logo.svg'}
                    alt={'Logo'}
                    width={100}
                    height={100}
                    className={'w-7 h-7'}
                />
                <span className="ml-3 text-3xl text-primary-500 font-bold">
                    NativeTranslate
                </span>
            </Link>
            <div className="ml-auto block lg:hidden">
                <Dialog>
                    <DialogTrigger>
                        <Menu className="w-6 h-6 text-primary-500" />
                    </DialogTrigger>
                    <DialogContent className="bg-dark-300 p-6 rounded-lg shadow-lg w-full max-w-sm">
                        <div className="flex justify-end">
                            <DialogTrigger>
                                <X className="w-6 h-6 text-primary-500" />
                            </DialogTrigger>
                        </div>
                        <nav className="flex flex-col gap-6 text-center">
                            <Link
                                className="text-lg font-medium text-white-900 hover:text-light-900 transition-colors"
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>
                            <Link
                                className="text-lg font-medium text-white-900 hover:text-light-900 transition-colors"
                                to="/api-docs"
                            >
                                API Docs
                            </Link>
                        </nav>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Desktop Navigation */}
            <nav className="ml-auto lg:flex hidden gap-6 sm:gap-8">
                <Link
                    className="text-sm font-medium text-white-900 hover:text-light-900 transition-colors"
                    to="/dashboard"
                >
                    Dashboard
                </Link>
                <Link
                    className="text-sm font-medium text-white-900 hover:text-light-900 transition-colors"
                    to="/api-docs"
                >
                    API Docs
                </Link>
            </nav>
        </motion.header>
    );
};

export default Header;
