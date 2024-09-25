import React from 'react';
import UserButton from '@/components/shared/user-button';

interface Props {
    title: string;
    children?: React.ReactNode;
}

const DashboardHeader: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <div className="bg-dark-300 rounded-3xl p-4">
                <div className={'flex flex-row items-center justify-between '}>
                    <div className="flex items-center">
                        <h1 className="text-2xl text-white-900 font-semibold">
                            {title}
                        </h1>
                    </div>
                    {children}
                    <div className="flex items-center gap-5">
                        <UserButton />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardHeader;
