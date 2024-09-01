import SettingsLayout from '@/components/layout/settings-layout.tsx';
import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import Checkbox from '@/components/shared/checkbox.tsx';
import { Button } from '@/components/ui/button.tsx';
import { AlertTriangle } from 'lucide-react';

export default function TestSettings() {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Settings - Danger Zone" />
                <div className="flex-grow w-full rounded-3xl my-10 bg-dark-300 overflow-y-auto">
                    <SettingsLayout>
                        <div className="bg-dark-200 p-8 rounded-3xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <AlertTriangle className="w-8 h-8 text-red-500" />
                                <h2 className="text-2xl font-bold text-white-900">
                                    Delete your account
                                </h2>
                            </div>
                            <p className="text-gray-400 mb-8">
                                When you delete your account, you lose access to
                                Front account services, and we permanently
                                delete your personal data. This action is
                                irreversible.
                            </p>
                            <div className="bg-dark-300 p-6 rounded-2xl mb-8">
                                <h3 className="text-lg font-semibold text-white-900 mb-4">
                                    Before you proceed, please note:
                                </h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li>
                                        All your data will be permanently
                                        deleted
                                    </li>
                                    <li>
                                        You won't be able to recover your
                                        account
                                    </li>
                                    <li>This action cannot be undone</li>
                                </ul>
                            </div>
                            <div className="flex items-center gap-3 mb-8">
                                <Checkbox />
                                <label
                                    htmlFor="confirm-delete"
                                    className="text-gray-400 text-sm cursor-pointer"
                                >
                                    I confirm that I want to delete my account
                                </label>
                            </div>
                            <Button className="bg-red-500 hover:bg-red-600 text-white-900 rounded-full py-2 px-6 transition-colors duration-300">
                                Delete Account
                            </Button>
                        </div>
                    </SettingsLayout>
                </div>
            </div>
        </DashboardLayout>
    );
}
