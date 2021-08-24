const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsList = Animals.filter((animal) => animal.age === age);

      if (animalsList.length > 0) {
        return resolve(animalsList);
      }

      return reject(new Error('Não possui animal com essa idade.'));
    }, 100);
  })
);

module.exports = findAnimalByAge;