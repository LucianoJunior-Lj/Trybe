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

//exercicio 1
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

//exercicio 2 e 4
function createButton(nameButton, idButton) {
  const button = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');

  button.id = idButton;
  button.innerHTML = nameButton;

  buttonsContainer.appendChild(button);
}

//exercicio 3
function changeColorHolidays() {
  const holidaysList = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidaysList.length; index += 1) {
    if (holidaysList[index].style.backgroundColor === 'green') {
      holidaysList[index].style.backgroundColor = 'rgb(238,238,238)';
      holidaysList[index].style.color = '#666';
    }
    else{
      holidaysList[index].style.backgroundColor = 'green';
      holidaysList[index].style.color = 'white';
    }
  }
}

//Exercicio 5
function changeTextOfFriday() {
  const fridaysList = document.querySelectorAll('.friday');
  for (let index = 0; index < fridaysList.length; index += 1) {
    if (fridaysList[index].innerHTML === 'Hj é sexta') {
      fridaysList[index].innerHTML = parseInt(fridaysList[index].previousSibling.innerHTML) + 1;
    }
    else{
      fridaysList[index].innerHTML = 'Hj é sexta';
    }
  }
}

//Exercicio 6
function addZoom(element) {
  element.target.style.fontSize = '23px';
}

function removeZoom(element) {
  element.target.style.fontSize = '20px';
}

function zoom(nameClass) {
  const daysList = document.querySelectorAll(nameClass);
  for (let index = 0; index < daysList.length; index += 1) {
    daysList[index].addEventListener('mouseover', addZoom);
    daysList[index].addEventListener('mouseout', removeZoom);  
  }
}

//Exercicio 7
function changeText(element) {
  const task = document.createElement('span');
  task.innerHTML = element.target.value;
  document.getElementById('btn-add').addEventListener('click', function () {
    document.querySelector('.my-tasks').appendChild(task);
  });
}

createDaysOfTheWeek();
createDays();
createButton('Feriados', 'btn-holiday');
document.getElementById('btn-holiday').addEventListener('click', changeColorHolidays);
createButton('Sexta-feira', 'btn-friday');
document.getElementById('btn-friday').addEventListener('click', changeTextOfFriday);
zoom('.day');
document.getElementById('task-input').addEventListener('change', changeText);
