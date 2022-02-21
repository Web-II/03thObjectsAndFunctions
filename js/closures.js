'use strict';

// const makeFunc = function () {
//   const message = 'Sir Bob is still around ;-)';
//   const displayName = function () {
//     console.log(message);
//   };
//   return displayName;
// };
// const aDisplayFunction = makeFunc();
// aDisplayFunction();

// // function factory
const makeFunc = function (title) {
  const message = `${title} Bob is still around ;-)`;
  const displayName = function () {
    console.log(message);
  };
  return displayName;
};
const misterDisplayFunction = makeFunc('Mister');
const sirDisplayFunction = makeFunc('Sir');
misterDisplayFunction();
sirDisplayFunction();

// // event handling

// example1
const makeBtnclickHandler = function (btnId) {
  return function () {
    alert(`You clicked button ${btnId}`);
  };
};

const initButtons = function () {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('btn' + i).onclick = makeBtnclickHandler(i);
  }
};

// // example2 - without closures
// const initButtons = function () {
//   for (let i = 1; i <= 3; i++) {
//     document.getElementById('btn' + i).onclick = function () {
//       alert(`You clicked button ${i}`);
//     };
//   }
// };

// // example3 - with use of this
// const initButtons = function () {
//   for (let i = 1; i <= 3; i++) {
//     document.getElementById('btn' + i).onclick = function () {
//       alert(`You clicked button ${this.id}`);
//     };
//   }
// };

window.onload = initButtons;

// // example try .. catch .. finally
// try {
// 	throw {
// 		name: 'SomethingWentWrongError',
// 		message: 'Something went wrong. You should fix it'
// 	};
// } catch (e) {
// 	// handle the exception here
// 	console.log(`Error ${e.name}: ${e.message}`);
// } finally {
// 	// this is executed even if an exception occurs
// }
