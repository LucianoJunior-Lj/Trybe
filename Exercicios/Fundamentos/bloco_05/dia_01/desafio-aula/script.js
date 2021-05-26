document.getElementById('header-container').style.backgroundColor = 'rgb(54, 212, 81)';

document.getElementById('container').style.backgroundColor = ('rgb(253, 251, 251)');
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'rgb(250, 127, 114)';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'rgb(250, 250, 70)';

let emergencyTasksDiv = document.querySelectorAll('.emergency-tasks div h3');
for (let key = 0; key < 2; key += 1) {
  emergencyTasksDiv[key].style.backgroundColor = 'rgb(128,0,128)';
}

let noEmergencyTasksDiv = document.querySelectorAll('.no-emergency-tasks div h3');
for (let key = 0; key < 2; key += 1) {
  noEmergencyTasksDiv[key].style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = 'rgb(3, 107, 25)';
