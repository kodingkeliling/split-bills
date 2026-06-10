'use client';

import React from 'react';
import { SplitBillLayout } from '@/components/split-bill/layout';
import { SummaryTable } from '@/components/split-bill/summary-table';
import { FeaturedIcon } from '@/components/foundations/featured-icon/featured-icon';
import { Check, RefreshCw01 } from '@untitledui/icons';
import { Button } from '@/components/base/buttons/button';
import { useRouter } from 'next/navigation';
import { useBill } from '@/providers/bill-provider';
import { useHistory } from '@/providers/history-provider';
import { useEffect, useRef } from 'react';

export default function ResultPage() {
    const router = useRouter();
    const { billData, people } = useBill();
    const { addToHistory } = useHistory();
    const hasSaved = useRef(false);

    useEffect(() => {
        if (billData && people.length > 0 && !hasSaved.current) {
            addToHistory(billData, people);
            hasSaved.current = true;
        }
    }, [billData, people, addToHistory]);

    return (
        <SplitBillLayout step={3}>
            <div className="flex-1 flex flex-col">
                <div className="text-center space-y-4 mb-10 pt-4">
                    <div className="flex justify-center">
                        <FeaturedIcon
                            size="xl"
                            color="success"
                            theme="dark"
                            icon={Check}
                        />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Tagihan Selesai!</h2>
                        <p className="text-md text-tertiary font-medium">
                            Berikut adalah rincian pembayaran untuk setiap partisipan.
                        </p>
                    </div>
                </div>

                <div className="flex-1">
                    <SummaryTable />
                </div>

                <div className="mt-auto pt-10 pb-6">
                    <Button
                        color="secondary"
                        size="md"
                        className="w-full py-6 rounded-2xl font-bold bg-brand-50 text-brand-secondary border-none hover:bg-brand-100"
                        iconLeading={RefreshCw01}
                        onClick={() => router.push('/')}
                    >
                        Mulai Tagihan Baru
                    </Button>
                </div>
            </div>
        </SplitBillLayout>
    );
}
