import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';

const Index = () => {
    const conversationExists = false;

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Conversations" />
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10 pb-4 md:pb-0">
                    {conversationExists ? (
                        <div></div>
                    ) : (
                        <div className="flex flex-col h-full justify-center items-center text-center">
                            <div className="flex flex-col gap-4 w-full items-center justify-center mx-auto">
                                <img
                                    src={'/assets/images/nothingfound.png'}
                                    alt={'Nothing found'}
                                    className="w-64 h-64 object-contain"
                                />

                                <h1 className="font-semibold text-white-900 text-4xl">
                                    Nothing here yet..
                                </h1>
                                <p className="text-gray-400">
                                    Start a conversation with a user to see it
                                    here.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Index;
