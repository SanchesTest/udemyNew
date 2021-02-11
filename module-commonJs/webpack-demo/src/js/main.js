// функа конструктор
function myModule(){
  this.hello = function(){
    console.log('hello');
  };

  this.goodbue = function(){
    console.log('goodbue');
  };
}

//CommonJS = експорт модуля
module.exports = myModule;
