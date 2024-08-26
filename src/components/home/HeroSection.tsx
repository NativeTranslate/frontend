// components/HeroSection.tsx
'use client';
import {motion} from 'framer-motion';
import {Button} from "@/components/ui/button.tsx";
import {FlipWords} from "@/components/shared/flip-words.tsx";
import {useNavigate} from "react-router-dom";

const HeroSection = () => {
	const navigate = useNavigate();
	const words = ["Efficiency", "Precision", "Ease", "Speed", "Control", "Confidence", "Simplicity", "Accuracy", "Flexibility", "Power", "NativeTranslate!"];

	return (
		<motion.section
			initial={{opacity: 0, y: 50}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.5}}
			className="w-full py-16 md:py-28 lg:py-36 xl:py-48 bg-gradient-to-b from-dark-300 to-dark-200"
		>
			<div className="container px-6 md:px-8">
				<div className="flex flex-col items-center space-y-6 text-center">
					<div className="space-y-4">
						<h1 className="text-4xl font-semibold text-center font-inter tracking-tighter text-primary-500 sm:text-5xl md:text-6xl lg:text-7xl/none">
							Manage Your Translations with <FlipWords
							className="text-4xl font-bold font-inter text-main-two tracking-tighter"
							words={words}
						/>
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
							NativeTranslate provides a powerful dashboard for setting and managing your
							translation strings, accessible via fast GraphQL APIs.
						</p>
					</div>
					<div className="space-x-6">
						<Button
							onClick={() => navigate('/dashboard')}
							className="bg-main-two hover:bg-main-one transition-transform transform hover:scale-105 rounded-lg shadow-md"
							variant="default"
						>
							Go to Dashboard
						</Button>
						<Button
							onClick={() => navigate('/api-docs')}
							className="bg-transparent border-2 border-primary-500 hover:border-main-one hover:bg-main-one hover:text-dark-300 transition-transform transform hover:scale-105 rounded-lg"
							variant="default"
						>
							View API Docs
						</Button>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
