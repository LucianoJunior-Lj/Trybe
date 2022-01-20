const uppercase = require('./uppercase');

describe('testing uppercase function', () => {
  it('should leave all letters of a word uppercase', (done) => {
    uppercase('luciano', (result) => {
      try {
        expect(result).toBe('LUCIANO');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
