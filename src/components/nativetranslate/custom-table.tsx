import { cn } from '@/lib/utils';

interface TableProps<T> {
    data: T[];
    columns: {
        header: string;
        accessor: keyof T;
    }[];
    className?: string;
}

export function CustomTable<T>({ data, columns, className }: TableProps<T>) {
    return (
        <div className={cn('overflow-x-auto', className)}>
            <table className="w-full border-separate border-spacing-0">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className={cn(
                                    'bg-primary/50 text-left p-2 font-openSans font-semibold text-sm text-black text-opacity-70 border-b-2 border-[#9E9E9E] dark:bg-dark-one dark:bg-opacity-90 dark:text-white dark:text-opacity-50',
                                    index === 0 && 'rounded-tl-lg',
                                    index === columns.length - 1 &&
                                        'rounded-tr-lg',
                                )}
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={
                                rowIndex % 2 === 0
                                    ? 'bg-white dark:bg-dark-two'
                                    : 'bg-primary bg-opacity-20 dark:bg-dark-one dark:bg-opacity-40'
                            }
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={cn(
                                        'p-2 text-sm',
                                        rowIndex === data.length - 1 &&
                                            colIndex === 0 &&
                                            'rounded-bl-lg',
                                        rowIndex === data.length - 1 &&
                                            colIndex === columns.length - 1 &&
                                            'rounded-br-lg',
                                    )}
                                >
                                    {String(row[column.accessor])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
