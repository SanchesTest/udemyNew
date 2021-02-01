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