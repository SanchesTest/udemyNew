window.addEventListener('DOMContentLoaded', () => {

  const tabContent = document.querySelectorAll('.tabcontent'),
        tab = document.querySelectorAll('.tabheader__item'),
        tabs = document.querySelector('.tabheader__items');

  function hide(){
    tabContent.forEach( (i) => {
      i.classList.remove('show', 'fade');
      i.classList.add('hide');
    });

    tab.forEach((i) => {
      i.classList.remove('tabheader__item_active');
    });
  }

  function show(i = 0){
    tabContent[i].classList.remove('hide');
    tabContent[i].classList.add('show', 'fade');

    tab[i].classList.add('tabheader__item_active');
  }

  hide();
  show();

  tabs.addEventListener('click', (e) => {
    const tg = e.target;

    if(tg && tg.classList.contains('tabheader__item')){
      tab.forEach((it, i) => {
        if(tg == it){
          hide();
          show(i);
        }
      });
    }
  });

});