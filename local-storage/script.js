'use strict';

//установить значение в localStorage
// localStorage.setItem('number', 5);

//получить значение в localStorage
// localStorage.getItem('number');

//удалить значение в localStorage
// localStorage.removeItem('number');

//полностью очистить localStorage
// localStorage.clear();



const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

// если был нажат, то при входе на сайт авто установка чекбокса
if(localStorage.getItem('isChecked')){
  checkbox.checked = true;
}      

//при нажатии отправляем в localStorage
checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

//при входе если ранее была нажата кнопка, красим форму
if (localStorage.getItem('bg') === 'changed'){
  form.style.backgroundColor = 'red';
}

//при нажатии, если ранее была нажата, красим в белый, если первое нажатие, в красный
change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed'){
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#ffffff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  }
});


//добавляем обьект в localStorage
const persone = {
  name: 'Alex',
  age: 25
};

//преобразуем в json формат и отправляем в localStorage
const serializePersone = JSON.stringify(persone);
localStorage.setItem('alex', serializePersone);

//достаем с localStorage и преобразуем в обьект
const test = JSON.parse(localStorage.getItem('alex'));
