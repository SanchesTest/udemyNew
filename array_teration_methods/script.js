'use strict';
// ==============================================================
//========== filter = фильтрует елементы внутри массива
// ==============================================================

//получаем имена которые меньше чем 5 символов
const names = ['Ivan', 'Sasha', 'Ben', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames); // [ 'Ivan', 'Ben' ]

// ========================

//получаем все числа которые меньше 10000
const numMass = [5000, 14000, 8000];

const returnNum = numMass.filter(function(get){
    if(get < 10000){
        return get;
    }
});

console.log(returnNum); // [ 5000, 8000 ]

// ==============================================================
//========== map = берет исходный масс и мемняет елементы внутри него
// ==============================================================

const answers = ['IvAn', 'AnnA', 'hELLO', 'Okey'];

//приводим к нижнему регистру
const result = answers.map(item => {
    return item.toLowerCase();
});
// -------------------
//Сокращенный вариант верхней функи
// const result = answers.map(item => item.toLowerCase());
// -------------------
console.log(result); //[ 'ivan', 'anna', 'hello', 'okey' ]

// -------------------
//Можно перезаписать старый масс
let answers2 = ['IvAn', 'AnnA', 'hELLO', 'Okey'];
answers2 = answers2.map(i => i.toLowerCase());

console.log(answers2); //[ 'ivan', 'anna', 'hello', 'okey' ]

// ==============================================================
// every = если все елементы подойдут по условию, вернет = true 
// some = если хоть один елемент подойдет по условию, вернет = true
// ==============================================================

const some = [4, 'heh', 'tuyhcsj'];

// проверяем есть ли в массиве хоть одно число
console.log(some.some(item => typeof(item) === 'number')); // true

// проверяем все ли елементы массива == числа
console.log(some.every(item => typeof(item) === 'number')); // false

// ==============================================================
// reduce = собирает массив в одно единое целое
// ==============================================================

const arr = [4, 5, 1, 3, 2, 6];

//==== получаем сумму всех чисел массива
// sum = сумма всех елементов
// current = каждый последующий елемент массива
// 3 = не обязательный аргумент, задает начальное значение sum
const resultArr = arr.reduce((sum, current) => sum + current, 3);

console.log(resultArr); // 24

// -------------------

// Слаживаем строки
// test = не обязательный аргумент, задает начальное значение sum
const str = ['apple', 'orange', 'tomato'];

const res = str.reduce((sum, current) => `${sum} ${current}`, 'test');

console.log(res); // test apple orange tomato

// ==============================================================
// Обьединяем знания
// ==============================================================

// Вытаскиваем имена
// entries = превращает обьект в матрицу, массив в массиве
// [
//     [ 'ivan', 'persone' ],
//     [ 'ann', 'persone' ],
//     [ 'dog', 'animal' ],
//     [ 'cat', 'animal' ]
// ]

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone') // [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
.map(item => item[0]); // [ 'ivan', 'ann' ]

console.log(newArr); 
