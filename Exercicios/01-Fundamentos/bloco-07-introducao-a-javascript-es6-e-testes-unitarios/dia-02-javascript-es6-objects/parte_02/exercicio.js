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

//Exercício 3
function showSize(object) { 
  console.log(Object.keys(object).length);
}
showSize(lesson3);

//Exercício 4
function showValues(object) { 
  console.log(Object.values(object));
}
showValues(lesson2);

//Exercício 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//Exercício 6
function getTotalNumberOfStudents(object) {
  let totalNumberOfStudents = 0;
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      totalNumberOfStudents += object[key].numeroEstudantes
    }
  }
  return totalNumberOfStudents;
}
console.log(getTotalNumberOfStudents(allLessons));

//Exercício 7
const getValueByNumber = (object, index) => Object.values(object)[index];
console.log(getValueByNumber(lesson1, 0));

//Exercício 8
function verifyPair(object, key, value) {
  const list = Object.entries(object);
  for (const index in list) {
    if (Object.hasOwnProperty.call(list, index)) {
      if(list[index][0] === key && list[index][1] === value) {
        return true;
      }
    }
  }
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

//Bonus 1
function countStudents(object) {
  let totalNumberOfStudents = 0;
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (object[key].materia === 'Matemática') {
        totalNumberOfStudents += object[key].numeroEstudantes        
      }
    }
  }
  return totalNumberOfStudents;
}
console.log(countStudents(allLessons));

//Bonus 2
function createReport(object, teacher) {
  const report = {
    professor: teacher,
    aulas: [],
    estudantes: 0,
  };

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (object[key].professor === teacher) {
        report.aulas.push(object[key].materia);
        report.estudantes += object[key].numeroEstudantes;
      }
    }
  }
  
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'))
