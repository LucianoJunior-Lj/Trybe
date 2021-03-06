const assert = require('assert');

const greaterThanTen = (array) => {
  const results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const unchanged = [4, 10, 32, 9, 21];
const result = [32, 21];
const output = greaterThanTen(parameter);

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(output, result);
assert.deepStrictEqual(parameter, unchanged);