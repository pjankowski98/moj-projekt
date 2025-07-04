const { square } = require('./square');

describe('square', () => {
  test('powinno zwrócić kwadrat liczby dodatniej', () => {
    expect(square(4)).toBe(16);
  });

  test('powinno zwrócić 0 dla 0', () => {
    expect(square(0)).toBe(0);
  });

  test('powinno działać z liczbami ujemnymi', () => {
    expect(square(-3)).toBe(9);
  });
});