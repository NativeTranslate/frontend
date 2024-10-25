import DashboardLayout from '@/pages/dashboard/layout.tsx';
import { CaseUpper, Info, PlusIcon } from 'lucide-react';
import DashboardHeader from '@/components/nativetranslate/dashboard-header.tsx';
import { Input } from '@/components/nativetranslate/input.tsx';
import { Textarea } from '@/components/nativetranslate/textarea.tsx';

export default function Index() {
    return (
        <DashboardLayout>
            <DashboardHeader
                title={'Create a new project'}
                icon={PlusIcon}
                description={
                    'Create a new project and start translating your content'
                }
            >
                <div className="flex flex-col gap-3 sm:gap-8">
                    <div className={'space-y-2'}>
                        <label
                            htmlFor="project-name"
                            className="block text-md font-medium text-gray-600 dark:text-gray-400 mb-1"
                        >
                            Project name
                        </label>
                        <Input
                            label={'My awesome project is called...'}
                            id="project-name"
                            onChange={() => {}}
                            iconDirection={'right'}
                            icon={CaseUpper}
                            value={''}
                        />
                    </div>
                    <div className={'space-y-2'}>
                        <label
                            htmlFor="project-desc"
                            className="block text-md font-medium text-gray-600 dark:text-gray-400 mb-1"
                        >
                            Project description
                        </label>
                        <Textarea
                            label={'This project is about...'}
                            id="project-desc"
                            onChange={() => {}}
                            iconDirection={'right'}
                            icon={Info}
                            value={''}
                        />
                    </div>
                </div>
            </DashboardHeader>
        </DashboardLayout>
    );
}
