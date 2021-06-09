import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

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


          postData('http://localhost:3000/requests', json)
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
      openModal('.modal', modalTimerId);

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
          closeModal(modalTimerId);
      }, 4000);
  }
}

export default formsModul;

