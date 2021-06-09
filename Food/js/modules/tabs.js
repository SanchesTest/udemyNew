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

export default tabs;

