import express from 'express';
import { expensesHandler } from '../handlers/expenses';

const router = express.Router();

router.get('/', expensesHandler.readExpenses);

router.post('/', expensesHandler.createExpense);

router.delete('/:id', expensesHandler.deleteExpense);

router.get('/:id', expensesHandler.readExpense);

router.post('/:id/comments', expensesHandler.createExpenseComment);

router.post('/:id/receipts', expensesHandler.createExpenseReceipt);

export default router;
