<<<<<<< HEAD
'use strict';

// function showThis(a, b){
//   console.log(this);
//   function sum(){
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// console = 9 / undefined

// 1) обычная фнк.: this = window, но если стоит use strict = undefined 

// ==============================================

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function(){
//     console.log(this);
//   }
// };

// obj.sum();

// console = {a: 20, b: 15, sum: ƒ}

// 2) контекст у методов обьекта = обьект

// ==============================================

// function User(name, id){
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log("Hello " + this.name);
//   };
// }
//
// let ivan = new User('Ivan', 23);


// 3) this в конструкторах и классах, это новый экземпляр обьекта

// ==============================================

// Придать контекст вызова функции = call / apply
// заработай на обьекте и используй его данные

// function saveName(surname) {
//   console.log(this);
//   console.log(this.name);
// }
//
// const user = {
//   name: 'John'
// };
//
// saveName.call(user); // {name: "John"} / John
// saveName.apply(user); // {name: "John"} / John

// ==============================================
//разница между call / apply
// при передаче аргументов в apply перечисляются в массиве

// function saveName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
//
// const user2 = {
//   name: 'John'
// };
//
// saveName.call(user2, ' Smith'); // {name: "John"} / John Smith
// saveName.apply(user2, [' Smith']); // {name: "John"} / John Smith

// ==============================================
// Метод bind() создаёт новую функцию,
// которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение
//ункция умножения значения на 2
// олучается double новая функа у которой контекст = 2 и которая удваивает входящее значение

// function count(num) {
//   return this * num;
// }
// const double = count.bind(2);
//
// console.log(double(13)); // 26
// console.log(double(3)); // 6

// Такуюже функу можно написать проще

// const double2 = num => num * 2;
//
// console.log(double2(5)); // 10

// ==============================================

// стрелочная функа берет контекст у родителя

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.num);
//     };
//     say();
//   }
// };
//
// obj.sayNumber(); // 5






=======
'use strict';

// function showThis(a, b){
//   console.log(this);
//   function sum(){
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// console = 9 / undefined

// 1) обычная фнк.: this = window, но если стоит use strict = undefined 

// ==============================================

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function(){
//     console.log(this);
//   }
// };

// obj.sum();

// console = {a: 20, b: 15, sum: ƒ}

// 2) контекст у методов обьекта = обьект

// ==============================================

// function User(name, id){
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log("Hello " + this.name);
//   };
// }
//
// let ivan = new User('Ivan', 23);


// 3) this в конструкторах и классах, это новый экземпляр обьекта

// ==============================================

// Придать контекст вызова функции = call / apply
// заработай на обьекте и используй его данные

// function saveName(surname) {
//   console.log(this);
//   console.log(this.name);
// }
//
// const user = {
//   name: 'John'
// };
//
// saveName.call(user); // {name: "John"} / John
// saveName.apply(user); // {name: "John"} / John

// ==============================================
//разница между call / apply
// при передаче аргументов в apply перечисляются в массиве

// function saveName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
//
// const user2 = {
//   name: 'John'
// };
//
// saveName.call(user2, ' Smith'); // {name: "John"} / John Smith
// saveName.apply(user2, [' Smith']); // {name: "John"} / John Smith

// ==============================================
// Метод bind() создаёт новую функцию,
// которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение
//ункция умножения значения на 2
// олучается double новая функа у которой контекст = 2 и которая удваивает входящее значение

// function count(num) {
//   return this * num;
// }
// const double = count.bind(2);
//
// console.log(double(13)); // 26
// console.log(double(3)); // 6

// Такуюже функу можно написать проще

// const double2 = num => num * 2;
//
// console.log(double2(5)); // 10

// ==============================================

// стрелочная функа берет контекст у родителя

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.num);
//     };
//     say();
//   }
// };
//
// obj.sayNumber(); // 5






>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
