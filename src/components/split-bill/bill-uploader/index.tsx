'use client';

import React, { useState } from 'react';
import { useBill } from '@/providers/bill-provider';
import { Button } from '@/components/base/buttons/button';
import { FileUpload } from '@/components/application/file-upload/file-upload-base';
import { File02 } from '@untitledui/icons';
import { FeaturedIcon } from '@/components/foundations/featured-icon/featured-icon';

export const BillUploader = () => {
    const { setBillData } = useBill();
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDrop = (files: FileList) => {
        if (files.length > 0) {
            setFile(files[0]);
            setError(null);
        }
    };

    const handleProcessBill = async () => {
        if (!file) return;
        setIsUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/ocr', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Failed to process bill');

            const data = await response.json();
            setBillData(data);
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="bg-primary p-6 md:p-8 rounded-3xl border border-secondary shadow-sm transition-all hover:shadow-md space-y-6">
            <div className="flex items-start gap-4">
                <FeaturedIcon color="brand" theme="modern" size="md" icon={File02} />
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary">Upload Receipt</h3>
                    <p className="text-sm text-tertiary">Take a photo or upload a PDF of your bill.</p>
                </div>
            </div>

            <FileUpload.Root>
                {!file && (
                    <FileUpload.DropZone
                        onDropFiles={handleDrop}
                        accept="image/jpeg,image/png,application/pdf"
                        allowsMultiple={false}
                        hint="PNG, JPG or PDF up to 10MB"
                        className="border-dashed bg-bg-secondary hover:bg-bg-primary transition-colors py-10"
                    />
                )}

                {file && (
                    <FileUpload.List>
                        <FileUpload.ListItemProgressBar
                            name={file.name}
                            size={file.size}
                            progress={isUploading ? 75 : 100}
                            onDelete={() => setFile(null)}
                            type="image"
                            className="bg-bg-secondary border border-secondary rounded-2xl"
                        />
                    </FileUpload.List>
                )}
            </FileUpload.Root>

            {error && <p className="text-sm text-error-primary font-medium">{error}</p>}

            {file && (
                <Button
                    color="primary"
                    size="md"
                    className="w-full shadow-skeumorphic"
                    onClick={handleProcessBill}
                    isLoading={isUploading}
                    isDisabled={isUploading}
                >
                    Scan with Smart AI
                </Button>
            )}
        </div>
    );
};
