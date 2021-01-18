window.addEventListener('DOMContentLoaded', () => {

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

// ====================================================================================
// Динамическое создание карточек товара
// ====================================================================================

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


// ====================================================================================
// FORMS
// ====================================================================================

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
        //+width.slice(0, width.length - 2) = вырезаем 'px' и превращаем в число
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)){
            offset = 0;
        } else {
            //листаем на ширину 1 слайда
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length){
            slideIndex = 1;
        } else {
            slideIndex ++;
        }

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else{
            current.textContent = slideIndex;
        }

        dotsMas.forEach(dot => dot.style.opacity = '.5');
        dotsMas[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if(offset == 0){
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1){
            slideIndex = slides.length;
        } else {
            slideIndex --;
        }

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else{
            current.textContent = slideIndex;
        }

        dotsMas.forEach(dot => dot.style.opacity = '.5');
        dotsMas[slideIndex - 1].style.opacity = 1;
    });

    //точки
    dotsMas.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slides.length < 10){
                current.textContent = `0${slideIndex}`;
            } else{
                current.textContent = slideIndex;
            }

            dotsMas.forEach(dot => dot.style.opacity = '.5');
            dotsMas[slideIndex - 1].style.opacity = 1;
        });
    });

});

  