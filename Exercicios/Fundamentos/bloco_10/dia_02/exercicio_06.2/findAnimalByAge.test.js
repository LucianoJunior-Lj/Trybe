const findAnimalByAge = require('./findAnimalByAge');

describe('testing findAnimalsByAge function', () => {
  it('should return the animal with the desired age', async () => {
    const animalsList = [{ name: 'Soneca', age: 2, type: 'Dog' }];
    const foundAnimal = await findAnimalByAge(2);
    expect(foundAnimal).toEqual(animalsList);
  });

  it('should return an error message, when name is not found', async () => {
    expect.assertions(1);
    await expect(findAnimalByAge(8)).rejects.toEqual(new Error ('Não possui animal com essa idade.'));
  });
});