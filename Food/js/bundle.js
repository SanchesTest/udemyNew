/******/ (() => { // webpackBootstrap
<<<<<<< HEAD
/******/ 	"use strict";
=======
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
<<<<<<< HEAD
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);
=======
/***/ ((module) => {

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
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
<<<<<<< HEAD
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards(){
  class MenuCard{
    constructor(src, alt, headText, text, price, parentSelector, ...classes){
        this.src = src;
        this.alt = alt;
        this.headText = headText;
        this.text = text;
        this.price = price;
        this.classes = classes; // Это массив
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAH();
    }

    // конвертация доллара в грн.
    changeToUAH(){
        this.price = this.price * this.transfer;
    }

    createCard(){
        const menuItem = document.createElement('div');

        // Если в (...classes) ничего не передается
        // Записываем дефолтный класс
        if (this.classes.length === 0){
            this.menuItem = 'menu__item';
            menuItem.classList.add(this.menuItem);
        } else {
            // Используем rest оператор
            // Добавляем все классы которые есть в массиве к елементу
            this.classes.forEach(className => menuItem.classList.add(className));
        }

        menuItem.innerHTML = `
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.headText}</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
        `;

        this.parent.append(menuItem);

    }

}

// Получаем данные с базы

// throw позволяет генерировать исключения, определяемые пользователем. При этом выполнение текущей функции будет остановлено (инструкции после throw не будут выполнены), и управление будет передано в первый блок catch в стеке вызовов. Если catch блоков среди вызванных функций нет, выполнение программы будет остановлено.



(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').createCard();
        });
    });


    // axios.get('http://localhost:3000/menu')
    // .then(data => {
    //     data.data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').createCard();
    //     });
    // });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);
=======
/***/ ((module) => {

function cards(){
  class MenuCard{
    constructor(src, alt, headText, text, price, parentSelector, ...classes){
        this.src = src;
        this.alt = alt;
        this.headText = headText;
        this.text = text;
        this.price = price;
        this.classes = classes; // Это массив
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAH();
    }

    // конвертация доллара в грн.
    changeToUAH(){
        this.price = this.price * this.transfer;
    }

    createCard(){
        const menuItem = document.createElement('div');

        // Если в (...classes) ничего не передается
        // Записываем дефолтный класс
        if (this.classes.length === 0){
            this.menuItem = 'menu__item';
            menuItem.classList.add(this.menuItem);
        } else {
            // Используем rest оператор
            // Добавляем все классы которые есть в массиве к елементу
            this.classes.forEach(className => menuItem.classList.add(className));
        }

        menuItem.innerHTML = `
                    <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.headText}</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
        `;

        this.parent.append(menuItem);

    }

}

// Получаем данные с базы

// throw позволяет генерировать исключения, определяемые пользователем. При этом выполнение текущей функции будет остановлено (инструкции после throw не будут выполнены), и управление будет передано в первый блок catch в стеке вызовов. Если catch блоков среди вызванных функций нет, выполнение программы будет остановлено.

const getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

// getResource('http://localhost:3000/menu')
//     .then(data => {
//         data.forEach(({img, altimg, title, descr, price}) => {
//             new MenuCard(img, altimg, title, descr, price, '.menu .container').createCard();
//         });
//     });


    axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').createCard();
        });
    });
}

module.exports = cards;
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
<<<<<<< HEAD
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function formsModul(formSelector, modalTimerId){
  const forms = document.querySelectorAll(formSelector);

  const message = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо, скоро с вами свяжемся',
      failure: 'Ошибка...'
  };

  // подвязываем функцию отправки на все формы
  forms.forEach(item => {
      bindPostData(item);
  });

  // функция отправки
  // function postData(form) {
  //     form.addEventListener('submit', (e) => {
  //         e.preventDefault();
  //
  //         const statusMessage = document.createElement('img');
  //         statusMessage.src = message.loading;
  //         statusMessage.style.cssText = `
  //             display: block;
  //             margin: 0 auto;
  //         `;
  //
  //         form.insertAdjacentElement('afterend', statusMessage);
  //
  //         const formData = new FormData(form); // собирает данные с формы
  //
  //         fetch('server.php', {
  //             method: "POST",
  //             body: formData
  //         })
  //         .then(data => data.text()) //преобразуем в строку, для того что бы получить данные
  //         .then(data => {
  //             console.log(data);
  //             showThanksModal(message.success);
  //             statusMessage.remove();
  //         }).catch(() => { //если что-то пошло не так
  //             showThanksModal(message.failure);
  //         }).finally(() => { //выполнить в любом случае
  //             form.reset();
  //         });
  //
  //     });
  // }

  //============================================
//     отправка в формате JSON



  function bindPostData(form) {
      form.addEventListener('submit', (e) => {
          e.preventDefault();

          const statusMessage = document.createElement('img');
          statusMessage.src = message.loading;
          statusMessage.style.cssText = `
              display: block;
              margin: 0 auto;
          `;

          form.insertAdjacentElement('afterend', statusMessage);

          const formData = new FormData(form); // собирает данные с формы

          // формируем обьект с данными с formData
          const json = JSON.stringify(Object.fromEntries(formData.entries()));


          (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

      });
  }

  function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
          <div class="modal__content">
              <div class="modal__close" data-close>×</div>
              <div class="modal__title">${message}</div>
          </div>
      `;
      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
          thanksModal.remove();
          prevModalDialog.classList.add('show');
          prevModalDialog.classList.remove('hide');
          (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modalTimerId);
      }, 4000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsModul);
=======
/***/ ((module) => {

function formsModul(){
  const forms = document.querySelectorAll('form');

  const message = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо, скоро с вами свяжемся',
      failure: 'Ошибка...'
  };

  // подвязываем функцию отправки на все формы
  forms.forEach(item => {
      bindPostData(item);
  });

  // функция отправки
  // function postData(form) {
  //     form.addEventListener('submit', (e) => {
  //         e.preventDefault();
  //
  //         const statusMessage = document.createElement('img');
  //         statusMessage.src = message.loading;
  //         statusMessage.style.cssText = `
  //             display: block;
  //             margin: 0 auto;
  //         `;
  //
  //         form.insertAdjacentElement('afterend', statusMessage);
  //
  //         const formData = new FormData(form); // собирает данные с формы
  //
  //         fetch('server.php', {
  //             method: "POST",
  //             body: formData
  //         })
  //         .then(data => data.text()) //преобразуем в строку, для того что бы получить данные
  //         .then(data => {
  //             console.log(data);
  //             showThanksModal(message.success);
  //             statusMessage.remove();
  //         }).catch(() => { //если что-то пошло не так
  //             showThanksModal(message.failure);
  //         }).finally(() => { //выполнить в любом случае
  //             form.reset();
  //         });
  //
  //     });
  // }

  //============================================
//     отправка в формате JSON

  const postData = async (url, data) => {
      const res = await fetch(url, {
          method: "POST",
          headers: {
              'Content-type': 'application/json'
          },
          body: data
      });

      return await res.json();
  };

  function bindPostData(form) {
      form.addEventListener('submit', (e) => {
          e.preventDefault();

          const statusMessage = document.createElement('img');
          statusMessage.src = message.loading;
          statusMessage.style.cssText = `
              display: block;
              margin: 0 auto;
          `;

          form.insertAdjacentElement('afterend', statusMessage);

          const formData = new FormData(form); // собирает данные с формы

          // формируем обьект с данными с formData
          const json = JSON.stringify(Object.fromEntries(formData.entries()));


          postData('http://localhost:3000/requests', json)
          .then(data => {
              console.log(data);
              showThanksModal(message.success);
              statusMessage.remove();
          }).catch(() => { //если что-то пошло не так
              showThanksModal(message.failure);
          }).finally(() => { //выполнить в любом случае
              form.reset();
          });

      });
  }

  function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      openModal();

      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
          <div class="modal__content">
              <div class="modal__close" data-close>×</div>
              <div class="modal__title">${message}</div>
          </div>
      `;
      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
          thanksModal.remove();
          prevModalDialog.classList.add('show');
          prevModalDialog.classList.remove('hide');
          closeModal();
      }, 4000);
  }
}

module.exports = formsModul;
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
<<<<<<< HEAD
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if(modalTimerId){
        console.log(modalTimerId);
        //если модалка уже была открыта, не открываем ее автоматически
        clearInterval(modalTimerId);
    }
    
}

function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId){
//==============================modal

const modalTrigger = document.querySelectorAll(triggerSelector);
const modal = document.querySelector(modalSelector);

modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
});

// закрыть по клику на подложку
modal.addEventListener('click', (e) => {
    if(e.target === modal || e.target.getAttribute('data-close') == ''){
        closeModal(modalSelector);
    }
});

// закрытие модалки по нажатию Esc
// узнать коды https://keycode.info/
document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')){
        closeModal(modalSelector);
    }
});

//если доскросил до конца, показать модалку
function showModalByScroll(){
    //pageYOffset = прокрученная часть
    //documentElement.clientHeight = видимая часть страницы
    //document.documentElement.scrollHeight = полная высота страницы
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal(modalSelector, modalTimerId);

        //удалить обработчик, чтобы модалка показалась только раз
        window.removeEventListener('scroll', showModalByScroll);
    }
}

//если доскросил до конца, показать модалку
window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



=======
/***/ ((module) => {

function modal(){
//==============================modal

const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');

function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    //если модалка уже была открыта, не открываем ее автоматически
    clearInterval(modalTimerId);
}

function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
});

// закрыть по клику на подложку
modal.addEventListener('click', (e) => {
    if(e.target === modal || e.target.getAttribute('data-close') == ''){
        closeModal();
    }
});

// закрытие модалки по нажатию Esc
// узнать коды https://keycode.info/
document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')){
        closeModal();
    }
});

//вызов модалки через время
const modalTimerId = setTimeout(openModal, 50000);

//если доскросил до конца, показать модалку
function showModalByScroll(){
    //pageYOffset = прокрученная часть
    //documentElement.clientHeight = видимая часть страницы
    //document.documentElement.scrollHeight = полная высота страницы
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal();

        //удалить обработчик, чтобы модалка показалась только раз
        window.removeEventListener('scroll', showModalByScroll);
    }
}

//если доскросил до конца, показать модалку
window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
<<<<<<< HEAD
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}){
  //================================================
//slider
//================================================

    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');
    // let  slideIndex = 1;

    // showSlids(slideIndex);

    // if(slides.length < 10){
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlids(n){
    //     if(n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if(n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     if(slides.length < 10){
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n){
    //     showSlids(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

//================================================
//slider carousel
//================================================

const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        width = window.getComputedStyle(slidesWrapper).width, //ширина окна слайдера
        slidesField = document.querySelector(field); //ширина окна слайдера
let  slideIndex = 1;
let offset = 0;

if(slides.length < 10){
total.textContent = `0${slides.length}`;
current.textContent = `0${slideIndex}`;
} else {
total.textContent = slides.length;
current.textContent = slideIndex;
}

slidesField.style.width = 100 * slides.length + '%'; //ширина всех слайдов
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

// все слайды одинаковой ширины
slides.forEach(slide => slide.style.width = width);

//точки
slider.style.position = 'relative';

const dots = document.createElement('ol'),
dotsMas = [];

dots.classList.add('carousel-indicators');
dots.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`;
slider.append(dots);

for(let i = 0; i < slides.length; i++){
const dot = document.createElement('li');
dot.setAttribute('data-slide-to', i + 1);
dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
`;
if(i == 0){
    dot.style.opacity = 1;
}
dots.append(dot);
dotsMas.push(dot);
}

next.addEventListener('click', () => {
//если долистали до конца
if(offset == replaceWidth(width) * (slides.length - 1)){
    offset = 0;
} else {
    //листаем на ширину 1 слайда
    offset += replaceWidth(width);
}

transform(slidesField, offset);

if(slideIndex == slides.length){
    slideIndex = 1;
} else {
    slideIndex ++;
}

slideLengthLess(slides, current);

dotsMas.forEach(dot => dot.style.opacity = '.5');
dotsMas[slideIndex - 1].style.opacity = 1;
});

prev.addEventListener('click', () => {
if(offset == 0){
    offset = replaceWidth(width) * (slides.length - 1);
} else {
    offset -= replaceWidth(width);
}

transform(slidesField, offset);

if(slideIndex == 1){
    slideIndex = slides.length;
} else {
    slideIndex --;
}

slideLengthLess(slides, current);

dotsMas.forEach(dot => dot.style.opacity = '.5');
dotsMas[slideIndex - 1].style.opacity = 1;
});

//точки
dotsMas.forEach(dot => {
dot.addEventListener('click', (e) => {
    const slideTo = e.target.getAttribute('data-slide-to');

    slideIndex = slideTo;
    offset = replaceWidth(width) * (slideTo - 1);

    transform(slidesField, offset);

    slideLengthLess(slides, current);

    dotsMas.forEach(dot => dot.style.opacity = '.5');
    dotsMas[slideIndex - 1].style.opacity = 1;
});
});

//+width.replace(/\D/g, '') = вырезаем все не числа и превращаем в число
function replaceWidth(t){
return +t.replace(/\D/g, '');
}

function slideLengthLess(s, c){
if(s.length < 10){
    c.textContent = `0${slideIndex}`;
} else{
    c.textContent = slideIndex;
}
}

function transform(elem, transf){
elem.style.transform = `translateX(-${transf}px)`;
}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);
=======
/***/ ((module) => {

function slider(){
  //================================================
//slider
//================================================

    // const slides = document.querySelectorAll('.offer__slide'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');
    // let  slideIndex = 1;

    // showSlids(slideIndex);

    // if(slides.length < 10){
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlids(n){
    //     if(n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if(n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     if(slides.length < 10){
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n){
    //     showSlids(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

//================================================
//slider carousel
//================================================

const slides = document.querySelectorAll('.offer__slide'),
slider = document.querySelector('.offer__slider'),
prev = document.querySelector('.offer__slider-prev'),
next = document.querySelector('.offer__slider-next'),
total = document.querySelector('#total'),
current = document.querySelector('#current'),
slidesWrapper = document.querySelector('.offer__slider-wrapper'),
slidesField = document.querySelector('.offer__slider-inner'),
width = window.getComputedStyle(slidesWrapper).width; //ширина окна слайдера
let  slideIndex = 1;
let offset = 0;

if(slides.length < 10){
total.textContent = `0${slides.length}`;
current.textContent = `0${slideIndex}`;
} else {
total.textContent = slides.length;
current.textContent = slideIndex;
}

slidesField.style.width = 100 * slides.length + '%'; //ширина всех слайдов
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

// все слайды одинаковой ширины
slides.forEach(slide => slide.style.width = width);

//точки
slider.style.position = 'relative';

const dots = document.createElement('ol'),
dotsMas = [];

dots.classList.add('carousel-indicators');
dots.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`;
slider.append(dots);

for(let i = 0; i < slides.length; i++){
const dot = document.createElement('li');
dot.setAttribute('data-slide-to', i + 1);
dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
`;
if(i == 0){
    dot.style.opacity = 1;
}
dots.append(dot);
dotsMas.push(dot);
}

next.addEventListener('click', () => {
//если долистали до конца
if(offset == replaceWidth(width) * (slides.length - 1)){
    offset = 0;
} else {
    //листаем на ширину 1 слайда
    offset += replaceWidth(width);
}

transform(slidesField, offset);

if(slideIndex == slides.length){
    slideIndex = 1;
} else {
    slideIndex ++;
}

slideLengthLess(slides, current);

dotsMas.forEach(dot => dot.style.opacity = '.5');
dotsMas[slideIndex - 1].style.opacity = 1;
});

prev.addEventListener('click', () => {
if(offset == 0){
    offset = replaceWidth(width) * (slides.length - 1);
} else {
    offset -= replaceWidth(width);
}

transform(slidesField, offset);

if(slideIndex == 1){
    slideIndex = slides.length;
} else {
    slideIndex --;
}

slideLengthLess(slides, current);

dotsMas.forEach(dot => dot.style.opacity = '.5');
dotsMas[slideIndex - 1].style.opacity = 1;
});

//точки
dotsMas.forEach(dot => {
dot.addEventListener('click', (e) => {
    const slideTo = e.target.getAttribute('data-slide-to');

    slideIndex = slideTo;
    offset = replaceWidth(width) * (slideTo - 1);

    transform(slidesField, offset);

    slideLengthLess(slides, current);

    dotsMas.forEach(dot => dot.style.opacity = '.5');
    dotsMas[slideIndex - 1].style.opacity = 1;
});
});

//+width.replace(/\D/g, '') = вырезаем все не числа и превращаем в число
function replaceWidth(t){
return +t.replace(/\D/g, '');
}

function slideLengthLess(s, c){
if(s.length < 10){
    c.textContent = `0${slideIndex}`;
} else{
    c.textContent = slideIndex;
}
}

function transform(elem, transf){
elem.style.transform = `translateX(-${transf}px)`;
}
}

module.exports = slider;
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
<<<<<<< HEAD
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
  const tabs = document.querySelectorAll(tabsSelector), // табы переключатели
        tabsContent = document.querySelectorAll(tabsContentSelector), // табы
        tabsParent = document.querySelector(tabsParentSelector); // родитель табов переключ

    // =============== Скрываем все табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        // =============== Удаляем активный клас у кнопки таба
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    // =============== Показываем активный таб
    // i = 0 если аргумент не передан, i будет = 0
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

        // =============== Добавляем активный клас у кнопки таба
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    // =============== Делегирование

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        //если клик был на tabheader__item, вызываем перебор
        if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach( (item, i) => {

                //если елемент в массиве совпадает с кликом (target == item), вызываем фукнкции
                // подставляем номер елемента = i = который получаем в переборе
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);
=======
/***/ ((module) => {

function tabs(){
  const tabs = document.querySelectorAll('.tabheader__item'), // табы переключатели
        tabsContent = document.querySelectorAll('.tabcontent'), // табы
        tabsParent = document.querySelector('.tabheader__items'); // родитель табов переключ

    // =============== Скрываем все табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        // =============== Удаляем активный клас у кнопки таба
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    // =============== Показываем активный таб
    // i = 0 если аргумент не передан, i будет = 0
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');

        // =============== Добавляем активный клас у кнопки таба
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    // =============== Делегирование

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        //если клик был на tabheader__item, вызываем перебор
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach( (item, i) => {

                //если елемент в массиве совпадает с кликом (target == item), вызываем фукнкции
                // подставляем номер елемента = i = который получаем в переборе
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

module.exports = tabs;
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
<<<<<<< HEAD
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline){
  //==============================timer



  //определяем разницу между дедлайном и текущим временем
  function getTimeRemaining(endtime) {
      //преобразовать в числовой формат дату ( Date.parse(endtime) ), получим колич. милисек. до конечного времени
      //Date.parse(endtime) - Date.parse(new Date() отнимаем милисеки конечной даты от текущей
      const t = Date.parse(endtime) - Date.parse(new Date());

      //Вычислить сколько суток осталось до дедлайна
      // (1000 * 60) = кол. минут
      // (1000 * 60 * 60) = кол. часов
      // (1000 * 60 * 60 * 24) = кол. суток
      // t / (1000 * 60 * 60 * 24) = олю суток до дедлайна
      const days = Math.floor(t / (1000 * 60 * 60 * 24));

      // общее кол. часов делим на 24, получаем остаток от деления, что бы было не больше 24 часа
      const hours = Math.floor((t / (1000 * 60 * 60) % 24));

      // общее кол. минут делим на 60, получаем остаток от деления, что бы было не больше 60 минут
      const minutes = Math.floor((t / 1000 / 60) % 60);

      // общее кол. секунд делим на 60, получаем остаток от деления, что бы было не больше 60 сек.
      const seconds = Math.floor((t / 1000) % 60);

      // озвращаем все переменые
      return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
      };
  }

  //добавляем ноль к числам таймера, если < 10
  function getZero(num) {
      if(num >= 0 && num < 10){
          return `0${num}`;
      } else {
          return num;
      }
  }

  //вывод таймера на страницу
  function setClock(selector, endtime) {
      const timer = document.querySelector(selector); //блок с таймером
      const days = timer.querySelector('#days');
      const hours = timer.querySelector('#hours');
      const minutes = timer.querySelector('#minutes');
      const seconds = timer.querySelector('#seconds');

      //запуск updateClock каждую сек.
      const timeInterval = setInterval(updateClock, 1000);

      updateClock(); //запускаем, что бы не мигала при загрузке (инициализация)

      //обновление таймера каждую сек.
      function updateClock() {
          //передаем в переменную массив который возвращает функа
          const t = getTimeRemaining(endtime);

          //записываем в переменные значения массива getTimeRemaining()
          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          //становка таймера когда дедлайн наступит
          if(t.total <= 0){
              clearInterval(timeInterval);
          }
      }
  }

  setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");









window.addEventListener('DOMContentLoaded', () => {

    //вызов модалки через время
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('.modal', modalTimerId), 50000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active'); 
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '.modal', modalTimerId); 
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.default)('.timer', '2021-02-20');  
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__.default)('form', modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    

// ====================================================================================
// ПОЛУЧИТЬ ДОСТУП К БД
// ====================================================================================

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json()) // преобразуем в обычный обьект
    //     .then(res => console.log(res));

        // fetch('db.json')
        // .then(data => data.json()) // преобразуем в обычный обьект
        // .then(res => console.log(res));

    // npx json-server --watch db.json  == запуск сервера
 
});

  

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: data
  });

  return await res.json();
};

async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}



=======
/***/ ((module) => {

function timer(){
  //==============================timer

  const deadline = '2020-11-10'; //отправная точка

  //определяем разницу между дедлайном и текущим временем
  function getTimeRemaining(endtime) {
      //преобразовать в числовой формат дату ( Date.parse(endtime) ), получим колич. милисек. до конечного времени
      //Date.parse(endtime) - Date.parse(new Date() отнимаем милисеки конечной даты от текущей
      const t = Date.parse(endtime) - Date.parse(new Date());

      //Вычислить сколько суток осталось до дедлайна
      // (1000 * 60) = кол. минут
      // (1000 * 60 * 60) = кол. часов
      // (1000 * 60 * 60 * 24) = кол. суток
      // t / (1000 * 60 * 60 * 24) = олю суток до дедлайна
      const days = Math.floor(t / (1000 * 60 * 60 * 24));

      // общее кол. часов делим на 24, получаем остаток от деления, что бы было не больше 24 часа
      const hours = Math.floor((t / (1000 * 60 * 60) % 24));

      // общее кол. минут делим на 60, получаем остаток от деления, что бы было не больше 60 минут
      const minutes = Math.floor((t / 1000 / 60) % 60);

      // общее кол. секунд делим на 60, получаем остаток от деления, что бы было не больше 60 сек.
      const seconds = Math.floor((t / 1000) % 60);

      // озвращаем все переменые
      return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
      };
  }

  //добавляем ноль к числам таймера, если < 10
  function getZero(num) {
      if(num >= 0 && num < 10){
          return `0${num}`;
      } else {
          return num;
      }
  }

  //вывод таймера на страницу
  function setClock(selector, endtime) {
      const timer = document.querySelector(selector); //блок с таймером
      const days = timer.querySelector('#days');
      const hours = timer.querySelector('#hours');
      const minutes = timer.querySelector('#minutes');
      const seconds = timer.querySelector('#seconds');

      //запуск updateClock каждую сек.
      const timeInterval = setInterval(updateClock, 1000);

      updateClock(); //запускаем, что бы не мигала при загрузке (инициализация)

      //обновление таймера каждую сек.
      function updateClock() {
          //передаем в переменную массив который возвращает функа
          const t = getTimeRemaining(endtime);

          //записываем в переменные значения массива getTimeRemaining()
          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          //становка таймера когда дедлайн наступит
          if(t.total <= 0){
              clearInterval(timeInterval);
          }
      }
  }

  setClock('.timer', deadline);
}

module.exports = timer;
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
<<<<<<< HEAD
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
=======
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {

    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js"),
        cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js"),
        calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
        forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");

    tabs(); 
    modal(); 
    timer();  
    cards();
    calc();
    forms();
    slider();
    

// ====================================================================================
// ПОЛУЧИТЬ ДОСТУП К БД
// ====================================================================================

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json()) // преобразуем в обычный обьект
    //     .then(res => console.log(res));

        // fetch('db.json')
        // .then(data => data.json()) // преобразуем в обычный обьект
        // .then(res => console.log(res));

    // npx json-server --watch db.json  == запуск сервера
 
});

  
})();

>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
/******/ })()
;
//# sourceMappingURL=bundle.js.map