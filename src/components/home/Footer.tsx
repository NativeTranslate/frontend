'use client';
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";

const Footer = () => (
	<motion.footer
		initial={{opacity: 0, y: 50}}
		animate={{opacity: 1, y: 0}}
		transition={{duration: 0.5}}
		className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-dark-400 bg-dark-300"
	>
		<p className="text-xs text-gray-400">
			© 2023 NativeTranslate. All rights reserved.
		</p>
		<nav className="sm:ml-auto flex gap-4 sm:gap-6">
			<Link className="text-xs text-gray-400 hover:text-white-900 transition-colors" to="#">
				Terms of Service
			</Link>
			<Link className="text-xs text-gray-400 hover:text-white-900 transition-colors" to="#">
				Privacy
			</Link>
		</nav>
	</motion.footer>
);

export default Footer;
