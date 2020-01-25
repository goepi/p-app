import { Request, Response } from 'express';
import { dataInterface } from '../../data';
import { v4 } from 'uuid';
import path from 'path';
import { Comment } from 'pleo-types/src/comments';

export const expensesHandler = {
  readExpenses: (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit) || 25;
    const offset = parseInt(req.query.offset) || 0;

    dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
      if (!err && allExpenses) {
        dataInterface.read('comments', 'comments', (readCommentsErr, comments) => {
          if (!readCommentsErr && comments !== undefined) {
            const expenses = allExpenses
              .sort((a, b) => (a.date > b.date ? -1 : 1))
              .slice(offset, offset + limit)
              .map((expense, index) => ({
                ...expense,
                comments: expense.comments.map(commentId => comments[commentId]),
              }));
            res.status(200).send({ expenses, total: expenses.length });
          } else {
            res.status(500);
          }
        });
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
  updateExpense: (req: Request, res: Response) => {
    const id = req.params.id;
    const comment = typeof req.body.comment === 'string' ? req.body.comment : false;

    if (id && comment) {
      dataInterface.read('expenses', 'expenses', (err, allExpenses) => {
        if (!err && allExpenses) {
          dataInterface.read('comments', 'comments', (readCommentsErr, comments) => {
            if (!readCommentsErr && comments) {
              const expenseIdx = allExpenses.findIndex(expense => expense.id === id);

              if (expenseIdx) {
                const newComment: Comment = {
                  id: v4(),
                  text: comment,
                  expenseId: allExpenses[expenseIdx].id,
                  date: new Date().getTime(),
                };

                comments[newComment.id] = newComment;

                dataInterface.update('comments', 'comments', comments, updateCommentsErr => {
                  if (!updateCommentsErr) {
                    allExpenses[expenseIdx].comments.push(newComment.id);

                    dataInterface.update('expenses', 'expenses', allExpenses, updateErr => {
                      if (!updateErr) {
                        res.status(200);
                      }
                    });
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
