import SettingsLayout from '@/components/layout/settings-layout';
import DashboardLayout from '@/components/layout/dashboard-layout';
import DashboardHeader from '@/components/shared/dashboard-header';
import { availableIntegrations } from '@/lib/settings';
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const TestSettings = () => {

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Settings - Accounts & Settings" />
                <div className="flex-grow w-full rounded-3xl my-10 bg-dark-300 overflow-y-auto">
                    <SettingsLayout>
                        <div className="bg-dark-200 p-6 rounded-3xl">
                            <h2 className="text-2xl font-semibold text-white-900 mb-2">Accounts</h2>
                            <p className="text-sm text-gray-400 mb-6">Here you can manage and setup your integration
                                setting</p>

                            <div className="flex flex-col gap-4">
                                {availableIntegrations.map((integration) => (
                                    <div key={integration.name}
                                         className="flex items-center justify-between bg-dark-300 p-4 rounded-2xl">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-dark-200 p-3 rounded-xl">
                                                {React.cloneElement(integration.logo, { className: 'w-6 h-6 text-white-900' })}
                                            </div>
                                            <div>
                                                <h3 className="text-white-900 text-lg font-medium">{integration.name}</h3>
                                                <p className="text-sm text-gray-400">
                                                    Not configured
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="ghost"
                                                            className="text-sm text-primary-500 hover:text-white-900 transition-all hover:bg-main-two">Configure</Button>
                                                </DialogTrigger>
                                                <DialogContent
                                                    className="bg-dark-300 border-transparent text-white gap-y-5">
                                                    <DialogHeader>
                                                        <DialogTitle
                                                            className={'text-white-900'}>Configure {integration.name}</DialogTitle>
                                                    </DialogHeader>
                                                    <Input
                                                        placeholder="Enter integration link"
                                                        className="bg-dark-200 border-none text-gray-400"
                                                    />
                                                    <Button
                                                        className="rounded-lg bg-main-two hover:rounded-3xl transition-all hover:bg-main-two">Save</Button>
                                                </DialogContent>
                                            </Dialog>
                                            <Switch />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SettingsLayout>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TestSettings;