'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { BillData, Person } from '@/types/bill';

export interface HistoryItem {
    id: string;
    date: string;
    billData: BillData;
    people: Person[];
}

interface HistoryContextType {
    history: HistoryItem[];
    addToHistory: (billData: BillData, people: Person[]) => void;
    deleteFromHistory: (id: string) => void;
    clearHistory: () => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('split_bill_history');
        if (saved) {
            try {
                setHistory(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse history', e);
            }
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('split_bill_history', JSON.stringify(history));
    }, [history]);

    const addToHistory = (billData: BillData, people: Person[]) => {
        const newItem: HistoryItem = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            billData,
            people,
        };
        setHistory((prev) => [newItem, ...prev]);
    };

    const deleteFromHistory = (id: string) => {
        setHistory((prev) => prev.filter((item) => item.id !== id));
    };

    const clearHistory = () => {
        setHistory([]);
    };

    return (
        <HistoryContext.Provider value={{ history, addToHistory, deleteFromHistory, clearHistory }}>
            {children}
        </HistoryContext.Provider>
    );
};

export const useHistory = () => {
    const context = useContext(HistoryContext);
    if (!context) throw new Error('useHistory must be used within HistoryProvider');
    return context;
};
