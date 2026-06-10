'use client';

import React from 'react';
import { SplitBillLayout } from '@/components/split-bill/layout';
import { ItemAssigner } from '@/components/split-bill/item-assigner';
import { useRouter } from 'next/navigation';
import { HelpCircle, FileCheck02 } from '@untitledui/icons';
import { Button } from '@/components/base/buttons/button';
import { useBill } from '@/providers/bill-provider';

export default function AssignPage() {
    const router = useRouter();
    const { billData } = useBill();

    if (!billData) return null;

    return (
        <SplitBillLayout step={3}>
            <div className="flex-1 flex flex-col h-full">
                <div className="space-y-4 mb-10">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Pilih Siapa yang Makan</h2>
                    <p className="text-md text-tertiary font-medium leading-relaxed">
                        Klik inisial nama untuk membagi item menu.
                    </p>
                </div>

                <div className="flex-1">
                    <ItemAssigner />
                </div>

                {/* Floating Summary Bar */}
                <div className="fixed bottom-0 left-0 right-0 flex justify-center p-6 z-30 pointer-events-none">
                    <div className="w-full max-w-[392px] bg-white rounded-[40px] shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.15)] border border-secondary p-8 space-y-6 pointer-events-auto">
                        <div className="space-y-3 font-bold text-sm">
                            <div className="flex justify-between text-tertiary">
                                <span>Subtotal</span>
                                <span className="text-gray-900">Rp {billData.subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center text-tertiary gap-2">
                                <div className="flex items-center gap-1 min-w-0">
                                    <span className="truncate">Pajak & Layanan</span>
                                    <HelpCircle className="size-3.5 shrink-0" />
                                    <span className="bg-brand-50 text-brand-secondary text-[9px] px-1.5 py-0.5 rounded-full border border-brand-100 uppercase tracking-tighter whitespace-nowrap shrink-0">
                                        Dibagi Rata
                                    </span>
                                </div>
                                <span className="text-gray-900 shrink-0">Rp {(billData.tax + billData.serviceCharge).toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end pt-4 border-t border-secondary/50">
                            <span className="text-lg font-black text-gray-900">Total</span>
                            <span className="text-3xl font-black text-brand-secondary tracking-tighter">
                                Rp {billData.total.toLocaleString()}
                            </span>
                        </div>

                        <Button
                            color="primary"
                            size="lg"
                            className="w-full py-8 text-xl font-black rounded-3xl shadow-xl shadow-brand-100"
                            onClick={() => router.push('/split-bill/result')}
                            iconTrailing={FileCheck02}
                        >
                            Selesaikan Tagihan
                        </Button>
                    </div>
                </div>
            </div>
        </SplitBillLayout>
    );
}
