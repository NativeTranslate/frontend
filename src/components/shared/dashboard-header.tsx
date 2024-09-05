import UserButton from '@/components/shared/user-button.tsx';

interface Props {
    title: string;
}

const DashboardHeader = ({ title }: Props) => {
    return (
        <div className="flex flex-row items-center bg-dark-300 rounded-3xl p-4">
            <p className="text-2xl text-white-900 font-semibold">{title}</p>
            <div className="flex-grow" />
            <div className={'flex gap-5'}>
                <UserButton />
            </div>
        </div>
    );
};
export default DashboardHeader;
