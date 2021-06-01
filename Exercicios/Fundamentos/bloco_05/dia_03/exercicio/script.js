function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

function isHoliday(day) {
  if (day === 24 || day === 25 || day === 31) {
    return true;
  }
  return false;
}

function isFriday(day) {
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    return true;
  }
  return false;
}

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayItem = document.createElement('li');
    dayItem.className = 'day';
    
    if (isHoliday(day)) {
      dayItem.classList.add('holiday');
    }
    if (isFriday(day)) {
      dayItem.classList.add('friday');
    }

    dayItem.innerHTML = day;
    daysList.appendChild(dayItem);  
  }
}

function createButton(nameButton) {
  const button = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');

  button.id = 'btn-holiday';
  button.innerHTML = nameButton;

  buttonsContainer.appendChild(button);
}

createDaysOfTheWeek();
createDays();
createButton('Feriados');

// Escreva seu código abaixo.