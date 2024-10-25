'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type ActivityData = {
    date: string;
    count: number;
};

const generateMockData = (): ActivityData[] => {
    const data: ActivityData[] = [];
    const today = new Date();
    for (let i = 0; i < 365; i++) {
        const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
        data.push({
            date: date.toISOString().split('T')[0],
            count: Math.floor(Math.random() * 5),
        });
    }
    return data.reverse();
};

const getColor = (count: number): string => {
    const colors = [
        'bg-gray-100 dark:bg-gray-800',
        'bg-blue-100 dark:bg-blue-900',
        'bg-blue-300 dark:bg-blue-700',
        'bg-blue-500 dark:bg-blue-500',
        'bg-blue-700 dark:bg-blue-300',
    ];
    return colors[count] || colors[0];
};

export default function ActivityGraph() {
    const [activityData, setActivityData] = useState<ActivityData[]>([]);

    useEffect(() => {
        setActivityData(generateMockData());
    }, []);

    return (
        <Card className="bg-light-one dark:bg-dark-one shadow-lg">
            <CardHeader>
                <CardTitle>Activity over the last year</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-1">
                    {activityData.map((day, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 ${getColor(day.count)} rounded-sm`}
                            title={`${day.date}: ${day.count} contributions`}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
