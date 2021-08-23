const getUserName = require('./getUserName');

describe('testing getUserName function', () => {
  it('should return the user who has the id searched', () => (
    getUserName(1).then((user) => expect(user).toBe('Mark'))
  ));
  it('should return an error message, when id is not found', () => {
    expect.assertions(1);
    return getUserName(7).catch((error) => (
      expect(error.message).toBe('User with 7 not found.')
    ))
  });
});