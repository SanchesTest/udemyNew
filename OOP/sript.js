'use strict';

const soldier = {
  health: 400,
  armor: 100
};

// Добавляем новый ключ обьекту с другого обьекта
const john = {
  health: 100
};

Object.setPrototypeOf(john, soldier); //john.armor = 100

//Создаем новый обьект с прототипным наследованием от другого обьекта
const sam = Object.create(soldier); //sam.armor = 100

