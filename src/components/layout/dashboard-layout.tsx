import React from 'react';
import LeftSidebar from "@/components/shared/left-sidebar.tsx";

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
	return (
		<div className="relative bg-dark-200 min-h-screen flex">
			<LeftSidebar/>
			<section className="flex flex-1 flex-col min-h-screen px-6 max-md:pb-14 sm:px-5">
				<div className="flex-grow w-full h-full mt-10">
					{children}
				</div>
			</section>
		</div>
	)
}

export default Layout;
