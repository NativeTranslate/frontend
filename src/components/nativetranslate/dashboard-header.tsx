import React from 'react';
import { Cloud } from 'lucide-react';

interface DashboardHeaderProps {
    children?: React.ReactNode;
    title: string;
    description: string;
    icon?: React.ElementType; // Custom icon can be passed
}

export default function DashboardHeader({
    children,
    title,
    description,
    icon: Icon = Cloud, // Default to Cloud if no icon is provided
}: DashboardHeaderProps) {
    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <div className="container mx-auto px-8 pt-16 pb-8 relative z-10">
                <div className="bg-light-one dark:bg-dark-one rounded-lg shadow-xl p-6 space-y-5 backdrop-blur-lg">
                    <div className="flex items-center">
                        <div className="p-3 rounded-md bg-blue-100 dark:bg-primary/30 drama-3 drama-blue-100 dark:drama-primary">
                            {/* Dynamically render the passed icon */}
                            <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 drama-3 drama-blue-600 dark:drama-blue-400" />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold text-gray-700 dark:text-primary">
                                {title}
                            </h4>
                            <p className="mt-2 text-gray-600 dark:text-light-one">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="bg-light-two dark:bg-dark-two rounded-md p-4">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
