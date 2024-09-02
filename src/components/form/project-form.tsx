'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import CustomInput from '@/components/shared/custom-input';
import { GlobeIcon, Loader2, LockIcon } from 'lucide-react';
import CustomTextarea from '@/components/shared/custom-text-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import LanguageSelector from '@/components/shared/language-selector';
import { Button } from '@/components/ui/button';
import ProjectAddressInput from '@/components/shared/project-address-input';
import { fakeLanguages } from '@/lib/data/fakeLanguages';

const projectTypes = [
    {
        id: 'public',
        name: 'Public',
        description: 'Visible to everyone. You can restrict access later.',
        icon: <GlobeIcon className="w-6 h-6 text-white-900" />,
    },
    {
        id: 'private',
        name: 'Private',
        description:
            'Visible only to you and the people you invite to the project.',
        icon: <LockIcon className="w-6 h-6 text-white-900" />,
    },
];

interface ProjectFormProps {
    initialValues?: {
        name: string;
        identifier: string;
        description: string;
        visibility: 'public' | 'private';
        sourceLanguage: string;
        targetLanguages: string[];
    };
    onSubmit: (
        values:
            | {
                  name: string;
                  identifier: string;
                  description: string;
                  visibility: 'public' | 'private';
                  sourceLanguage: string;
                  targetLanguages: string[];
              }
            | {
                  identifier: string;
                  targetLanguages: any[];
                  visibility: string;
                  name: string;
                  description: string;
                  sourceLanguage: string;
              },
    ) => Promise<void>;
    submitButtonText: string;
}

export default function ProjectForm({
    initialValues,
    onSubmit,
    submitButtonText,
}: ProjectFormProps) {
    const [formValues, setFormValues] = useState(
        initialValues || {
            name: '',
            identifier: '',
            description: '',
            visibility: 'public',
            sourceLanguage: 'English',
            targetLanguages: [],
        },
    );
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (field: string, value: string | string[]) => {
        setFormValues(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await onSubmit(formValues);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:gap-8 mt-12"
        >
            <div className="space-y-2">
                <Label htmlFor="project-name" className="text-gray-400">
                    Project name
                </Label>
                <CustomInput
                    className="bg-dark-200"
                    id="project-name"
                    placeholder="Enter project name"
                    onChange={e => handleChange('name', e.target.value)}
                    value={formValues.name}
                    icon={undefined}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="project-identifier" className="text-gray-400">
                    Project identifier
                </Label>
                <ProjectAddressInput
                    baseUrl="https://nativetranslate.ovh/dashboard/project/"
                    onChange={value => handleChange('identifier', value)}
                    value={formValues.identifier}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="project-description" className="text-gray-400">
                    Project description
                </Label>
                <CustomTextarea
                    className="bg-dark-200"
                    placeholder="Enter project description"
                    onChange={e => handleChange('description', e.target.value)}
                    value={formValues.description}
                />
            </div>
            <div className="space-y-2">
                <Label className="text-gray-400">Project visibility</Label>
                <RadioGroup
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent"
                    value={formValues.visibility}
                    onValueChange={value => handleChange('visibility', value)}
                >
                    {projectTypes.map(type => (
                        <div key={type.id}>
                            <RadioGroupItem
                                value={type.id}
                                id={type.id}
                                className="peer sr-only"
                            />
                            <Label
                                htmlFor={type.id}
                                className="flex flex-col items-center justify-between rounded-md border-2 border-dark-300 bg-dark-200 p-4 hover:bg-dark-200/50 hover:text-accent-foreground peer-data-[state=checked]:border-primary-500 [&:has([data-state=checked])]:border-primary-500 transition-all"
                            >
                                <Card className="w-full bg-dark-300 border-transparent shadow-lg">
                                    <CardContent className="flex items-center space-x-4 p-4">
                                        <div className="flex-shrink-0 text-foreground">
                                            {type.icon}
                                        </div>
                                        <div>
                                            <div className="text-base font-semibold text-white-900">
                                                {type.name}
                                            </div>
                                            <p className="text-sm text-gray-400">
                                                {type.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div className="space-y-2">
                <Label htmlFor="source-language" className="text-gray-400">
                    Source language
                </Label>
                <Select
                    value={formValues.sourceLanguage}
                    onValueChange={value =>
                        handleChange('sourceLanguage', value)
                    }
                >
                    <SelectTrigger
                        id="source-language"
                        className="w-full bg-dark-200 border-transparent text-gray-400"
                    >
                        <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                        {fakeLanguages.map(language => (
                            <SelectItem
                                key={language}
                                value={language}
                                className="text-gray-400"
                            >
                                {language}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="target-languages" className="text-gray-400">
                    Target languages
                </Label>
                <LanguageSelector
                    value={formValues.targetLanguages}
                    onChange={value => handleChange('targetLanguages', value)}
                />
            </div>
            <div className="space-y-2 flex justify-end">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-main-two hover:bg-main-two/50 text-white-900"
                >
                    {isSubmitting ? 'Submitting...' : submitButtonText}
                    {isSubmitting && (
                        <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                    )}
                </Button>
            </div>
        </form>
    );
}
