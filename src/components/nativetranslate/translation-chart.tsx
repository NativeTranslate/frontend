import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

function generateData() {
    const data = [];
    const startDate = new Date('2021-01-01');
    for (let i = 0; i < 30; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        data.push({
            date: date.toISOString().slice(0, 10),
            translations: Math.floor(Math.random() * 100),
        });
    }
    return data;
}

const chartData = generateData();

const chartConfig = {
    translations: {
        label: 'Translations',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

export function TranslationsChart() {
    return (
        <div>
            <ChartContainer
                config={chartConfig}
                className="max-h-52 w-full bg-light-input dark:bg-dark-two border rounded-lg p-4 shadow-lg"
            >
                <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                    />
                    <defs>
                        <linearGradient
                            id="fillTranslations"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="var(--color-translations)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-translations)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        dataKey="translations"
                        type="monotone"
                        fill="url(#fillTranslations)"
                        fillOpacity={0.4}
                        stroke="var(--color-translations)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    );
}
