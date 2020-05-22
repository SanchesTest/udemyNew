'use strict';

const obj = {
  name: 'John',
  age: 25,
  car: true,
  fly: 'none',
  house: {
    room: 3,
    floor: 1
  }
};

// add property to object
obj.sex = 'male';

// delete property to object
delete obj.name;

// iterate over an object
for(let key in obj){

  // для того, если в обьекте есть другие обьекты
  if(typeof(obj[key]) === 'object'){
    for(let i in obj[key]){
      console.log(`Property ${i} have value ${obj[key][i]}`);
    }
  } else{
    console.log(`Property ${key} have value ${obj[key]}`);
  }
}

// Получить массив со всеми ключами
Object.keys(obj); //[ 'age', 'car', 'fly', 'house', 'sex' ]

// Получить количество ключей в обьекте
Object.keys(obj).length; //5

// Создаем метод (makeTest) внутри обьекты
const objTwo = {
  name: 'John',
  age: 25,
  car: true,
  fly: 'none',
  house: {
    room: 3,
    floor: 1
  },
  makeTest: function(){
    console.log('test');
  }
};

objTwo.makeTest(); //test

// Деструктуризация обьекта
const objThree = {
  name: 'John',
  age: 25,
  car: true,
  fly: 'none',
  house: {
    room: 3,
    floor: 1
  }
};

const {room, floor} = objThree.house;
console.log(room); // 3
console.log(floor); // 1