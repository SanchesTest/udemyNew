'use strict';
const box = document.querySelector('.box');
const box1 = box;

box1.clientHeight // высота без учета маргинов и бордеров
box1.clientWidth // ширина без учета маргинов и бордеров

box1.offsetHeight // высота c учетом маргинов и бордеров
box1.offsetWidth // ширина c учетом маргинов и бордеров

box1.scrollTop // прокрутка елемента от верха стр.

box1.scrollHeight // высота с учетом скрытого пространства

//=====================  По клику раскрываем блок
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    box1.style.height = box1.scrollHeight + 'px';
});

box1.getBoundingClientRect() // {x: 416.5, y: 50, width: 400, height: 350, top: 50, …}
box1.getBoundingClientRect().top // 50 = координаты от верха

//=====================  получаем значение стилей елемента
const style = window.getComputedStyle(box); // полцчим массив со всеми стилями и значениями елемента

style.display // block
style.border // 0px none rgb(0, 0, 0)
style.padding // 10px

//===================== получаем стили before, after
const pseudoStyle = window.getComputedStyle(box, 'before');

console.log(pseudoStyle.content); // "hello"

//===================== получаем количество прокрученных пикселей на странице
document.documentElement.scrollTop

btn.addEventListener('click', () => {
    console.log(document.documentElement.scrollTop);
});

//===================== получаем ширину экрана браузера
document.documentElement.clientWidth

//===================== прокрутка вверх

const topBtn = document.querySelector('.top');

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//или же, но не плавно
document.documentElement.scrollTop = 0;

//===================== прокрутка от текущего положения вниз
const topBtn2 = document.querySelector('.scroll-bot');

topBtn2.addEventListener('click', () => {
    window.scrollBy(0, 150);
});

//===================== прокрутка наверх не доходя 150px
const topBtn3 = document.querySelector('.scroll-top');

topBtn3.addEventListener('click', () => {
    window.scrollTo(0, 150);
});


