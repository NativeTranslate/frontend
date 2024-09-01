'use client';

import React from 'react';
import SettingsLayout from '@/components/layout/settings-layout';
import DashboardLayout from '@/components/layout/dashboard-layout';
import DashboardHeader from '@/components/shared/dashboard-header';
import { availableIntegrations } from '@/lib/settings';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export default function TestSettings() {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Settings - Accounts & Settings" />
                <div className="flex-grow w-full rounded-3xl my-4 sm:my-10 bg-dark-300 overflow-y-auto">
                    <SettingsLayout>
                        <div className="bg-dark-200 p-4 sm:p-6 rounded-3xl">
                            <h2 className="text-xl sm:text-2xl font-semibold text-white-900 mb-2">
                                Accounts
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                                Here you can manage and setup your integration
                                settings
                            </p>

                            <div className="flex flex-col gap-3 sm:gap-4">
                                {availableIntegrations.map(integration => (
                                    <div
                                        key={integration.name}
                                        className="flex flex-col sm:flex-row sm:items-center justify-between bg-dark-300 p-3 sm:p-4 rounded-2xl"
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                                            <div className="bg-dark-200 p-2 sm:p-3 rounded-xl">
                                                {React.cloneElement(
                                                    integration.logo,
                                                    {
                                                        className:
                                                            'w-5 h-5 sm:w-6 sm:h-6 text-white-900',
                                                    },
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-white-900 text-base sm:text-lg font-medium">
                                                    {integration.name}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-400">
                                                    Not configured
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        className="text-xs sm:text-sm text-primary-500 hover:text-white-900 transition-all hover:bg-main-two"
                                                    >
                                                        Configure
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="bg-dark-300 border-transparent text-white gap-y-4 sm:gap-y-5 p-4 sm:p-6">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-white-900 text-lg sm:text-xl">
                                                            Configure{' '}
                                                            {integration.name}
                                                        </DialogTitle>
                                                    </DialogHeader>
                                                    <Input
                                                        placeholder="Enter integration link"
                                                        className="bg-dark-200 border-none text-gray-400 text-sm sm:text-base"
                                                    />
                                                    <Button className="rounded-lg bg-main-two hover:rounded-3xl transition-all hover:bg-main-two text-sm sm:text-base">
                                                        Save
                                                    </Button>
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
}
