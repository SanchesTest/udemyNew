const btn2 = document.querySelector('.btn'); //кнопка запуска
const elem = document.querySelector('.box'); //кубик
let pos = 0; //позиция

function myAnimation(){
  pos++;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';

  if(pos < 300){
    requestAnimationFrame(myAnimation);
  }

}

btn2.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id); // Отменяет анимацию

// 'click', () => requestAnimationFrame(myAnimation) = чтобы не вызывалась сразу а только после клика