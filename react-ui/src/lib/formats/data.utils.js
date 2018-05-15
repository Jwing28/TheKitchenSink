export const cleanString = (str) => str.replace('&amp;', 'and');
export const limitString = (str) => (
  str.length > 40 ? str.slice(0,40) + '...' : str
);
