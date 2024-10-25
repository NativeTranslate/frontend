'use client';

import * as React from 'react';
import { Button } from '@/components/nativetranslate/button';
import { Input } from '@/components/nativetranslate/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { icons } from 'lucide-react';

type IconName = keyof typeof icons;

export default function Component() {
    const [selectedIcon, setSelectedIcon] = React.useState<IconName | null>(
        null,
    );
    const [searchQuery, setSearchQuery] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const filteredIcons = React.useMemo(() => {
        return Object.keys(icons).filter(iconName =>
            iconName.toLowerCase().includes(searchQuery.toLowerCase()),
        ) as IconName[];
    }, [searchQuery]);

    const handleSelectIcon = (iconName: IconName) => {
        setSelectedIcon(iconName);
        setOpen(false);
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="default_raised"
                        icon={React.createElement(
                            icons[selectedIcon ?? 'Users'],
                        )}
                        className="w-full bg-light-input dark:bg-dark-input border-2 border-input dark:border-dark-border"
                    >
                        {selectedIcon ?? 'Users'}
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Select Icon</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="relative">
                            <Input
                                label="Search.."
                                icon={icons.Search}
                                value={searchQuery}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <ScrollArea className="h-[300px] rounded-md border p-4">
                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6">
                                {filteredIcons.map(iconName => {
                                    const IconComponent = icons[iconName];
                                    return (
                                        <Button
                                            key={iconName}
                                            variant="ghost_outline"
                                            className={cn(
                                                'h-9 w-9 p-0',
                                                selectedIcon === iconName &&
                                                    'border-primary',
                                            )}
                                            onClick={() =>
                                                handleSelectIcon(iconName)
                                            }
                                        >
                                            <IconComponent className="h-6 w-6" />
                                            <span className="sr-only">
                                                {iconName}
                                            </span>
                                        </Button>
                                    );
                                })}
                            </div>
                        </ScrollArea>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
