import {
	Dialog, DialogClose,
	DialogContent,
	DialogDescription, DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";

const ResetPassword = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<a href="#" className="text-sm font-medium text-main-one hover:text-main-two">
					Forgot password?
				</a>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md bg-dark-300 border-dark-300">
				<DialogHeader>
					<DialogTitle className={'text-white-900'}>Reset Password</DialogTitle>
					<DialogDescription>
						Enter your email address and we will send you a link to reset your password.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Label htmlFor="link" className="sr-only">
							Link
						</Label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="Enter your email"
							className="bg-dark-200 w-full border-none text-white-800"
						/>
					</div>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" className={'w-full bg-main-two hover:bg-main-one transition-colors'}>
							Submit
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
export default ResetPassword
