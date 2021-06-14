'use strict';

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     console.log('Подготовка данных...');
  
//     const product = {
//       name: 'TV',
//       price: 2000
//     };
  
//     resolve(product); // если все прошло успешно
//   }, 2000);
// });

// req.then((product) => { // выполняем при успехе, работа от вызова  resolve()

//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//       reject(); // если произошла ошибка 
//     }, 2000);

//   }).then(data => {

//     data.modify = true;
//     return data;

//   }).then((data) => {

//     console.log(data);

//   });

// }).catch(() => { // если произошла ошибка, работа от вызова reject()
//   console.error('Произошла ошибка');
// }).finally(() => { // выполнится в любом случае
//   console.log('finally');
// });

// // ===========================================

// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));

// принимает массив с промисами, ждет окончания всех промисов, и только потом выполняется
// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('all');
// });

// //выполнится если самый первый промис отработал
// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log('all');
// });

// ===========================================
// My test code
// ===========================================

const req = new Promise((resolve, rejact) => {
  const arr = {
    name: 'Alex',
    age: 25
  };

  resolve(arr);
});

req.then(data => {
  console.log(`Getting data ${data.name}...`);
  return data;
})
.then((data) => {
  return new Promise((resolve, rejact) => {
    setTimeout(() => {
      console.log(`Data processing ${data.name}...`);
      resolve(data);
    }, 2000);
  });
})
.then(data => {
  return new Promise((resolve, rejact) => {
    setTimeout(() => {
      data.add = Math.random();
      resolve(data);
    }, 2000);
  });
})
.then(data => {
  console.log(`Data output ${data.name}...`);
  return data;
})
.then(data => {
  setTimeout(() => {
    console.log(data);
  }, 2000);
})
.catch(() => {
  console.log('Something went wrong...');
});

