function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  let index = 0;
  let count = 0;

  if (remaining < 0) {
    throw new Error('paid value is not enough');
  }

  if (remaining === 0) {
    return change;
  }

  do {
    count = remaining / coins[index] >= 1 ? Math.trunc(remaining / coins[index]) : 0;
    for (let i = 0; i < count; i += 1) {
      change.push(coins[index]);     
    }
    remaining -= coins[index] * count;
    index += 1;
  } while (remaining !== 0);

  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);