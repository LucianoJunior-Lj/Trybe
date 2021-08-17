const myRemove = require('./myRemove');

describe('testing myRemove function', () => {
  it('should remove the number 3 from the array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('should not return array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should not modify the original array', () => {
    const originalArray = [1, 2, 3, 4];
    const newArray = myRemove(originalArray, 3);
    expect(originalArray).not.toEqual(newArray);
  });

  it('should return the same array, when the number to remove is not in the array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});