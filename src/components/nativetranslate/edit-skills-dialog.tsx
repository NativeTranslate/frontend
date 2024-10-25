import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { Button } from '@/components/nativetranslate/button.tsx';
import { languages } from '@/lib/data/constants.ts';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select.tsx';
import StarSelector from '@/components/nativetranslate/star-selector.tsx';
import { ScrollArea } from '@/components/ui/scroll-area.tsx';
import { Trash2 } from 'lucide-react';
import { CustomTable } from '@/components/nativetranslate/custom-table.tsx';
import React from 'react'; // Import the delete icon

const fakeSkills = [
    { name: 'German', level: 3 },
    { name: 'English', level: 4 },
    { name: 'Espanol', level: 2 },
    { name: 'France', level: 1 },
    { name: 'Italy', level: 5 },
];

interface Skill {
    name: string;
    level: number;
}

export default function EditSkillsDialog() {
    const [skills, setSkills] = React.useState(fakeSkills);

    const handleDelete = (name: string) => {
        setSkills(skills.filter(skill => skill.name !== name));
    };

    const columns: { header: string; accessor: keyof Skill | 'actions' }[] = [
        { header: 'Language', accessor: 'name' },
        { header: 'Skill Level', accessor: 'level' },
        { header: 'Actions', accessor: 'actions' },
    ];

    // Convert skills data for the table
    const tableData = skills.map(skill => ({
        name: skill.name,
        level: skill.level,
        actions: (
            <Button
                variant="ghost_outline"
                onClick={() => handleDelete(skill.name)}
            >
                <Trash2 />
            </Button>
        ),
    }));

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={'ghost_raised'}>Edit Skills</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit your language skills</DialogTitle>
                    <DialogDescription>
                        Here you can edit your language skills. You can add or
                        remove languages. All language skills are shown in your
                        profile.
                    </DialogDescription>
                </DialogHeader>

                <div
                    className={
                        'bg-light-one dark:bg-dark-one p-4 rounded-md flex flex-col'
                    }
                >
                    <div
                        className={
                            'flex flex-row gap-4 w-full items-center pb-2 border-b-2'
                        }
                    >
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose a language" />
                            </SelectTrigger>
                            <SelectContent>
                                {languages.map(language => (
                                    <SelectItem key={language} value={language}>
                                        {language}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <StarSelector />

                        <Button variant={'default_raised'}>Add</Button>
                    </div>

                    <div className={'flex flex-col gap-4'}>
                        <ScrollArea>
                            <CustomTable
                                data={tableData}
                                columns={columns}
                                className="mt-4"
                            />
                        </ScrollArea>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
