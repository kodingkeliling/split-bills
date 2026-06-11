'use client';

import React from 'react';
import { useBill } from '@/providers/bill-provider';
import { Button } from '@/components/base/buttons/button';
import { Share01 } from '@untitledui/icons';
import { Avatar } from '@/components/base/avatar/avatar';

import { toast } from 'sonner';
import { IconNotification } from '@/components/application/notifications/notifications';

export const SummaryTable = () => {
    const { people, billData } = useBill();

    if (!billData) return null;

    const peopleCount = people.length;
    const taxPerPerson = billData.tax / peopleCount;
    const servicePerPerson = billData.serviceCharge / peopleCount;

    const individualTotals = people.map((person) => {
        const assignedItems = billData.items.filter((item) =>
            item.assignedTo.includes(person.id)
        );
        const itemsTotal = assignedItems.reduce((sum, item) => {
            return sum + (item.price * item.quantity) / item.assignedTo.length;
        }, 0);

        return {
            person,
            items: assignedItems,
            itemsTotal,
            tax: taxPerPerson,
            serviceCharge: servicePerPerson,
            finalTotal: itemsTotal + taxPerPerson + servicePerPerson,
        };
    });

    const parseItemName = (name: string) => {
        const match = name.match(/(.*)\s\((\d+)\)$/);
        if (match) return match[1];
        return name;
    };

    const handleShare = () => {
        const text = individualTotals
            .map(
                (t) =>
                    `*${t.person.name}*: ${t.finalTotal.toLocaleString()}\n` +
                    t.items.map((i) => `- ${parseItemName(i.name)}`).join('\n')
            )
            .join('\n\n');
        navigator.clipboard.writeText(`Bill Breakdown:\n\n${text}`);
        toast.custom((t) => (
            <IconNotification
                title="Berhasil Disalin"
                description="Ringkasan tagihan telah disalin ke clipboard. Silakan tempel di WhatsApp."
                color="success"
                onClose={() => toast.dismiss(t)}
            />
        ));
    };

    return (
        <div className="space-y-6">
            <div className="grid gap-6">
                {individualTotals.map((total) => (
                    <div
                        key={total.person.id}
                        className="bg-primary p-6 md:p-8 rounded-3xl border border-secondary shadow-sm transition-all hover:shadow-lg group"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-4">
                                <Avatar
                                    size="md"
                                    alt={total.person.name}
                                    initials={total.person.name.length <= 2 ? total.person.name : total.person.name.substring(0, 2).toUpperCase()}
                                    className="ring-2 ring-brand-solid ring-offset-2 transition-transform group-hover:scale-110"
                                />
                                <div className="space-y-0.5">
                                    <h4 className="text-xl font-bold text-primary">{total.person.name}</h4>
                                    <p className="text-xs font-semibold text-tertiary uppercase tracking-wider">{total.items.length} items</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-black text-brand-secondary tracking-tighter">
                                    {total.finalTotal.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 pt-6 border-t border-secondary">
                            {total.items.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm text-secondary">
                                    <span className="flex items-center gap-2">
                                        <span className="size-1.5 rounded-full bg-brand-solid/30" />
                                        {parseItemName(item.name)} {item.assignedTo.length > 1 ? `(Split ${item.assignedTo.length})` : ''}
                                    </span>
                                    <span className="font-bold text-primary">
                                        {((item.price * item.quantity) / item.assignedTo.length).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                            <div className="flex justify-between text-xs font-medium text-tertiary mt-2 px-3 py-2 bg-bg-secondary rounded-xl border border-secondary border-dashed">
                                <span>Tax & Service Fees</span>
                                <span>{(total.tax + total.serviceCharge).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-4">
                <Button
                    color="primary"
                    size="md"
                    className="w-full shadow-lg shadow-brand-100 py-6"
                    onClick={handleShare}
                    iconLeading={Share01}
                >
                    Copy WhatsApp Summary
                </Button>
            </div>
        </div>
    );
};
