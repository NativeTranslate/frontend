import DashboardLayout from '@/components/layout/dashboard-layout.tsx';
import OrganizationCard from '@/components/shared/organization-card.tsx';
import DashboardHeader from '@/components/shared/dashboard-header.tsx';
import { fakeOrganizations } from '@/lib/fake-data.ts';
import { Button } from '@/components/ui/button.tsx';
import { PlusIcon } from 'lucide-react';

const Organizations = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Organizations" />
                <div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-y-auto my-10 pb-4 md:pb-0">
                    <div className="flex flex-col mx-4 sm:mx-12 my-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <h1 className="text-2xl text-white-900 font-semibold">
                                Your organizations
                            </h1>
                            <div className="flex-grow" />
                            <Button className="mt-4 sm:mt-0 bg-main-two text-white-900 hover:bg-main-one transition-colors gap-1">
                                <PlusIcon />
                                Create new organization
                            </Button>
                        </div>
                        <p className="text-wrap max-w-prose text-gray-400 mt-4">
                            Explore the organizations you are a part of and see
                            the impact they're making.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center mx-4 sm:mx-12">
                        {fakeOrganizations.map((organization, index) => (
                            <OrganizationCard
                                organization={organization}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Organizations;
