const findAnimalByName = require('./findAnimalByName');

describe('testing findAnimalsByName function', () => {
  it('should return the wanted animal', async () => {
    const wantedAnimal = { name: 'Soneca', age: 2, type: 'Dog' }
    const foundAnimal = await findAnimalByName('Soneca');
    expect(foundAnimal).toEqual(wantedAnimal);
  });

  it('should return an error message, when name is not found', async () => {
    expect.assertions(1);
    await expect(findAnimalByName('Test')).rejects.toEqual(new Error ('Não possui animal com esse nome.'));
  });
});