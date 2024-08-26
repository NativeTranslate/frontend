import DashboardLayout from "@/components/layout/dashboard-layout.tsx";
import UserButton from "@/components/shared/user-button.tsx";

const Index = () => {
	return (
		<DashboardLayout>
			<div>
				<div className={'flex flex-row'}>
					<p className={'text-2xl text-white-900 font-semibold'}>Overview</p>
					<div className={'flex-grow'}/>
					<UserButton/>
				</div>
			</div>
		</DashboardLayout>
	)
}
export default Index
