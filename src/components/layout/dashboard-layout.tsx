import React from 'react';
import LeftSidebar from "@/components/shared/left-sidebar.tsx";

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
	return (
		<div className="relative bg-dark-200">

			<div className={'flex'}>
				<LeftSidebar/>
				<section className="flex min-h-screen flex-1 flex-col px-6 max-md:pb-14 sm:px-5">
					<div className="mx-auto w-full mt-10">
						{children}
					</div>
				</section>
			</div>
		</div>
	)
}

export default Layout;
