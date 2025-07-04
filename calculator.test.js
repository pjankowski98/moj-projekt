const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
  test('dodawanie: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('odejmowanie: 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('mnożenie: 4 * 3 = 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('dzielenie: 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('dzielenie przez zero powinno rzucać wyjątek', () => {
    expect(() => divide(5, 0)).toThrow('Nie można dzielić przez zero');
  });
});