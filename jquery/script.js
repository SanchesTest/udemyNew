// Работаем после загрузки DOM
jQuery(function() {

  // Получаем елемент по id
  const btn = $('#btn');

  //Добавить убрать класс при наведении
  // :first	вернет первый элемент на странице.
  $('.list-item:first').hover(function(){
    $(this).toggleClass('active');
  });


  //===========прописываем анимаху 
  //:eq(2) Соответствует элементу, занимающему позицию под номером (number)
  //:even возвращает элементы с четными номерами позиций
  //.fadeToggle() приводит к плавному исчезновению (если элемент не скрыт) или появлению (если элемент скрыт)
  $('.list-item:eq(2)').on('click', function(){
    $('.image:even').fadeToggle();
  });


  //============прописываем анимаху в ручную
  $('.list-item:eq(4)').on('click', function(){
    $('.image:odd').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 2000);
  });

});