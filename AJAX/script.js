<<<<<<< HEAD
'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // запрос к серверу

    //======= методы обьекта XMLHttpRequest
    request.open('GET', 'current.json'); // сбор настроек для запроса open(method, url, async, login, password)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // настройка заголовков
    request.send(); // отправка запроса

    //======= свойства обьекта XMLHttpRequest
    // status = статус запроса
    // statusText = текстовое описание ответа от сервера
    // response = ответ от сервера
    // readyState = текущее состояние запроса

    // отследить состояние запроса в текущий момент = readystatechange
    // request.addEventListener('readystatechange', () => {
    //     if(request.readyState === 4 && request.status === 200){
    //         const data = JSON.parse(request.response); // парсим (переводим в понятный формат то что получили с сервера)
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // data.current.usd == текущий курс получили с массива > сервера
    //     } else {
    //         inputUsd.value = 'Error';
    //     }
    // });

    //======= используем load = работает 1 раз когда запрос готов
    request.addEventListener('load', () => {
        if(request.status === 200){
            const data = JSON.parse(request.response); // парсим (переводим в понятный формат то что получили с сервера)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // data.current.usd == текущий курс получили с массива > сервера
        } else {
            inputUsd.value = 'Error';
        }
    });
=======
'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // запрос к серверу

    //======= методы обьекта XMLHttpRequest
    request.open('GET', 'current.json'); // сбор настроек для запроса open(method, url, async, login, password)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // настройка заголовков
    request.send(); // отправка запроса

    //======= свойства обьекта XMLHttpRequest
    // status = статус запроса
    // statusText = текстовое описание ответа от сервера
    // response = ответ от сервера
    // readyState = текущее состояние запроса

    // отследить состояние запроса в текущий момент = readystatechange
    // request.addEventListener('readystatechange', () => {
    //     if(request.readyState === 4 && request.status === 200){
    //         const data = JSON.parse(request.response); // парсим (переводим в понятный формат то что получили с сервера)
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // data.current.usd == текущий курс получили с массива > сервера
    //     } else {
    //         inputUsd.value = 'Error';
    //     }
    // });

    //======= используем load = работает 1 раз когда запрос готов
    request.addEventListener('load', () => {
        if(request.status === 200){
            const data = JSON.parse(request.response); // парсим (переводим в понятный формат то что получили с сервера)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // data.current.usd == текущий курс получили с массива > сервера
        } else {
            inputUsd.value = 'Error';
        }
    });
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
});