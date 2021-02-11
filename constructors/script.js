'use strict';

//создаем конструктор. Нужно для создания новых однотипных обьектов
function User(name, id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log(`Hello ${this.name}`);
  };
}

//в переменный создается оьект ссылающийся на конструктор
const ivan = new User('Ivan', 28); //User { name: 'Ivan', id: 28, human: true }
const alex = new User('Alex', 31); //User { name: 'Alex', id: 31, human: true }

// добавляем метод в конструктор
User.prototype.exit = function(){
  console.log(`User ${this.name} gone`);
};

ivan.exit(); // User Ivan gone

//вызываем переменную с методом конструктора
ivan.hello(); // Hello Ivan
alex.hello(); // Hello Alex

console.log(ivan);