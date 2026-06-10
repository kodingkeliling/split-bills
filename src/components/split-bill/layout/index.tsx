'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ClockFastForward, Trash01, XClose } from '@untitledui/icons';
import { Button } from '@/components/base/buttons/button';
import { useHistory } from '@/providers/history-provider';
import { useBill } from '@/providers/bill-provider';

interface Props {
    children: React.ReactNode;
    step: number;
    title?: string;
}

import Image from 'next/image';

export const SplitBillLayout = ({ children, step }: Props) => {
    const router = useRouter();
    const { history, deleteFromHistory } = useHistory();
    const { loadFromHistory } = useBill();
    const [showHistory, setShowHistory] = useState(false);

    const handleHistoryClick = (item: any) => {
        loadFromHistory(item.billData, item.people);
        setShowHistory(false);
        router.push('/split-bill/result');
    };

    const totalSteps = 3;

    return (
        <div className="min-h-screen bg-bg-secondary flex justify-center selection:bg-brand-100 selection:text-brand-700">
            {/* Mobile-style container */}
            <div className="w-full max-w-[440px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-hidden">

                {/* Header - Fixed Height */}
                <header className="px-6 py-4 flex items-center justify-between border-b border-secondary/50 bg-white z-[60]">
                    <div className="w-10">
                        {step > 1 ? (
                            <Button
                                color="tertiary"
                                size="sm"
                                onClick={() => router.back()}
                                className="p-1 rounded-full hover:bg-bg-secondary"
                            >
                                <ArrowLeft className="size-5" />
                            </Button>
                        ) : (
                            <div className="flex items-center">
                                <Image
                                    src="/logo-dark.webp"
                                    alt="Koding Keliling Logo"
                                    width={32}
                                    height={32}
                                    className="rounded-lg object-contain"
                                />
                            </div>
                        )}
                    </div>

                    <div className="text-center">
                        <span className="text-sm font-bold text-brand-secondary">Step {step} of {totalSteps}</span>
                    </div>

                    <div className="w-10 flex justify-end">
                        <Button
                            color="tertiary"
                            size="sm"
                            onClick={() => setShowHistory(true)}
                            className="p-1 rounded-full hover:bg-bg-secondary"
                        >
                            <ClockFastForward className="size-5" />
                        </Button>
                    </div>
                </header>

                {/* Content Area - Scrollable */}
                <main className="flex-1 overflow-y-auto px-8 py-10 flex flex-col">
                    {children}
                </main>

                {/* History Sidebar Overlay */}
                {showHistory && (
                    <div
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm z-[100] flex justify-end"
                        onClick={() => setShowHistory(false)}
                    >
                        <div
                            className="w-4/5 h-full bg-white shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-xl font-black text-gray-900">History</h3>
                                <Button color="tertiary" size="sm" onClick={() => setShowHistory(false)}>
                                    <XClose className="size-5" />
                                </Button>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-4">
                                {history.length === 0 ? (
                                    <div className="text-center py-20 text-tertiary">
                                        <p className="font-bold">No history yet</p>
                                        <p className="text-xs">Your past bills will appear here.</p>
                                    </div>
                                ) : (
                                    history.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => handleHistoryClick(item)}
                                            className="p-4 rounded-2xl bg-bg-secondary border border-secondary group relative cursor-pointer hover:border-brand-primary/50 transition-all active:scale-[0.98]"
                                        >
                                            <div className="flex justify-between mb-1">
                                                <span className="text-xs font-black text-brand-secondary">
                                                    {new Date(item.date).toLocaleDateString()}
                                                </span>
                                                <Button
                                                    color="tertiary"
                                                    size="sm"
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                    onClick={(e: React.MouseEvent) => {
                                                        e.stopPropagation();
                                                        deleteFromHistory(item.id);
                                                    }}
                                                >
                                                    <Trash01 className="size-3 text-error-primary" />
                                                </Button>
                                            </div>
                                            <p className="text-md font-bold text-gray-900">Rp {item.billData.total.toLocaleString()}</p>
                                            <p className="text-[10px] font-medium text-tertiary truncate">
                                                {item.people.map(p => p.name).join(', ')}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
