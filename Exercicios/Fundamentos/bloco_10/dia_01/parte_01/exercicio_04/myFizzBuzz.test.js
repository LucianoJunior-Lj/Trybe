const myFizzBuzz = require('./myFizzBuzz');

describe('testing myFizzBuzz function', () => {
  it('should return "fizzbuzz" when the number is divisible by 5 and 3', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('should return "fizz" when the number is divisible by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('should return "buzz" when the number is divisible by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('should return the number itself, when it is not divisible by 5 or 3', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('should return false when the parameter is not a number', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });
});