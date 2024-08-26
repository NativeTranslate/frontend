'use client';
import {motion} from 'framer-motion';
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const CallToActionSection = () => (
	<motion.section
		initial={{opacity: 0, y: 50}}
		animate={{opacity: 1, y: 0}}
		transition={{duration: 0.5}}
		className="w-full bg-dark-200 py-16 md:py-28 lg:py-36"
	>
		<div className="container px-6 md:px-8">
			<div className="flex flex-col items-center justify-center space-y-6 text-center">
				<div className="space-y-4">
					<h2 className="text-3xl font-bold tracking-tighter text-primary-500 md:text-4xl">
						Ready to Streamline Your Translations?
					</h2>
					<p className="mx-auto max-w-[600px] font-medium text-white-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						NativeTranslate is available by invitation only. Contact your administrator for
						access or to request an invite.
					</p>
				</div>
				<div className="w-full max-w-sm space-y-4">
					<Button
						asChild
						className="w-full bg-main-two hover:bg-main-one transition-transform transform hover:scale-105 rounded-lg shadow-md"
					>
						<Link to="/sign-up">Sign Up</Link>
					</Button>
					<p className="text-xs text-gray-400">
						Need an invite? Contact a system administrator.
					</p>
				</div>
			</div>
		</div>
	</motion.section>
);

export default CallToActionSection;
