<<<<<<< HEAD
const btn = document.querySelectorAll('button');
const overlaytn = document.querySelector('.overlay');
const overlaytnChild = document.querySelector('.overlay button');
const link = document.querySelector('.link');

// btn[1].onclick = function(){
//   console.log('Clicked on the second element');
// };

//===============Функция удаления елемента со страницы
const deleteElement = (e) => {
  e.target.remove();
};

btn[2].addEventListener('mouseenter', deleteElement);

//===============Отмена стандартого поведения
link.addEventListener('click', (e) => {
  e.preventDefault();
});

//===============Всплытие событий
//Сначала отрабатывает событие на вложенном елементе, потом на родителе
const bubblingУvents = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);

  // e.currentTarget Чтобы отчетливо посмотреть на ком было событие\ Определяет элемент, в котором в данный момент обрабатывается событие

};

overlaytn.addEventListener('click', bubblingУvents);
overlaytnChild.addEventListener('click', bubblingУvents);

//===============Вывод функции только раз
let i = 0;
const workOnlyOnce = (e) => {
  console.log('Clicked on the second element');
  i++;
  if(i == 1){
    btn[1].removeEventListener('click', workOnlyOnce);
  }
};

btn[1].addEventListener('click', workOnlyOnce);

//===============Наведение мыши
btn[1].addEventListener('mouseenter', () => {
  console.log('Hover on the second element');
});

//===============Опции событий addEventListener
// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

const opt = (e) => {
  console.log(e.type);
};

btn[3].addEventListener('click', opt, {once: true});
=======
const btn = document.querySelectorAll('button');
const overlaytn = document.querySelector('.overlay');
const overlaytnChild = document.querySelector('.overlay button');
const link = document.querySelector('.link');

// btn[1].onclick = function(){
//   console.log('Clicked on the second element');
// };

//===============Функция удаления елемента со страницы
const deleteElement = (e) => {
  e.target.remove();
};

btn[2].addEventListener('mouseenter', deleteElement);

//===============Отмена стандартого поведения
link.addEventListener('click', (e) => {
  e.preventDefault();
});

//===============Всплытие событий
//Сначала отрабатывает событие на вложенном елементе, потом на родителе
const bubblingУvents = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);

  // e.currentTarget Чтобы отчетливо посмотреть на ком было событие\ Определяет элемент, в котором в данный момент обрабатывается событие

};

overlaytn.addEventListener('click', bubblingУvents);
overlaytnChild.addEventListener('click', bubblingУvents);

//===============Вывод функции только раз
let i = 0;
const workOnlyOnce = (e) => {
  console.log('Clicked on the second element');
  i++;
  if(i == 1){
    btn[1].removeEventListener('click', workOnlyOnce);
  }
};

btn[1].addEventListener('click', workOnlyOnce);

//===============Наведение мыши
btn[1].addEventListener('mouseenter', () => {
  console.log('Hover on the second element');
});

//===============Опции событий addEventListener
// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

const opt = (e) => {
  console.log(e.type);
};

btn[3].addEventListener('click', opt, {once: true});
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
// Сработает только раз