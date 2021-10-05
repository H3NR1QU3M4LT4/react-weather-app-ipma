/**
 * Format Date Function
 * @param date in type Date
 * @returns the year => type number
 */

export const formatDate = (date: Date): number => {
  const newDate = new Date(date);
  return newDate.getFullYear();
};
