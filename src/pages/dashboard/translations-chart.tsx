import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
    { date: '22.08.2024', translations: 186 },
    { date: '23.08.2024', translations: 305 },
    { date: '24.08.2024', translations: 237 },
    { date: '25.08.2024', translations: 73 },
    { date: '26.08.2024', translations: 209 },
    { date: '27.08.2024', translations: 214 },
];
const chartConfig = {
    translations: {
        label: 'Translations',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

export function TranslationsChart() {
    return (
        <div>
            <ChartContainer config={chartConfig} className="max-h-52 w-full">
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
                        type="natural"
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
