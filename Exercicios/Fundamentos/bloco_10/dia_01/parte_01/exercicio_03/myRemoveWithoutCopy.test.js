const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('testing myRemoveWithoutCopy function', () => {
  it('should remove the number 3 from the array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('should not return array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should modify the original array', () => {
    const originalArray = [1, 2, 3, 4];
    const newArray = myRemoveWithoutCopy(originalArray, 3);
    expect(originalArray).toEqual(newArray);
  });

  it('should return the same array, when the number to remove is not in the array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});