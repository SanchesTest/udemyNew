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
    const modalClose = document.querySelector('[data-close]');

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

    modalClose.addEventListener('click', closeModal);

    // закрыть по клику на подложку
    modal.addEventListener('click', (e) => {
        if(e.target === modal){
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
    const modalTimerId = setTimeout(openModal, 5000);

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

// последние свойства пишем не через точку 'menu__item'
// так как они попадают в массив (...classes)
// после чего мы их перебираем this.classes.forEach(className => menuItem.classList.add(className))
// и записываем как классы

new MenuCard(
    'img/tabs/vegy.jpg',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: ' +
    'больше свежих овощей и фруктов. Продукт активных и здоровых людей. ' +
    'Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu__field > .container',

).createCard();

    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки,' +
        ' но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu__field > .container',
        'menu__item',
        'test__class'
    ).createCard();

    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - ' +
        'это тщательный подбор ингредиентов: полное отсутствие продуктов животного ' +
        'происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu__field .container',
        'menu__item',
        'test__class'
    ).createCard();



});