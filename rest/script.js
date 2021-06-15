// Синтаксис оставшихся параметров функции позволяет 
// представлять неограниченное множество аргументов в виде массива.
// ...rest
const log = function(a, b, ...rest){
  console.log(a, b, rest);
};

log('one', 'two', 'rest three', 'rest four'); // one two [ 'rest three', 'rest four' ]

// ===============================

// если параметр basis не передан, он будет по дефолту = 2
function calcOrDouble(num, basis = 2){
  console.log(num * basis);
}

calcOrDouble(3);

// ===============================
// spred = розворот массива на список элементов
// ===============================
// берем 2 массива и находим самое большое значение
// Math.max(...arr1, ...arr2) = масивы розвернуться и внутрь попадут их значения после чего выберется большее

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(...arr1, ...arr2);   

console.log(res); // 43

// ===============================
// object spred = розворот обьекта на список элементов
// ===============================

const avatar = 'Photo';

const user = {
  name: 'default',
  pass: 'querty',
  rigths: 'user'
}

const admin = {
  name: 'admin',
  pass: 'root'
}

// обьеденить в один обьект с перезаписью параметров от админа юзеру
const res2 = Object.assign(user, admin); // { name: 'admin', pass: 'root', rigths: 'user' }

//==============================

// тоже самое только ES8 + новое свойство
const res3 = {...user, ...admin, avatar} // { name: 'admin', pass: 'root', rigths: 'user', avatar: 'Photo' }

// ===============================
// Деструктуризация
// ===============================
// Вытаскиваем свойства с обьекта и пихаем в переменные

const user2 = {
  name: 'Tomas',
  pass: 'querty',
  rigths: 'user'
}

const {name, pass, rigths} = user2;

console.log(name, pass, rigths); // Tomas querty user

// ===============================
// Деструктуризация сложная
// ===============================

const user3 = {
  name: {
    first: 'Sam',
    second: 'Smith'
  },
  pass: 'querty',
  rigths: 'user'
}

const {name: {first, second}, pass, rigths} = user3;

console.log(first, second, pass, rigths); // Sam Smith querty user