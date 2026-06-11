'use client';

import React, { useState } from 'react';
import type { Key } from 'react-aria-components';
import { SplitBillLayout } from '@/components/split-bill/layout';
import { useBill } from '@/providers/bill-provider';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/base/buttons/button';
import { FileUpload } from '@/components/application/file-upload/file-upload-base';
import { Tabs } from '@/components/application/tabs/tabs';
import { Camera01, HelpCircle, ArrowRight, Plus, Trash01, Edit01 } from '@untitledui/icons';
import { FeaturedIcon } from '@/components/foundations/featured-icon/featured-icon';
import { Input } from '@/components/base/input/input';
import { BillItem } from '@/types/bill';
import { formatRupiah, parseRupiah } from '@/utils/currency';
import { toast } from 'sonner';
import { IconNotification } from '@/components/application/notifications/notifications';

interface ManualItem {
    id: string;
    name: string;
    price: string;
    quantity: string;
}

export default function UploadPage() {
    const { setBillData } = useBill();
    const router = useRouter();
    const [mode, setMode] = useState<Key>('upload');

    // Upload state
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    // Manual state
    const [manualItems, setManualItems] = useState<ManualItem[]>([
        { id: '1', name: '', price: '', quantity: '1' },
    ]);
    const [tax, setTax] = useState('');
    const [serviceCharge, setServiceCharge] = useState('');

    const handleProcessBill = async () => {
        if (!file) return;
        setIsUploading(true);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/ocr', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Failed to process bill');

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error);
            }

            setBillData(data);
            router.push('/split-bill/assign');
        } catch (error: any) {
            toast.custom((t) => (
                <IconNotification
                    title="Gagal Memproses Struk"
                    description={error.message || "Terjadi kesalahan saat membaca struk. Silakan coba lagi dengan foto yang lebih jelas."}
                    color="error"
                    onClose={() => toast.dismiss(t)}
                />
            ));
        } finally {
            setIsUploading(false);
        }
    };

    const addManualItem = () => {
        setManualItems([...manualItems, { id: Date.now().toString(), name: '', price: '', quantity: '1' }]);
    };

    const removeManualItem = (id: string) => {
        if (manualItems.length <= 1) return;
        setManualItems(manualItems.filter((i) => i.id !== id));
    };

    const updateManualItem = (id: string, field: keyof ManualItem, value: string) => {
        let val = value;
        if (field === 'price') {
            val = formatRupiah(value);
        }
        setManualItems(manualItems.map((i) => (i.id === id ? { ...i, [field]: val } : i)));
    };

    const isManualInvalid = manualItems.some((i) => !i.name.trim() || !i.price.trim());

    const handleManualSubmit = () => {
        const validItems = manualItems.filter((i) => i.name.trim() && i.price.trim());
        if (validItems.length === 0) {
            toast.custom((t) => (
                <IconNotification
                    title="Data Tidak Lengkap"
                    description="Tambahkan minimal satu item dengan nama dan harga terlebih dahulu."
                    color="warning"
                    onClose={() => toast.dismiss(t)}
                />
            ));
            return;
        }

        // Expand items with qty > 1 into individual entries
        const items: BillItem[] = [];
        let globalIdx = 0;
        for (const item of validItems) {
            const qty = parseInt(item.quantity || '1', 10);
            const priceVal = parseFloat(parseRupiah(item.price) || '0');
            if (qty > 1) {
                for (let i = 1; i <= qty; i++) {
                    items.push({
                        id: `item-${globalIdx++}`,
                        name: `${item.name.trim()} (${i})`,
                        price: priceVal,
                        quantity: 1,
                        assignedTo: [],
                    });
                }
            } else {
                items.push({
                    id: `item-${globalIdx++}`,
                    name: item.name.trim(),
                    price: priceVal,
                    quantity: 1,
                    assignedTo: [],
                });
            }
        }

        const taxVal = parseFloat(parseRupiah(tax) || '0');
        const serviceVal = parseFloat(parseRupiah(serviceCharge) || '0');
        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const total = subtotal + taxVal + serviceVal;

        setBillData({ items, tax: taxVal, serviceCharge: serviceVal, subtotal, total });
        router.push('/split-bill/assign');
    };

    return (
        <SplitBillLayout step={2}>
            <div className="flex-1 flex flex-col">
                <div className="space-y-3 mb-8">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Input Tagihan</h2>
                    <p className="text-md text-tertiary font-medium">
                        Upload foto struk atau masukkan item secara manual.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mb-8 sticky top-0 bg-white z-20 py-2 -mx-2 px-2">
                    <Tabs selectedKey={mode} onSelectionChange={setMode}>
                        <Tabs.List
                            type="button-border"
                            size="md"
                            fullWidth
                            items={[
                                { id: 'upload', label: 'Foto Struk' },
                                { id: 'manual', label: 'Manual' },
                            ]}
                        >
                            {(tab) => <Tabs.Item key={tab.id} id={tab.id} label={tab.label} />}
                        </Tabs.List>
                    </Tabs>
                </div>

                {/* Tab Panels */}
                {mode === 'upload' ? (
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1 flex flex-col items-center">
                            {!file ? (
                                <div className="w-full relative">
                                    <FileUpload.DropZone
                                        onDropFiles={(files) => setFile(files[0])}
                                        accept="image/*"
                                        allowsMultiple={false}
                                        hint="Ketuk untuk ambil foto atau pilih dari galeri"
                                    />
                                </div>
                            ) : (
                                <FileUpload.List className="w-full">
                                    <FileUpload.ListItemProgressBar
                                        name={file.name}
                                        size={file.size}
                                        progress={isUploading ? 75 : 100}
                                        onDelete={() => setFile(null)}
                                        type="image"
                                        className="bg-bg-secondary p-8 rounded-[32px] border border-secondary"
                                    />
                                </FileUpload.List>
                            )}

                            <div className="mt-8 p-5 bg-brand-50 rounded-2xl border border-brand-100 flex gap-4 w-full">
                                <div className="shrink-0 pt-1">
                                    <FeaturedIcon size="sm" color="brand" theme="light" icon={HelpCircle} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-brand-secondary">Tips Cepat</h4>
                                    <p className="text-xs text-brand-700 font-medium leading-relaxed">
                                        Pastikan angka terlihat jelas dan struk tidak terlipat untuk hasil terbaik.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 pb-6">
                            <Button
                                color="primary"
                                size="lg"
                                className="w-full py-8 text-xl font-black rounded-3xl shadow-xl shadow-brand-100"
                                onClick={handleProcessBill}
                                isLoading={isUploading}
                                isDisabled={!file || isUploading}
                                iconTrailing={ArrowRight}
                            >
                                Proses Struk
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col">
                        {/* Manual Items */}
                        <div className="space-y-4 flex-1">
                            <p className="text-xs font-black text-tertiary uppercase tracking-widest">Item Pesanan</p>
                            <div className="space-y-3">
                                {manualItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="bg-bg-secondary rounded-md p-4 border border-secondary space-y-3"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-black text-brand-secondary uppercase tracking-wider">
                                                Item {index + 1}
                                            </span>
                                            {manualItems.length > 1 && (
                                                <button
                                                    onClick={() => removeManualItem(item.id)}
                                                    className="text-error-primary p-1 rounded-full hover:bg-error-50 transition-colors"
                                                >
                                                    <Trash01 className="size-4" />
                                                </button>
                                            )}
                                        </div>
                                        <Input
                                            value={item.name}
                                            onChange={(val) => updateManualItem(item.id, 'name', val)}
                                            placeholder="Nama menu (e.g. Nasi Goreng)"
                                            className="bg-white rounded-xl border-secondary"
                                        />
                                        <div className="grid grid-cols-2 gap-3">
                                            <Input
                                                value={item.price}
                                                onChange={(val) => updateManualItem(item.id, 'price', val)}
                                                placeholder="Rp 0"
                                                className="bg-white rounded-xl border-secondary"
                                            />
                                            <Input
                                                value={item.quantity}
                                                onChange={(val) => updateManualItem(item.id, 'quantity', val)}
                                                placeholder="Qty"
                                                type="number"
                                                className="bg-white rounded-xl border-secondary"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button
                                color="secondary"
                                size="md"
                                onClick={addManualItem}
                                iconLeading={Plus}
                            >
                                Tambah Item
                            </Button>

                            {/* Tax & Service */}
                            <div className="mt-4 space-y-4">
                                <p className="text-xs font-black text-tertiary uppercase tracking-widest">Biaya Tambahan</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-tertiary">Pajak (Rp)</label>
                                        <Input
                                            value={tax}
                                            onChange={(val) => setTax(formatRupiah(val))}
                                            placeholder="Rp 0"
                                            className="bg-bg-secondary rounded-xl border-secondary"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-tertiary">Biaya Layanan (Rp)</label>
                                        <Input
                                            value={serviceCharge}
                                            onChange={(val) => setServiceCharge(formatRupiah(val))}
                                            placeholder="Rp 0"
                                            className="bg-bg-secondary rounded-xl border-secondary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 pb-6">
                            <Button
                                color="primary"
                                size="lg"
                                className="w-full py-8 text-xl font-black rounded-3xl shadow-xl shadow-brand-100"
                                onClick={handleManualSubmit}
                                isDisabled={isManualInvalid}
                                iconTrailing={ArrowRight}
                                iconLeading={Edit01}
                            >
                                Lanjut Pembagian
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </SplitBillLayout>
    );
}
