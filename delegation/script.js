const btns = document.querySelectorAll('button');

// console.log( btns[0].classList.length ); // узнаем сколько класов у елемента = 2

//console.log( btns[0].classList.item(0) ); // получаем первый клас елемента = blue

// =============================================================
// DELEGATION
// =============================================================

const wrapper = document.querySelector('.btn-block');

// будет отрабатывать даже при динамическом создании новых кнопок
wrapper.addEventListener('click', (e) => {
    if(e.target && e.target.tagName == 'BUTTON'){
        console.log('hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// =============================================================
// DELEGATION продвинутое
// =============================================================
// тут исчет совпадение, и отрабатывает если найдет

wrapper.addEventListener('click', (e) => {
    if(e.target && e.target.matches('button.red')){
        console.log('hello red');
    }
});
