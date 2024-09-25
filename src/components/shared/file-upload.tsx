'use client';

import React, { useCallback, useState } from 'react';
import { AlertCircle, File, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert.tsx';

interface FileUploadProps {
    maxFiles?: number;
}

export default function FileUpload({ maxFiles = Infinity }: FileUploadProps) {
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            setError(null);
            if (files.length + acceptedFiles.length > maxFiles) {
                setError(
                    `You can only upload a maximum of ${maxFiles} file${maxFiles === 1 ? '' : 's'}.`,
                );
                return;
            }
            setFiles(prev => [...prev, ...acceptedFiles]);
        },
        [files.length, maxFiles],
    );

    const removeFile = (name: string) => {
        setFiles(files => files.filter(file => file.name !== name));
        setError(null);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const droppedFiles = Array.from(e.dataTransfer.files);
        onDrop(droppedFiles);
    };

    return (
        <div className="w-full max-w-md mx-auto rounded-lg shadow-md">
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="bg-dark-200 border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer transition-colors duration-300 ease-in-out hover:border-primary-500"
            >
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                    Drag and drop your files here, or click to select files
                    {maxFiles < Infinity && (
                        <span className="block mt-1 text-xs text-gray-400">
                            (Max {maxFiles} file{maxFiles === 1 ? '' : 's'})
                        </span>
                    )}
                </p>
                <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    multiple={maxFiles > 1}
                    onChange={e => onDrop(Array.from(e.target.files || []))}
                />
                <Button
                    onClick={() =>
                        document.getElementById('file-upload')?.click()
                    }
                    className="mt-4 bg-transparent hover:bg-transparent text-primary-500 hover:text-primary-500 border-primary-500 hover:border-primary-500"
                    variant="outline"
                >
                    Select Files
                </Button>
            </div>
            {error && (
                <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            {files.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {files.map(file => (
                        <li
                            key={file.name}
                            className="flex items-center justify-between p-2 bg-dark-200 rounded-md"
                        >
                            <div className="flex items-center">
                                <File className="h-5 w-5 text-primary-500 mr-2" />
                                <span className="text-sm text-gray-400 truncate max-w-[200px]">
                                    {file.name}
                                </span>
                            </div>
                            <button
                                onClick={() => removeFile(file.name)}
                                className="text-red-500 hover:text-red-700 focus:outline-none"
                                aria-label={`Remove ${file.name}`}
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
