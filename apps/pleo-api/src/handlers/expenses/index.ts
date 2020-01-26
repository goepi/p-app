import { Request, Response } from 'express';
import { dataInterface } from '../../data';
import { v4 } from 'uuid';
import path from 'path';
import { Comment } from 'pleo-types/src/comments';
import { Expense } from 'pleo-types';

export const expensesHandler = {
  readExpenses: (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit) || 25;
    const offset = parseInt(req.query.offset) || 0;

    dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
      if (!err && allExpenses) {
        const expenses = allExpenses.sort((a, b) => (a.date > b.date ? -1 : 1)).slice(offset, offset + limit);

        res.status(200).send({ expenses, total: expenses.length });
      } else {
        res.status(500);
      }
    });
  },

  readExpense: (req: Request, res: Response) => {
    const id = req.params.id;

    if (id) {
      dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
        if (!err && allExpenses) {
          const expense = allExpenses.find(expense => expense.id === id);
          if (expense) {
            res.send(expense);
          } else {
            res.status(404);
          }
        } else {
          res.status(500);
        }
      });
    } else {
      res.status(400);
    }
  },
  createExpense: (req: Request, res: Response) => {
    const value = typeof req.body.amount.value === 'number' ? req.body.amount.value : false;
    const currency = typeof req.body.amount.currency === 'string' ? req.body.amount.currency : false;
    const date = typeof req.body.date === 'number' ? req.body.date : false;
    const merchant = typeof req.body.merchant === 'string' ? req.body.merchant : false;
    const comments =
      Array.isArray(req.body.comments) && req.body.comments.every((c: any) => typeof c === 'string')
        ? req.body.comments
        : false;

    if (value && currency && date && merchant && comments) {
      console.log(1);
      dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
        console.log(2);
        if (!err && allExpenses !== undefined) {
          console.log(3);
          const newExpenseId = v4();

          const newComments = comments.map((text: string) => ({
            id: v4(),
            text,
            expenseId: newExpenseId,
            date: new Date().getTime(),
          }));

          const newExpense: Expense = {
            id: newExpenseId,
            amount: { value, currency },
            date,
            merchant,
            comments: newComments,
            receipts: [],
            category: '',
            user: {
              first: 'Pleo Test',
              last: 'User',
              email: 'pleo@test.com',
            },
          };
          allExpenses.push(newExpense);

          dataInterface.update('expenses', 'expenses', allExpenses, writeErr => {
            if (!writeErr) {
              res.status(200).send(newExpense);
            } else {
              res.status(500);
            }
          });
        } else {
          res.status(500);
        }
      });
    } else {
      res.status(400);
    }
  },
  deleteExpense: (req: Request, res: Response) => {
    const id = req.params.id;

    if (id) {
      dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
        if (!err && allExpenses !== undefined) {
          const expenseIdx = allExpenses.findIndex(expense => expense.id === id);

          if (expenseIdx) {
            allExpenses = [...allExpenses.slice(0, expenseIdx), ...allExpenses.slice(expenseIdx + 1)];

            dataInterface.update('expenses', 'expenses', allExpenses, writeErr => {
              if (!writeErr) {
                res.status(200).send();
              } else {
                res.status(500);
              }
            });
          } else {
            res.status(404);
          }
        } else {
          res.status(500);
        }
      });
    } else {
      res.status(400);
    }
  },
  createExpenseComment: (req: Request, res: Response) => {
    const id = req.params.id;
    const comment = typeof req.body.comment === 'string' ? req.body.comment : false;
    if (id && comment) {
      dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
        if (!err && allExpenses) {
          const expenseIdx = allExpenses.findIndex(expense => expense.id === id);
          if (expenseIdx) {
            const newComment: Comment = {
              id: v4(),
              text: comment,
              expenseId: allExpenses[expenseIdx].id,
              date: new Date().getTime(),
            };

            allExpenses[expenseIdx].comments.push(newComment);

            dataInterface.update('expenses', 'expenses', allExpenses, updateErr => {
              if (!updateErr) {
                res.status(200).send({ ...newComment });
              }
            });
          } else {
            res.status(404);
          }
        } else {
          res.status(404);
        }
      });
    } else {
      res.status(400);
    }
  },

  createExpenseReceipt: (req: Request, res: Response) => {
    const receipt =
      req.files && req.files.receipt && !Array.isArray(req.files.receipt) ? req.files.receipt : false;

    if (receipt) {
      const id = req.params.id;
      if (id) {
        dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
          if (!err && allExpenses) {
            const expense = allExpenses.find(expense => expense.id === id);

            if (expense) {
              const receiptId = v4();
              receipt.mv(path.join(__dirname, '../../.data/receipts'), err => {
                if (!err) {
                  expense.receipts.push(receiptId);
                  res.status(200);
                } else {
                  res.status(500);
                }
              });
            }
          } else {
            res.status(500);
          }
        });
      } else {
        res.status(400).send('No files uploaded');
      }
    }
  },
};
