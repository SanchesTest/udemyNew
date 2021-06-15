'use strict';

// Используем деструктуризацию и параметры по умолчанию
// Не важно в каком порядке передаются параметры
// деструктуризация connect({})
// function connect({} = {}) теперь можно вызвать функу без {}

function connect({
  host = 'localHost',
  port = 3000,
  user = 'default'} = {}){
    console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

connect({
  port: 2000,
  host: 'NewHost'
}); // host: NewHost, port: 2000, user: default