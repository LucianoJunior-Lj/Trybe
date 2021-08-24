const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);

      if (animal) {
        return resolve(animal);
      }

      return reject(new Error('Não possui animal com esse nome.'));
    }, 100);
  })
);

module.exports = findAnimalByName;