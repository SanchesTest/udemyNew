'use strict';

let arr = [1,2,3,4,5];

// Удаляем последний елемент
arr.pop(); //[ 1, 2, 3, 4 ]

// Добавляем в конец массива
arr.push(10); //[ 1, 2, 3, 4, 5, 10 ]

// ================================================

// Перебор масиива = for of
for(let value of arr){
  console.log(value); //1 2 3 4 10
}

// ================================================

// Перебор масиива = forEach

arr.forEach(function(item, i, arr){
  console.log(`${i}: ${item} in massive ${arr}`);
});

// 0: 1 in massive 1,2,3,4,10
// 1: 2 in massive 1,2,3,4,10
// 2: 3 in massive 1,2,3,4,10
// 3: 4 in massive 1,2,3,4,10
// 4: 10 in massive 1,2,3,4,10

// ================================================

// Перебрать и формировать массив, елементы введенные через (, )

const str = prompt("", "");
const products = str.split(", ");

// Array(3)
// 0: "eerere"
// 1: "tgtgt"
// 2: "dfdfd"
// length: 3

// ["tomato", "potato", "apple", "carrot"]


// ================================================

// Перебрать строку и формировать массив, елементы введенные через (, )

const str2 = prompt("", "");
const products2 = str2.split(", ");

// склеить массив в строку и вывести елементы с разделителем ('; ')

console.log(products2.join('; ')); //apple; carrot; potato; tomato

// ================================================

// Сортировка sort(), сортирует в алфавитном порядке

const arr3 = ['c', 'a', 'b', 'e', 'b', 'q'];

arr3.sort(); //[ 'a', 'b', 'b', 'c', 'e', 'q' ]

// ================================================

// Сортировка sort(), сортируем числа

const arr4 = [12, 1, 13, 2, 26, 8];

arr4.sort(compareNum); //[ 1, 2, 8, 12, 13, 26 ]

function compareNum(a, b){
  return a - b;
}

// ================================================
// filter
// ================================================

// фильтруем массив и воводим имена до 4 символов
let names = ['Ivan', 'Ann', 'Joseph', 'Nikita'];

let shortNames = names.filter((name) => {
  return name.length < 5;
});

console.log(shortNames); // [ 'Ivan', 'Ann' ]

// ================================================
// map
// ================================================

// Выводим имена в нижнем регистре
let answers = ['IvAn', 'aflExANDr', 'IndiAno', 'toM'];

answers = answers.map((item) => {
  return item.toLocaleLowerCase();
});

console.log(answers); // [ 'ivan', 'aflexandr', 'indiano', 'tom' ]