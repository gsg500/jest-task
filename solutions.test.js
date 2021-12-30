const week = require('./solutions/week');

test('Contagem de dia da semana...', () => {
  expect(week('Sat', 23)).toBe('Mon');
  expect(week('Sun', 16)).toBe('Tue');
  expect(week('Tue', 15)).toBe('Wed');
  expect(week('Thu', 35)).toBe('Thu');
  expect(week('Wed', 30)).toBe('Fri');
  expect(week('Mon', 26)).toBe('Sat');
  expect(week('Fri', 86)).toBe('Sun');
  expect(week('Sat', 3)).toBe('Tue');
});