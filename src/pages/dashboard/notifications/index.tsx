import DashboardLayout from '@/pages/dashboard/layout.tsx';
import DashboardHeader from '@/components/nativetranslate/dashboard-header.tsx';
import { BellIcon } from 'lucide-react';

export default function Index() {
    return (
        <DashboardLayout>
            <DashboardHeader
                title={'Notifications'}
                description={'All notifications will be shown here.'}
                icon={BellIcon}
            >
                test
            </DashboardHeader>
        </DashboardLayout>
    );
}
