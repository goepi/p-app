// module for storing and editing data saved to disk
import fs from 'fs';
import path from 'path';
import { parseJsonToObject } from '../utils/json';
import { Expense } from 'pleo-types';
import { CallbackError } from '../types/errors';
import { Comment } from 'pleo-types';

type createExpenseCallback = (err: CallbackError | false, data?: Expense) => void;
type createCommentCallback = (err: CallbackError | false, data?: Comment) => void;

type readExpenseCallback = (err: CallbackError | false, data?: Expense) => void;
type readCommentsCallback = (err: CallbackError | false, data?: Comment[]) => void;

interface DataInterface {
  baseDir: string;
  create(dir: 'expenses', file: string, data: Expense, callback: createExpenseCallback): void;
  create(dir: 'comments', file: string, data: Comment, callback: createCommentCallback): void;
  read(dir: 'expenses', file: string, callback: readExpenseCallback): void;
  read(dir: 'comments', file: string, callback: readCommentsCallback): void;
  update(dir: 'expenses', file: string, data: Expense, callback: (err: CallbackError | false) => void): void;
  update(dir: 'comments', file: string, data: Comment, callback: (err: CallbackError | false) => void): void;
  delete(dir: 'expenses' | 'comments', file: string, callback: (err: CallbackError | false) => void): void;
}

export const dataInterface: DataInterface = {
  baseDir: path.join(__dirname, '../.data'),

  // Write data to a file
  create: (
    dir: 'expenses' | 'comments',
    file: string,
    data: Expense | Comment,
    callback: createExpenseCallback | createCommentCallback
  ) => {
    const filePath = `${dataInterface.baseDir}/${dir}/${file}.json`;

    // Open the file for writing
    fs.open(filePath, 'wx', (openErr, fileDescriptor) => {
      if (!openErr && fileDescriptor) {
        // Convert data to string
        const stringData = JSON.stringify(data);

        // Write to file and close it
        fs.writeFile(fileDescriptor, stringData, writeErr => {
          if (!writeErr) {
            fs.close(fileDescriptor, closeErr => {
              if (!closeErr) {
                callback(false);
              } else {
                callback({ error: 'Error closing new file' });
              }
            });
          } else {
            callback({ error: 'Error writing to new file' });
          }
        });
      } else {
        callback({ error: 'Could not create new file: ' + openErr });
      }
    });
  },
  read: (
    dir: 'expenses' | 'comments',
    file: string,
    callback: readExpenseCallback | readCommentsCallback
  ) => {
    const filePath = `${dataInterface.baseDir}/${dir}/${file}.json`;
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (!err && data) {
        const parsedData = parseJsonToObject(data);
        callback(false, parsedData);
      } else {
        callback({ error: `Error reading data: ${err}` });
      }
    });
  },

  update: (
    dir: 'expenses' | 'comments',
    file: string,
    data: Expense | Comment,
    callback: (err: CallbackError | false) => void
  ) => {
    const filePath = `${dataInterface.baseDir}/${dir}/${file}.json`;
    // open the file for writing
    fs.open(filePath, 'r+', (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        // Convert data to string
        const stringData = JSON.stringify(data);

        // truncate the file
        fs.ftruncate(fileDescriptor, ftruncErr => {
          if (!ftruncErr) {
            // write to the file and close it
            fs.writeFile(fileDescriptor, stringData, writeErr => {
              if (!writeErr) {
                fs.close(fileDescriptor, closeErr => {
                  if (!closeErr) {
                    callback(false);
                  } else {
                    callback({ error: 'Error closing existing file' });
                  }
                });
              } else {
                callback({ error: 'Error writing to existing file' });
              }
            });
          } else {
            callback({ error: 'Error truncating file' });
          }
        });
      } else {
        callback({ error: 'Could not open file for updating, it may not exist yet.' });
      }
    });
  },
  delete: (dir, file, callback) => {
    const filePath = `${dataInterface.baseDir}/${dir}/${file}.json`;
    // unlink the file
    fs.unlink(filePath, err => {
      if (!err) {
        callback(false);
      } else {
        callback({ error: 'Error deleting file' });
      }
    });
  },
};
