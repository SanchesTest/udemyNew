//импортируем

// import {one, two} from './main';
// console.log(`${one} and ${two}`);

// =========================================

//импортируем и переименовуем

// import {one as first} from './main';
// console.log(first);

// =========================================

// импортируем все = as data = называем обьект с импотром

// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

// =========================================

// импорт экспорта по умолчанию

// import hi from './main';
// hi();

// =========================================

// имитация сборки модульной структуры без webpack

import {one} from './main.js';
console.log(one);
import hi from './main.js';
hi();