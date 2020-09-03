// Вызов через 2 сек., с передачей аргумента
const timerId = setTimeout(function(text){
  console.log(text);
}, 2000, 'hello');

// =========================================
// =========================================

// Вызов через 2 сек., с передачей функи в переменную
const timer2 = setTimeout(logger, 2000);

function logger(){
  console.log('logger');
}

// Остановить таймер
clearInterval(timer2);

// =========================================
// =========================================

//по клику функа отработает 4 раза, после чего отключается

const btn = document.querySelector('.btn');
let timer3;
let count = 0;

btn.addEventListener('click', () => {
  timer3 = setInterval(logger2, 500);
});

function logger2(){
  if(count == 3){
    clearInterval(timer3);
  }
  console.log('loger2');
  count++;
}

// =========================================
// =========================================

//Рекурсивный вызов setTimeout
let i = 0;
let id = setTimeout(function log(){
  console.log('log');
  id = setTimeout(log, 500);

  if(i == 3){
    clearTimeout(id);
  }
  i++;

}, 500);

// =========================================
// =========================================

// Анимируем кубик

const btn2 = document.querySelector('.btn'); //кнопка запуска

function myAnimation(){
  const elem = document.querySelector('.box'); //кубик
  let pos = 0; //позиция

  // функа запуска через определенный промежуток

  const id2 = setInterval(frame, 10);

  function frame(){
    if(pos == 300){
      clearInterval(id2);
    } else{
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn2.addEventListener('click', myAnimation);





















