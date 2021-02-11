'use strict';

//Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch.

// try {
//   console.log('Normal');
//   console.log(n); // нет переменной, дальше будет блок catch
//   console.log('Result');
// } catch(error) {
//   console.log(error); // подсказка в чем дело (script.js:11 ReferenceError: n is not defined)
//   console.log(error.name); // подсказка в чем дело (ReferenceError)
//   console.log(error.message); // подсказка в чем дело (n is not defined)
//   console.log(error.stack); // подсказка в чем дело (script.js:11 ReferenceError: n is not defined)
// } finally {
//   // отработает в любом случае
//   console.log('section finnaly');
// }

// // отработает в любом случае
// console.log('working');

//================================================
// будем получать ошибку на  contact.htnl, так как там нету кнопки с классом .act
//================================================

// уходим от ошибки, скрипт не падает

try {
  document.querySelector('.act').addEventListener('click', () => {
    console.log('CLICK');
  });
} catch(e) {
  console.log(`${e.name} = This str does not button with class '.act'`);
}

console.log('working');