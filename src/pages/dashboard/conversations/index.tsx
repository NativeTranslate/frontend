import DashboardLayout from '@/components/layout/dashboard-layout';
import DashboardHeader from '@/components/shared/dashboard-header';

// const mockConversations = [
//     {
//         id: '1',
//         name: 'testuser2',
//         lastMessage: 'York hi',
//         timestamp: 'Yesterday',
//     },
// ];
//
// const mockMessages = [
//     {
//         id: '1',
//         sender: 'Fedox',
//         content: 'Fedox created the conversation and added 1 user',
//         timestamp: '04:03',
//     },
//     { id: '2', sender: 'Fedox', content: 'hi', timestamp: '04:03' },
// ];

export default function ConversationsPage() {
    // const [conversationsExists, setConversationsExists] = useState(true);
    // const [selectedUsers, setSelectedUsers] = useState([]);
    // const [selectedConversation, setSelectedConversation] = useState(null);
    // const [newMessage, setNewMessage] = useState('');
    //
    // const currentConversation = mockConversations.find(
    //     conv => conv.id === selectedConversation,
    // );

    // const handleStartConversation = () => {
    //     if (selectedUsers.length > 0) {
    //         setConversationsExists(true);
    //     }
    // };
    //
    // const handleSendMessage = () => {
    //     if (newMessage.trim()) {
    //         console.log('Message sent:', newMessage);
    //         setNewMessage('');
    //     }
    // };

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <DashboardHeader title="Conversations" />
                {/*<div className="flex-grow w-full bg-dark-300 rounded-3xl overflow-hidden my-10">*/}
                {/*    {conversationsExists ? (*/}
                {/*        <div className="flex justify-center items-center w-full p-6 h-full">*/}
                {/*            <div className="flex h-full bg-dark-300 text-white-900 rounded-3xl overflow-hidden w-full max-w-6xl">*/}
                {/*                /!* Left sidebar *!/*/}
                {/*                <ConversationsList*/}
                {/*                    conversations={mockConversations}*/}
                {/*                    selectedConversation={selectedConversation}*/}
                {/*                    onSelectConversation={*/}
                {/*                        setSelectedConversation*/}
                {/*                    }*/}
                {/*                    className="flex-shrink-0 w-1/3 h-full"*/}
                {/*                />*/}

                {/*                /!* Right chat area *!/*/}
                {/*                <ChatWindow*/}
                {/*                    conversation={currentConversation}*/}
                {/*                    messages={mockMessages}*/}
                {/*                    newMessage={newMessage}*/}
                {/*                    onSendMessage={handleSendMessage}*/}
                {/*                    onNewMessageChange={setNewMessage}*/}
                {/*                    className="flex-grow w-2/3 h-full"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ) : (*/}
                {/*        <div className="flex flex-col h-full items-center w-full text-center p-6 mt-12">*/}
                {/*            <div className="max-w-md w-full space-y-4">*/}
                {/*                <MessageSquareIcon className="mx-auto h-16 w-16 text-gray-400" />*/}
                {/*                <h1 className="font-semibold text-white-900 text-3xl">*/}
                {/*                    No Conversations Yet*/}
                {/*                </h1>*/}
                {/*                <p className="text-gray-400">*/}
                {/*                    Start your first conversation by selecting*/}
                {/*                    users below.*/}
                {/*                </p>*/}
                {/*                <div className="mt-4">*/}
                {/*                    <SearchSelect*/}
                {/*                        onSelectedUsersChange={setSelectedUsers}*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*                <div className={'text-left space-y-2'}>*/}
                {/*                    <InputLabel text={'Conversation Name'} />*/}
                {/*                    <CustomInput*/}
                {/*                        className={'bg-dark-200'}*/}
                {/*                        id={'conversation_name'}*/}
                {/*                        placeholder={'Talk about..'}*/}
                {/*                        icon={<TextIcon />}*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*                <Button*/}
                {/*                    onClick={handleStartConversation}*/}
                {/*                    disabled={selectedUsers.length === 0}*/}
                {/*                    className="w-full mt-4 bg-main-two hover:bg-main-two/50"*/}
                {/*                >*/}
                {/*                    <UserPlusIcon className="mr-2 h-4 w-4" />*/}
                {/*                    Start Conversation*/}
                {/*                </Button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        </DashboardLayout>
    );
}
