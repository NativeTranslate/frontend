import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card.tsx';
import { Switch } from '@/components/ui/switch.tsx';
import { CardConfig } from '@/lib/types';
import { NativeTranslate } from '@/lib/core/nativetranslate.ts';
import { toast } from '@/components/ui/use-toast.ts';

interface CardSettingsProps {
    cardConfig: CardConfig;
    settings: any;
}

const CardSettingsComponent: React.FC<CardSettingsProps> = ({
    cardConfig,
    settings,
}) => {
    const toggleSwitch = (value: any, key: string) => {
        console.log('Switch toggled:', key);

        console.log('Option: ', key);
        console.log('Value: ', value);

        const api = NativeTranslate.getAPI();

        api.updateSettings(key, value).then(() => {
            toast({
                title: 'Settings updated',
                description: 'Your settings have been updated successfully.',
            });
        });
    };

    const isSwitchChecked = (key: string) => {
        if (!settings) {
            return false;
        }

        settings.forEach((setting: any) => {
            if (setting.setting === key) {
                return setting.value === 'true';
            }
        });

        return false;
    };

    return (
        <Card className="bg-dark-200 shadow-lg border-transparent text-gray-100">
            <CardHeader>
                <CardTitle>{cardConfig.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {cardConfig.switches.map((switchConfig, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between "
                    >
                        <span className="text-sm max-w-prose">
                            {switchConfig.label}
                        </span>
                        <Switch
                            id={switchConfig.id}
                            onCheckedChange={e =>
                                toggleSwitch(e, switchConfig.id)
                            }
                            checked={isSwitchChecked(switchConfig.id)}
                            // checked={switchConfig.default}
                        />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default CardSettingsComponent;
