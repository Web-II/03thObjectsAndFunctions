'use strict';

const myAvatar = {
  name: 'Bob',
  points: 20,
  gender: 'male',
  hair: { color: 'black', cut: 'punk' },
};

const sayHiClicked = function () {
  const title = myAvatar.gender === 'male' ? 'Sir' : 'Miss';
  alert(`Hi, I am ${title} ${myAvatar.name}`);
  alert(`event.target: ${event.target} & id: ${event.target.id}`);
};

const init = function () {
  const sayHiButton = document.getElementById('sayHi');
  sayHiButton.onclick = sayHiClicked;
};

const beClever = function (event) {
  alert(`I know you clicked on button that says ${event.target.value}`);
};

// const init = function() {
// 	const sayHiButton = document.getElementById('sayHi');
// 	sayHiButton.addEventListener('click', sayHiClicked);
// 	sayHiButton.addEventListener('click', beClever);
// };

window.onload = init;
