import UserButton from '@/components/shared/user-button.tsx';

interface Props {
    title: string;
}

const DashboardHeader = ({ title }: Props) => {
    return (
        <div className="flex flex-row items-center">
            <p className="text-2xl text-white-900 font-semibold">
                {title}
            </p>
            <div className="flex-grow" />
            <UserButton />
        </div>
    );
};
export default DashboardHeader;
