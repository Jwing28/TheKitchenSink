export const cleanString = (str) => str.replace('&amp;', 'and');
export const limitString = (str) => (
  str.length > 30 ? str.slice(0,27) + '...' : str
);
