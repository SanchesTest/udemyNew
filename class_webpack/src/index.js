import {btn, AutoSlider as sl} from './script';
//AutoSlider as sl = переименовать при импорте

// експрорт всего в обьект total
// import * as total from './script';

// импортируем реакт {Component} = вытаскиваем компоненты
// import React, {Component} from 'react';

const slider = new sl(500, 500, 4, true);
slider.whoAmI(); // 500 500 4
slider.play(); // Autoplay: true
console.log(btn());