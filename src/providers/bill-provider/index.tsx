'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Person, BillItem, BillData } from '@/types/bill';

interface BillContextType {
    people: Person[];
    billData: BillData | null;
    setPeople: (people: Person[]) => void;
    setBillData: (data: BillData | null) => void;
    assignItemToPerson: (itemId: string, personId: string) => void;
    unassignItemFromPerson: (itemId: string, personId: string) => void;
    resetSession: () => void;
    loadFromHistory: (billData: BillData, people: Person[]) => void;
}

const BillContext = createContext<BillContextType | undefined>(undefined);

export const BillProvider = ({ children }: { children: ReactNode }) => {
    const [people, setPeople] = useState<Person[]>([]);
    const [billData, setBillData] = useState<BillData | null>(null);

    const assignItemToPerson = (itemId: string, personId: string) => {
        if (!billData) return;
        setBillData({
            ...billData,
            items: billData.items.map((item) =>
                item.id === itemId
                    ? { ...item, assignedTo: [...item.assignedTo, personId] }
                    : item
            ),
        });
    };

    const unassignItemFromPerson = (itemId: string, personId: string) => {
        if (!billData) return;
        setBillData({
            ...billData,
            items: billData.items.map((item) =>
                item.id === itemId
                    ? { ...item, assignedTo: item.assignedTo.filter((id) => id !== personId) }
                    : item
            ),
        });
    };

    const resetSession = () => {
        setPeople([]);
        setBillData(null);
    };

    const loadFromHistory = (data: BillData, p: Person[]) => {
        setBillData(data);
        setPeople(p);
    };

    return (
        <BillContext.Provider
            value={{
                people,
                billData,
                setPeople,
                setBillData,
                assignItemToPerson,
                unassignItemFromPerson,
                resetSession,
                loadFromHistory,
            }}
        >
            {children}
        </BillContext.Provider>
    );
};

export const useBill = () => {
    const context = useContext(BillContext);
    if (context === undefined) {
        throw new Error('useBill must be used within a BillProvider');
    }
    return context;
};
