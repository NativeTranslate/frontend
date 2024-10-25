'use client';

import {
    AudioWaveform,
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
                    className={`w-full flex flex-row items-center justify-start text-left font-normal ${className} focus:ring-0 focus:ring-offset-transparent focus:outline-none bg-light-two dark:bg-dark-two p-2 border rounded-md`}
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
                <DropdownMenuItem className="gap-2 p-2">
                    <div className="flex size-6 items-center justify-center rounded-md border bg-light-one dark:bg-dark-one">
                        <Plus className="size-4" />
                    </div>
                    <div className="font-medium text-dark-input dark:text-light-input">
                        Add team
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
