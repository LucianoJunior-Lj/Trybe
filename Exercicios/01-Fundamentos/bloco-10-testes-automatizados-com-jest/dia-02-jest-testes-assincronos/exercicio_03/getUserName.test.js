const getUserName = require('./getUserName');

describe('testing getUserName function', () => {
  it('should return the user who has the id searched', async () => {
    await expect(getUserName(1)).resolves.toBe('Mark');
  });

  it('should return an error message, when id is not found', async () => {
    expect.assertions(1);
    await expect(getUserName(7)).rejects.toEqual(new Error ('User with 7 not found.'));
  });
});