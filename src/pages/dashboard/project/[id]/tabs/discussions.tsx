import { SetupTabs, TabHeader } from '@/components/shared/custom-tabs.tsx';

const Discussions = () => {
    return (
        <div>
            <SetupTabs
                className={'bg-dark-300 p-4 rounded-lg'}
                defaultTab="open"
            >
                <TabHeader id="open">Open</TabHeader>
                <TabHeader id="closed">Closed</TabHeader>
            </SetupTabs>
        </div>
    );
};
export default Discussions;
