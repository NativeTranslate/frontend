'use client';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => (
    <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 lg:px-6 h-16 flex items-center border-b border-primary-500 bg-gradient-to-r from-dark-200 to-dark-300 shadow-lg"
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
        <nav className="ml-auto flex gap-6 sm:gap-8">
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

export default Header;
