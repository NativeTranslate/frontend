import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Switch } from '@/components/ui/switch.tsx';
import { CardConfig } from '@/lib/types';

interface CardSettingsProps {
    cardConfig: CardConfig;
}

const CardSettingsComponent: React.FC<CardSettingsProps> = ({ cardConfig }) => {
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
                        <Switch defaultChecked={switchConfig.default} />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default CardSettingsComponent;
