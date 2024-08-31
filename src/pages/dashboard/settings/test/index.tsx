import SettingsLayout from '@/components/layout/settings-layout.tsx';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';

const TestSettings = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Settings - Test" />
                <div className="flex-grow w-full rounded-3xl my-10 bg-dark-300 overflow-y-auto">
                    <SettingsLayout>
                        <div>
                            <h1 className="text-white-900 text-2xl font-semibold mb-5">Test Settings</h1>
                        </div>
                    </SettingsLayout>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TestSettings;
