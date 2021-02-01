window.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        calc = require('./modules/calc'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider');

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

  