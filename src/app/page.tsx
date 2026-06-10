'use client';

import React, { useState, useEffect } from 'react';
import type { Key } from 'react-aria-components';
import { SplitBillLayout } from '@/components/split-bill/layout';
import { useBill } from '@/providers/bill-provider';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/base/buttons/button';
import { Tabs } from '@/components/application/tabs/tabs';
import { Minus, Plus, Trash01 } from '@untitledui/icons';
import { Input } from '@/components/base/input/input';
import { Person } from '@/types/bill';

import { getAlphabetName } from '@/utils/person-name';

export default function PeoplePage() {
    const { setPeople } = useBill();
    const router = useRouter();
    const [mode, setMode] = useState<Key>('count');
    const [count, setCount] = useState<number>(2);
    const [names, setNames] = useState<string[]>(['', '']);

    useEffect(() => {
        if (mode === 'count') {
            const generatedPeople: Person[] = Array.from({ length: count }, (_, i) => ({
                id: `person-${i}`,
                name: getAlphabetName(i),
            }));
            setPeople(generatedPeople);
        } else {
            const listPeople: Person[] = names
                .map((name, i) => ({
                    id: `person-${i}`,
                    name: name.trim() || getAlphabetName(i),
                }));
            setPeople(listPeople);
        }
    }, [mode, count, names, setPeople]);

    return (
        <SplitBillLayout step={1}>
            <div className="flex-1 flex flex-col">
                <div className="space-y-4 mb-10">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Siapa saja yang ikut?</h2>
                    <p className="text-md text-tertiary font-medium leading-relaxed">
                        Tentukan jumlah orang atau masukkan nama teman-temanmu untuk mulai membagi tagihan.
                    </p>
                </div>

                <div className="mb-8 sticky top-0 bg-white z-20 py-2 -mx-2 px-2">
                    <Tabs
                        selectedKey={mode}
                        onSelectionChange={setMode}
                    >
                        <Tabs.List
                            type="button-border"
                            size="md"
                            fullWidth
                            items={[
                                { id: 'count', label: 'Jumlah Orang' },
                                { id: 'list', label: 'Nama Partisipan' },
                            ]}
                        >
                            {(tab) => <Tabs.Item key={tab.id} id={tab.id} label={tab.label} />}
                        </Tabs.List>
                    </Tabs>
                </div>

                {mode === 'count' ? (
                    <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="bg-white p-10 rounded-[40px] shadow-skeumorphic border border-secondary w-full text-center space-y-10">
                            <span className="text-xs font-black text-tertiary uppercase tracking-widest">Total Partisipan</span>
                            <div className="flex items-center justify-between px-4">
                                <Button
                                    color="secondary"
                                    className="size-16 rounded-full p-2 border-2 text-brand-secondary border-brand-100 hover:bg-brand-50"
                                    onClick={() => setCount(Math.max(1, count - 1))}
                                    isDisabled={count <= 2}
                                >
                                    <Minus className="size-8" strokeWidth={3} />
                                </Button>
                                <span className="text-7xl font-black text-gray-900">{count}</span>
                                <Button
                                    color="primary"
                                    className="size-16 rounded-full p-2 shadow-lg shadow-brand-100"
                                    onClick={() => setCount(count + 1)}
                                >
                                    <Plus className="size-8" strokeWidth={3} />
                                </Button>
                            </div>
                            <p className="text-sm font-bold text-tertiary italic">
                                Tagihan akan dibagi rata ke {count} orang.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4 flex-1">
                        <div className="grid gap-3">
                            {names.map((name, index) => (
                                <div key={index} className="flex items-end gap-3 px-2">
                                    <div className="flex-1">
                                        <Input
                                            value={name}
                                            onChange={(val) => {
                                                const newNames = [...names];
                                                newNames[index] = val;
                                                setNames(newNames);
                                            }}
                                            placeholder={`Nama Teman ${index + 1}`}
                                            className="rounded-xl border-none bg-bg-secondary font-bold"
                                        />
                                    </div>
                                    <Button
                                        color="tertiary"
                                        size="md"
                                        onClick={() => {
                                            const newNames = [...names];
                                            newNames.splice(index, 1);
                                            setNames(newNames);
                                        }}
                                        isDisabled={names.length <= 1}
                                    >
                                        <Trash01 className="size-5" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <Button
                            color="secondary"
                            size="md"
                            onClick={() => setNames([...names, ''])}
                            iconLeading={Plus}
                        >
                            Tambah Teman
                        </Button>
                    </div>
                )}

                <div className="mt-auto pt-10 pb-6">
                    <Button
                        color="primary"
                        size="lg"
                        className="w-full py-8 text-xl font-black rounded-3xl shadow-xl shadow-brand-100"
                        onClick={() => router.push('/split-bill/upload')}
                    >
                        Lanjut
                    </Button>
                </div>
            </div>
        </SplitBillLayout>
    );
}
