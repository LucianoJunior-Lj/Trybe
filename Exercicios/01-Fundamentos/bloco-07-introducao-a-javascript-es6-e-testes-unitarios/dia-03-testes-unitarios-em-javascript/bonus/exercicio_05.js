function verify(password) {
  if (!password || password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return false;
  }
  return true;
}

const assert = require('assert');

assert.strictEqual(typeof verify, 'function');

assert.ok(!verify('12345678'));
assert.ok(!verify(null));
assert.ok(!verify('wqQW12'));
assert.ok(!verify('QWESDSDSFDSDS'));
assert.ok(!verify('dasfdfsvfbf'));
assert.ok(!verify('DSEWfdsfqw'));
assert.ok(verify('123asdDFFDF'))