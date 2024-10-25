'use client';

import {
    AudioWaveform,
    BookAIcon,
    ChevronsUpDown,
    Command,
    GalleryVerticalEnd,
    Plus,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { Button } from '@/components/nativetranslate/button.tsx';
import { Input } from '@/components/nativetranslate/input.tsx';
import { Textarea } from '@/components/nativetranslate/textarea.tsx';
import IconPicker from './icon-picker';

interface Props {
    className?: string;
}

const teams = [
    {
        name: 'Acme Inc',
        logo: GalleryVerticalEnd,
        plan: 'Enterprise',
    },
    {
        name: 'Acme Corp.',
        logo: AudioWaveform,
        plan: 'Startup',
    },
    {
        name: 'Evil Corp.',
        logo: Command,
        plan: 'Free',
    },
];

export default function OrganisationChooser({ className = '' }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={'w-full'} asChild>
                <button
                    className={`w-full flex flex-row items-center justify-start text-left font-normal ${className} focus:ring-0 focus:ring-offset-transparent focus:outline-none bg-light-two dark:bg-dark-two p-2 border-2 rounded-md`}
                >
                    <div className="flex items-center gap-2 w-full">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <GalleryVerticalEnd className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-semibold text-dark-input dark:text-light-input">
                                Acme Inc
                            </span>
                            <span className="text-xs font-regular text-gray-600 dark:text-gray-400">
                                Enterprise
                            </span>
                        </div>
                    </div>
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50 text-dark-input dark:text-light-input" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side="bottom"
                sideOffset={4}
            >
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                    Teams
                </DropdownMenuLabel>
                {teams.map((team, index) => (
                    <DropdownMenuItem key={team.name} className="gap-2 p-2">
                        <div className="flex size-6 items-center justify-center rounded-sm border">
                            <team.logo className="size-4 shrink-0" />
                        </div>
                        {team.name}
                        <DropdownMenuShortcut>
                            ⌘{index + 1}
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <Dialog>
                    <DialogTrigger className={'flex items-center gap-2 w-full'}>
                        <DropdownMenuItem
                            className="gap-2 p-2 w-full"
                            onSelect={event => event.preventDefault()}
                        >
                            <div className="flex size-6 items-center justify-center rounded-md border bg-light-one dark:bg-dark-one">
                                <Plus className="size-4" />
                            </div>
                            <div className="font-medium text-dark-input dark:text-light-input">
                                Add team
                            </div>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add a new team</DialogTitle>
                            <DialogDescription>
                                Create a new team to collaborate with your
                                colleagues, and translate your projects.
                            </DialogDescription>
                        </DialogHeader>

                        <div className={'flex flex-col gap-4'}>
                            <div className={'flex flex-col gap-1'}>
                                <label>Team name</label>
                                <Input
                                    label={'Acme Inc'}
                                    icon={GalleryVerticalEnd}
                                />
                            </div>

                            <div className={'flex flex-col gap-1'}>
                                <label>Team description</label>
                                <Textarea
                                    label={'We are doing ...'}
                                    icon={BookAIcon}
                                />
                            </div>

                            <div className={'flex flex-col gap-1'}>
                                <label>Select icon</label>
                                <IconPicker />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button
                                variant={'default_raised'}
                                onClick={() => {
                                    console.log('Clicked');
                                }}
                            >
                                Create team
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
