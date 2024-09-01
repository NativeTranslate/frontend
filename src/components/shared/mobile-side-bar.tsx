import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';
import { LogOut, Menu as MenuIcon, X } from 'lucide-react';
import { bottomLinks, topLinks } from '@/lib/sidebar.tsx';

const MobileSideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Dialog open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <DialogTrigger>
                <Button
                    className="absolute top-4 right-4 p-2 bg-transparent"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon className="w-6 h-6 text-primary-500" />
                </Button>
            </DialogTrigger>
            <DialogContent className="fixed right-0 h-full w-full shadow-x text-white-900 border-none p-5 bg-transparent rounded-3xl">
                <div className="flex h-full flex-col bg-dark-300 rounded-3xl">
                    <div className="flex items-center justify-between border-b  border-dark-400 px-4 py-2">
                        <DialogHeader>
                            <DialogTitle className="text-lg font-semibold">
                                Menu
                            </DialogTitle>
                        </DialogHeader>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-y-auto py-4">
                        <nav className="space-y-2 px-4">
                            {topLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="transition-all flex items-center rounded-md px-3 py-2 text-sm font-medium text-primary-500 hover:bg-main-two hover:text-accent-foreground"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="my-4 border-t border-dark-400" />
                        <nav className="space-y-2 px-4">
                            {bottomLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="transition-all flex items-center rounded-md px-3 py-2 text-sm font-medium text-primary-500 hover:bg-main-two hover:text-accent-foreground"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="border-t p-4  border-dark-400">
                        <Button
                            variant="outline"
                            className="w-full justify-center bg-main-two border-none"
                            onClick={() => {
                                // Implement logout logic here
                                setIsSidebarOpen(false);
                            }}
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MobileSideBar;
