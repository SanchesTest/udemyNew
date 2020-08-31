window.addEventListener('DOMContentLoaded', () => {

  const box = document.querySelector('.box');
  const boxTwo = document.querySelector('.box-2');

  //Срабатывает при таче
  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('touchstart');

    console.log(e.touches); // сколько пальцев на экране

    console.log(e.targetTouches); // сколько пальцев на элементе

    console.log(e.changedTouches); // пальцы которые участвуют в текущем событии
  });

  //Срабатывает при движенни пальцем по экрану
  box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log('touchemove');
  });

  //Срабатывает когда палец оторвался от экрана
  box.addEventListener('touchend', (e) => {
    e.preventDefault();

    console.log('touchend');
  });

});
