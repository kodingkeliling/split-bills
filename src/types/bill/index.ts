export interface Person {
    id: string;
    name: string;
}

export interface BillItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    assignedTo: string[]; // Array of Person IDs
}

export interface BillData {
    items: BillItem[];
    subtotal: number;
    tax: number;
    serviceCharge: number;
    total: number;
}
