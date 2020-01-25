export interface Comment {
    id: string;
    text: string;
    expenseId: string;
    date: number;
}

export interface Expense {
    id: string;
    amount: {
        value: string;
        currency: string;
    };
    date: string;
    merchant: string;
    receipts: any[];
    comments: string[];
    category: string;
    user: {
        first: string;
        last: string;
        email: string;
    };
}

export interface Comments {
    [id: string]: Comment
}
