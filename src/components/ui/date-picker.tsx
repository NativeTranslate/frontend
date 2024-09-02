import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar.tsx';
import React from 'react';

export function CustomDatePicker() {
    const [date, setDate] = React.useState<Date>();

    const currentYear = new Date().getFullYear();

    return (
        <Popover>
            <PopoverTrigger className={'flex'} asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-full h-full hover:bg-dark-300 hover:text-gray-400 bg-dark-300 rounded-3xl border-transparent text-gray-400 justify-start text-left font-normal',
                        !date && 'text-muted-foreground',
                    )}
                >
                    {date ? (
                        format(date, 'PPP')
                    ) : (
                        <span className={'text-gray-400'}>Pick a date</span>
                    )}

                    <div className={'flex-grow'} />
                    <CalendarIcon size={24} className="text-gray-400" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align="start"
                className=" w-auto p-0 bg-transparent rounded-3xl border-dark-400"
            >
                <Calendar
                    mode="single"
                    className={'w-full bg-dark-300 text-gray-400 rounded-3xl'}
                    captionLayout="dropdown-buttons"
                    selected={date}
                    onSelect={setDate}
                    fromYear={1900}
                    toYear={currentYear}
                />
            </PopoverContent>
        </Popover>
    );
}
