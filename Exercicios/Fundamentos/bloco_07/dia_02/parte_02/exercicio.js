const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1
function addTurno(object, key, value) {
  object[key] = value;
}
addTurno(lesson2, 'turno', 'noite')
console.log(lesson2);

//Exercício 2
function listKeys(object) {
  console.log(Object.keys(object));
}
listKeys(lesson1);
