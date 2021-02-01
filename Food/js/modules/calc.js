function calc(){
  const resultCalc = document.querySelector('.calculating__result span');
  let sexCalc, heightCalc, weightCalc, ageCalc, ratioCalc;

  if(localStorage.getItem('sex')){
      sexCalc = localStorage.getItem('sex');
  } else {
      sexCalc = 'female';
      localStorage.setItem('sex', 'female');
  }

  if(localStorage.getItem('ratio')){
      ratioCalc = localStorage.getItem('ratio');
  } else {
      ratioCalc = 1.375;
      localStorage.setItem('ratio', 1.375);
  }

  function initLocalSet(selector, activClass) {
      const elem = document.querySelectorAll(selector);

      elem.forEach(i => {
          i.classList.remove(activClass);
          if(i.getAttribute('id') === localStorage.getItem('sex')){
              i.classList.add(activClass);
          }
          if(i.getAttribute('data-ratio') === localStorage.getItem('ratio')){
              i.classList.add(activClass);
          }
      });
  }

  initLocalSet('#gender div', 'calculating__choose-item_active');
  initLocalSet('.calculating__choose_big div', 'calculating__choose-item_active');

  function calcTotal() {
      if(!sexCalc || !heightCalc || !weightCalc || !ageCalc || !ratioCalc){
          resultCalc.textContent = '____';
          return; // досрочно прервать функу
      }

      if(sexCalc === 'female'){
          resultCalc.textContent = Math.round((447.6 + (9.2 * weightCalc) + (3.1 * heightCalc) - (4.3 * ageCalc)) * ratioCalc);
      } else {
          resultCalc.textContent = Math.round((88.36 + (13.4 * weightCalc) + (4.8 * heightCalc) - (5.7 * ageCalc)) * ratioCalc);
      }

  }

  calcTotal();

  function getStaticInfo(selector, activeClass) {
      const elem = document.querySelectorAll(selector); // получаем все дивы внутри родителя

      elem.forEach(i => {
          i.addEventListener('click', (e) => {
              if(e.target.getAttribute('data-ratio')){
                  ratioCalc = +e.target.getAttribute('data-ratio');
                  localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
              } else {
                  sexCalc = e.target.getAttribute('id');
                  localStorage.setItem('sex', e.target.getAttribute('id'));
              }

              elem.forEach(item => {
                  item.classList.remove(activeClass);
              });

              e.target.classList.add(activeClass);

              calcTotal();
          });
      });

  }

  getStaticInfo('#gender div', 'calculating__choose-item_active');
  getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

  function getDynamicInfo(selector) {
      const input = document.querySelector(selector);

      input.addEventListener('input', () => {

          if(input.value.match(/\D/g)){
              input.style.border = '1px solid red';
          } else {
              input.style.border = 'none';
          }

          switch (input.getAttribute('id')) {
              case 'height':
                  heightCalc = +input.value;
                  break;
              case 'weight':
                  weightCalc = +input.value;
                  break;
              case 'age':
                  ageCalc = +input.value;
                  break;
          }

          calcTotal();
      });
  }

  getDynamicInfo('#height');
  getDynamicInfo('#weight');
  getDynamicInfo('#age');
}

module.exports = calc;