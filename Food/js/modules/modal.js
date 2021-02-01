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