'use strict';

const person = {
    name: 'Alex',
    tel: '4534576347',
    parents: {
        mom: 'Olg',
        dad: 'Mike'
    }
};

// clone будет нузависимой копией обьекта
// const clone = JSON.parse(JSON.stringify(person));
// clone.parents.mom = "Test";

// метод JSON.stringify() преобразует значение JavaScript в строку JSON для дальнейшей передачи на серв.
//JSON.stringify(person); // {"name":"Alex","tel":"4534576347"}

// Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.
// Вообщем получаем с JSON строки обычный массив
//JSON.parse(person); // {name: "Alex", tel: "4534576347"}




