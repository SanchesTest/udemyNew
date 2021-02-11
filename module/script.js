<<<<<<< HEAD
const num = 1; // глобальная переменная

// анонимная самовызывающеися функция (function(){}());
(function(){

  //далее локальные переменные в самовызывающейся функе
  const num = 8;
  console.log(num); // 8

}());

console.log(num); // 1

// =================================
// обьектный интерфейс
// =================================

// самовызывающая функа экспортирует те методы и свойства что нам нужно снаружи

const user = (function(){

  const privat = function(){
    console.log('I am a private!');
  };

  return {
    sayHello: privat
  };

}());

=======
const num = 1; // глобальная переменная

// анонимная самовызывающеися функция (function(){}());
(function(){

  //далее локальные переменные в самовызывающейся функе
  const num = 8;
  console.log(num); // 8

}());

console.log(num); // 1

// =================================
// обьектный интерфейс
// =================================

// самовызывающая функа экспортирует те методы и свойства что нам нужно снаружи

const user = (function(){

  const privat = function(){
    console.log('I am a private!');
  };

  return {
    sayHello: privat
  };

}());

>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
user.sayHello(); // I am a private!