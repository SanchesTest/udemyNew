'use strict';

// при каждом вызове отдает последовательный результат
function* generator(){
  yield 'S';
  yield 'c';
  yield 'r';
  yield 'i';
  yield 'p';
  yield 't';
}

// помещаем ссылку функции в переменную
const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

// Выведет...
// done: true = означает что генератор выполнился полностью
// { value: 'S', done: false }
// { value: 'c', done: false }
// { value: 'r', done: false }
// { value: 'i', done: false }
// { value: 'p', done: false }
// { value: 't', done: false }
// { value: undefined, done: true } 


// console.log(str.next().value); // S
// console.log(str.next().value); // c

// ====================================================
// автоматически формируем функу генератор
// ====================================================

function* count(n){
  for(let i = 0; i < n; i++){
    yield i;
  }
}

const counter = count(7);

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2


// Перебераем функу через for of

for(let k of count(7)){
  console.log(k);
}

// Выведет...
// 0
// 1
// 2
// 3
// 4
// 5
// 6

// https://learn.javascript.ru/generators