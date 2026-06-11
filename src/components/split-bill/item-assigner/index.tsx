'use client';

import React from 'react';
import { useBill } from '@/providers/bill-provider';
import { Button } from '@/components/base/buttons/button';
import { Check } from '@untitledui/icons';
import { Avatar } from '@/components/base/avatar/avatar';

import { Badge } from '@/components/base/badges/badges';

export const ItemAssigner = () => {
    const { people, billData, assignItemToPerson, unassignItemFromPerson } = useBill();

    if (!billData) return null;

    const parseItemName = (name: string) => {
        const match = name.match(/(.*)\s\((\d+)\)$/);
        if (match) {
            return {
                baseName: match[1],
                itemNumber: match[2],
            };
        }
        return {
            baseName: name,
            itemNumber: null,
        };
    };

    const toggleAssignment = (itemId: string, personId: string) => {
        const item = billData.items.find((i) => i.id === itemId);
        if (item?.assignedTo.includes(personId)) {
            unassignItemFromPerson(itemId, personId);
        } else {
            assignItemToPerson(itemId, personId);
        }
    };

    return (
        <div className="space-y-6 pb-96">
            {billData.items.map((item) => {
                const { baseName, itemNumber } = parseItemName(item.name);
                return (
                    <div
                        key={item.id}
                        className="bg-white p-6 rounded-[32px] border-2 border-secondary/50 shadow-sm transition-all hover:border-brand-primary group relative overflow-hidden"
                    >
                        {/* Item Header */}
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-black text-gray-900 pr-4">
                                {baseName} {item.quantity > 1 && <span className="text-tertiary text-sm font-medium">x{item.quantity}</span>}
                            </h4>
                            {itemNumber && (
                                <Badge color="brand" size="sm" type="pill-color" className="font-black">
                                    {itemNumber}
                                </Badge>
                            )}
                        </div>

                    {/* Price */}
                    <div className="mb-6 flex items-baseline gap-2">
                        <p className="text-3xl font-black text-brand-secondary tracking-tight">
                            Rp {(item.price * item.quantity).toLocaleString()}
                        </p>
                        {item.assignedTo.length > 1 && (
                            <p className="text-sm font-bold text-tertiary">
                                (Rp {((item.price * item.quantity) / item.assignedTo.length).toLocaleString()} / orang)
                            </p>
                        )}
                    </div>

                    {/* Avatar Selection */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-secondary/30">
                        {people.map((person) => {
                            const isAssigned = item.assignedTo.includes(person.id);
                            return (
                                <button
                                    key={person.id}
                                    onClick={() => toggleAssignment(item.id, person.id)}
                                    className={`size-10 rounded-full flex items-center justify-center text-xs font-black transition-all border-2 ${isAssigned
                                        ? 'bg-brand-solid border-brand-solid text-white'
                                        : 'bg-white border-secondary text-tertiary hover:border-brand-primary'
                                        }`}
                                >
                                    {person.name.length <= 2 ? person.name : person.name.substring(0, 2).toUpperCase()}
                                </button>
                            );
                        })}
                    </div>
                    </div>
                );
            })}
        </div>
    );
};
