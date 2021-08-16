const sum = require('./sum');

describe('testing sum function', () => {
  it('should return 9 for the sum of 4 plus 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should return 0 for the sum of 0 plus 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  
  it('should throw an error when the number is invalid', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  it('should show the error message "parameters must be numbers"', () => {
    expect(() => { sum(4, '5') }).toThrow(/parameters must be numbers/);
  });
});
