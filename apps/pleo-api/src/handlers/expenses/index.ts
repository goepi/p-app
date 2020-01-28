import { Request, Response } from 'express';
import { dataInterface } from '../../dataInterface';
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
    const value = typeof parseInt(req.body.amount.value) === 'number' ? req.body.amount.value : false;
    const currency = typeof req.body.amount.currency === 'string' ? req.body.amount.currency : false;
    const date = typeof new Date(req.body.date) === 'object' ? new Date(req.body.date).getTime() : false;
    const merchant = typeof req.body.merchant === 'string' ? req.body.merchant : false;
    const comments =
      Array.isArray(req.body.comments) && req.body.comments.every((c: any) => typeof c === 'string')
        ? req.body.comments
        : false;

    console.log(value, currency, date, merchant, comments);
    if (value && currency && date && merchant && comments) {
      dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
        if (!err && allExpenses !== undefined) {
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
              first: 'Marcus',
              last: 'Egues',
              email: 'marcusegues@gmail.com',
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
              const type = receipt.mimetype.split('/')[1];
              receipt.mv(path.join(__dirname, `../../data/receipts/${receiptId}.${type}`), err => {
                if (!err) {
                  expense.receipts.push(receiptId);
                  dataInterface.update('expenses', 'expenses', allExpenses, writeErr => {
                    if (!writeErr) {
                      res.status(200).send(expense);
                    } else {
                      res.status(500);
                    }
                  });
                } else {
                  res.status(500);
                }
              });
            } else {
              res.status(400).send('Could not find expense');
            }
          } else {
            res.status(500);
          }
        });
      } else {
        res.status(400).send('No expense id');
      }
    } else {
      res.status(400).send('No files uploaded');
    }
  },
};
