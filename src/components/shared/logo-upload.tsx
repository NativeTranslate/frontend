'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Upload, X } from 'lucide-react';

export default function LogoUpload() {
    const [logo, setLogo] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file && file.type.startsWith('image/')) {
            if (file.size <= 5 * 1024 * 1024) {
                setLogo(file);
                setPreview(URL.createObjectURL(file));
                setError(null);
            } else {
                setError('File size should be less than 5MB');
            }
        } else {
            setError('Please upload a valid image file');
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false,
    });

    const removeLogo = () => {
        setLogo(null);
        setPreview(null);
        setError(null);
    };

    return (
        <Card className="w-full max-w-md mx-auto bg-dark-200 border-transparent">
            <CardContent className="p-6">
                <div className="space-y-4">
                    <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                            isDragActive
                                ? 'border-primary-500 bg-primary-500/10'
                                : 'border-gray-400 hover:border-primary-500'
                        }`}
                    >
                        <Input
                            {...getInputProps()}
                            id="logo"
                            className="sr-only"
                        />
                        {preview ? (
                            <div className="relative inline-block">
                                <img
                                    src={preview}
                                    alt="Logo preview"
                                    className="max-w-full max-h-48 rounded"
                                />
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    className="absolute bg-dark-300 bg-opacity-20 backdrop-blur-lg hover:bg-opacity-50 hover:bg-dark-300 top-0 right-0 rounded-full -mt-2 -mr-2"
                                    onClick={e => {
                                        e.stopPropagation();
                                        removeLogo();
                                    }}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <Upload className="mx-auto h-12 w-12 text-main-two" />
                                <p className="text-sm text-white-900">
                                    Drag and drop your logo here, or click to
                                    select a file
                                </p>
                                <p className="text-xs text-gray-400">
                                    (Supported formats: PNG, JPG, GIF, up to
                                    5MB)
                                </p>
                            </div>
                        )}
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    {logo && (
                        <p className="text-sm text-gray-400">
                            File: {logo.name} (
                            {(logo.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
