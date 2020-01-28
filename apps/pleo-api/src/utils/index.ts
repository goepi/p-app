import fs from 'fs';
import path from 'path';

// Parse a JSON string to an object in all cases without throwing
export const parseJsonToObject = (str: string) => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {};
  }
};

export const getAllFilesInDirectory = (
  directory: string,
  callback: (err: Error | false, files?: string[]) => void
) => {
  fs.readdir(path.join(__dirname, '../data'), (err, files) => {
    if (!err) {
      callback(false, files);
    }
    callback(new Error('Error reading directory files'));
  });
};
