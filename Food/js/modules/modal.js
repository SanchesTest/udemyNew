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

export default modal;

export {closeModal};
export {openModal};

