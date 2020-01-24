// Parse a JSON string to an object in all cases without throwing
export const parseJsonToObject = (str: string) => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {};
  }
};
