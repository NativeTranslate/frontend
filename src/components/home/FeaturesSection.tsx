'use client';
import {motion} from 'framer-motion';
import {Code, Settings, Zap} from "lucide-react";

const FeaturesSection = () => (
	<motion.section
		initial={{opacity: 0, y: 50}}
		animate={{opacity: 1, y: 0}}
		transition={{duration: 0.5}}
		className="w-full py-16 md:py-28 lg:py-36 bg-dark-300"
	>
		<div className="container px-6 md:px-8">
			<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
				<div
					className="flex flex-col items-center space-y-6 p-6 bg-dark-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
					<Settings className="h-12 w-12 text-primary-500 mb-4"/>
					<h2 className="text-2xl font-semibold text-light-900">Intuitive Dashboard</h2>
					<p className="text-base text-white-900">
						Easily set and manage your translation strings through our user-friendly interface.
					</p>
				</div>
				<div
					className="flex flex-col items-center space-y-6 p-6 bg-dark-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
					<Zap className="h-12 w-12 text-primary-500 mb-4"/>
					<h2 className="text-2xl font-semibold text-light-900">Fast API Integration</h2>
					<p className="text-base text-white-900">
						Quickly integrate translations into your applications with our high-performance REST APIs.
					</p>
				</div>
				<div
					className="flex flex-col items-center space-y-6 p-6 bg-dark-200 rounded-lg shadow-lg transition-transform transform hover:scale-105">
					<Code className="h-12 w-12 text-primary-500 mb-4"/>
					<h2 className="text-2xl font-semibold text-light-900">Developer-Friendly</h2>
					<p className="text-base text-white-900">
						Comprehensive documentation and SDKs for seamless integration across multiple platforms.
					</p>
				</div>
			</div>
		</div>
	</motion.section>
);

export default FeaturesSection;
