// helpers.ts

export const getTimeBand = (date: Date) => {
  const hours = date.getHours();
  if (hours < 4) return 'evening';
  if (hours < 12) return 'morning';
  if (hours < 18) return 'afternoon';
  return 'evening';
};
