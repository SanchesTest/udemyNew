function timer(id, deadline){
  //==============================timer



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

  setClock(id, deadline);
}

export default timer;