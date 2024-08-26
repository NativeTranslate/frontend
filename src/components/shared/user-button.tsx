import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {CogIcon, UserIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";

const links = [
	{
		label: "Profile",
		icon: <UserIcon className={'h-5 w-5 mr-2'}/>,
		href: "/profile",
	},
	{
		label: "Settings",
		icon: <CogIcon className={'h-5 w-5 mr-2'}/>,
		href: "/settings",
	},
]

const UserButton = () => {

	const navigate = useNavigate();

	const handleLink = (href: string) => {
		navigate(href);
	}

	return (
		<div className={'flex flex-row items-center justify-center gap-4 mr-5'}>
			<DropdownMenu>
				<DropdownMenuTrigger
					className={''}>
					<div className={'flex flex-row items-center justify-center gap-3'}>
						<p className={'text-white-900 font-medium text-lg'}>John Doe</p>
						<Avatar className={'w-10 h-10'}>
							<AvatarImage src="https://github.com/shadcn.png"/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent className={'bg-dark-300 border border-primary-500 text-white-900 mt-1'}>
					{links.map((item) => (
						<DropdownMenuItem onClick={() => handleLink(item.href)} key={item.href}
										  className={'flex flex-row hover:bg-main-two'}>
							{item.icon}
							{item.label}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
export default UserButton
