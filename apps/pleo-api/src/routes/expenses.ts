import express from 'express';
import { expensesHandler } from '../handlers/expenses';

const router = express.Router();

router.get('/', expensesHandler.readExpenses);

router.get('/:id', expensesHandler.readExpense);

router.post('/:id', expensesHandler.updateExpense);

router.post('/:id/receipts', expensesHandler.createExpenseReceipt);

export default router;
