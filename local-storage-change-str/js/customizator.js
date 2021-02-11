<<<<<<< HEAD
class Customizator{
  constructor(){
    this.btnBlock = document.createElement('div');
    this.colorPicker = document.createElement('input');
    this.clear = document.createElement('div');
    // localStorage = получаем значение
    this.scale = localStorage.getItem('scale') || 1;
    this.color = localStorage.getItem('color') || '#ffffff';

    this.btnBlock.addEventListener('click', (e) => this.onScaleChange(e));
    this.colorPicker.addEventListener('input', (e) => this.onColorChange(e));
    this.clear.addEventListener('click', () => this.reset());  
  }

  //меняем размер шрифта
  onScaleChange(e){
    const body = document.querySelector('body');
    if(e){
      this.scale = +e.target.value.replace(/x/g, ""); //убираем X
    }

    //рекурсия, проходим по всему дереву, находим текст.узлы
    const recursy = (element) => {
      element.childNodes.forEach(node =>{
        //replace(/\s/g, "") = убираем пробелы
        if(node.nodeName === '#text' && node.nodeValue.replace(/\s/g, "").length > 0){

          if(!node.parentNode.getAttribute('data-fz')){
            //window.getComputedStyle() возвращает объект, содержащий значения всех CSS-свойств элемента
            let value = window.getComputedStyle(node.parentNode, null).fontSize;
            //установка data-fz для блока в котором текст
            node.parentNode.setAttribute('data-fz', +value.replace(/px/g, ""));
            //берем размер шрифта и умножаем на value кнопки
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + 'px';
          } else {
            //берем размер шрифта и умножаем на value кнопки
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + 'px';
          }
          
        } else{
          recursy(node);
        }
      });
    }
    recursy(body);

    localStorage.setItem('scale', this.scale);
  }

//установка цвета
  onColorChange(e){
    const body = document.querySelector('body');
    body.style.backgroundColor = e.target.value;
    //записываем значение в localStorage = ключ \ значение
    localStorage.setItem('color', e.target.value);
  }

  //установка цвета с localStorage
  setBgColor(){
    const body = document.querySelector('body');
    body.style.backgroundColor = this.color;
    this.colorPicker.value = this.color;
  }

  //подключаем стили к стр. на которой работает скрипт
  injectStyle(){
    const style = document.createElement('style');
    style.innerHTML = `
      .btn{
        padding: 0 0.5rem;
        margin-top: 2rem;
        display: flex;
      }
      
      .btn button{
        margin-right: 1rem;
        background: rgb(55, 204, 68);
        border: 1px solid rgb(21, 136, 46);
        outline: none;
        cursor: pointer;
        transition: all .4s ease-in-out;
        padding: 0.5rem 1rem;
      }
      
      .panel{
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 9999;
        padding: 0.5rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: rgba(0,0,0,.5);
      }
      
      .scale-btn{
        width: 2.3rem;
        height: 2.3rem;
        outline: none;
        margin-right: 0.3rem;
        padding: 0;
      }
      
      .color-picker{
        outline: none;
      }

      .clear{
        font-size: 1.8rem;
        cursor: pointer;
        color: #ffffff;
        margin-left: .5rem;
      }
    `;
    document.querySelector('head').appendChild(style);
  }

  //очистить настройки localStorage и на странице
  reset(){
    localStorage.clear();
    this.scale = 1;
    this.color = '#ffffff';
    this.setBgColor();
    this.onScaleChange();
  }

  //создаем панель
  render(){
    this.injectStyle();
    this.setBgColor();
    this.onScaleChange();

    let scaleInputS = document.createElement('input'),
        scaleInputM = document.createElement('input'),
        panel = document.createElement('div');

    panel.append(this.btnBlock, this.colorPicker, this.clear);

    this.clear.innerHTML = '&times';
    this.clear.classList.add('clear');
    
    scaleInputS.classList.add('scale-btn');
    scaleInputM.classList.add('scale-btn');
    this.btnBlock.classList.add('scale');
    this.colorPicker.classList.add('color-picker');

    scaleInputS.setAttribute('type', 'button');
    scaleInputS.setAttribute('value', '1x');
    scaleInputM.setAttribute('type', 'button');
    scaleInputM.setAttribute('value', '1.5x');
    this.colorPicker.setAttribute('type', 'color');
    this.colorPicker.setAttribute('value', '#ffffff');

    this.btnBlock.append(scaleInputS, scaleInputM);

    panel.classList.add('panel');

    document.querySelector('body').append(panel);
  }
}

=======
class Customizator{
  constructor(){
    this.btnBlock = document.createElement('div');
    this.colorPicker = document.createElement('input');
    this.clear = document.createElement('div');
    // localStorage = получаем значение
    this.scale = localStorage.getItem('scale') || 1;
    this.color = localStorage.getItem('color') || '#ffffff';

    this.btnBlock.addEventListener('click', (e) => this.onScaleChange(e));
    this.colorPicker.addEventListener('input', (e) => this.onColorChange(e));
    this.clear.addEventListener('click', () => this.reset());  
  }

  //меняем размер шрифта
  onScaleChange(e){
    const body = document.querySelector('body');
    if(e){
      this.scale = +e.target.value.replace(/x/g, ""); //убираем X
    }

    //рекурсия, проходим по всему дереву, находим текст.узлы
    const recursy = (element) => {
      element.childNodes.forEach(node =>{
        //replace(/\s/g, "") = убираем пробелы
        if(node.nodeName === '#text' && node.nodeValue.replace(/\s/g, "").length > 0){

          if(!node.parentNode.getAttribute('data-fz')){
            //window.getComputedStyle() возвращает объект, содержащий значения всех CSS-свойств элемента
            let value = window.getComputedStyle(node.parentNode, null).fontSize;
            //установка data-fz для блока в котором текст
            node.parentNode.setAttribute('data-fz', +value.replace(/px/g, ""));
            //берем размер шрифта и умножаем на value кнопки
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + 'px';
          } else {
            //берем размер шрифта и умножаем на value кнопки
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + 'px';
          }
          
        } else{
          recursy(node);
        }
      });
    }
    recursy(body);

    localStorage.setItem('scale', this.scale);
  }

//установка цвета
  onColorChange(e){
    const body = document.querySelector('body');
    body.style.backgroundColor = e.target.value;
    //записываем значение в localStorage = ключ \ значение
    localStorage.setItem('color', e.target.value);
  }

  //установка цвета с localStorage
  setBgColor(){
    const body = document.querySelector('body');
    body.style.backgroundColor = this.color;
    this.colorPicker.value = this.color;
  }

  //подключаем стили к стр. на которой работает скрипт
  injectStyle(){
    const style = document.createElement('style');
    style.innerHTML = `
      .btn{
        padding: 0 0.5rem;
        margin-top: 2rem;
        display: flex;
      }
      
      .btn button{
        margin-right: 1rem;
        background: rgb(55, 204, 68);
        border: 1px solid rgb(21, 136, 46);
        outline: none;
        cursor: pointer;
        transition: all .4s ease-in-out;
        padding: 0.5rem 1rem;
      }
      
      .panel{
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 9999;
        padding: 0.5rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: rgba(0,0,0,.5);
      }
      
      .scale-btn{
        width: 2.3rem;
        height: 2.3rem;
        outline: none;
        margin-right: 0.3rem;
        padding: 0;
      }
      
      .color-picker{
        outline: none;
      }

      .clear{
        font-size: 1.8rem;
        cursor: pointer;
        color: #ffffff;
        margin-left: .5rem;
      }
    `;
    document.querySelector('head').appendChild(style);
  }

  //очистить настройки localStorage и на странице
  reset(){
    localStorage.clear();
    this.scale = 1;
    this.color = '#ffffff';
    this.setBgColor();
    this.onScaleChange();
  }

  //создаем панель
  render(){
    this.injectStyle();
    this.setBgColor();
    this.onScaleChange();

    let scaleInputS = document.createElement('input'),
        scaleInputM = document.createElement('input'),
        panel = document.createElement('div');

    panel.append(this.btnBlock, this.colorPicker, this.clear);

    this.clear.innerHTML = '&times';
    this.clear.classList.add('clear');
    
    scaleInputS.classList.add('scale-btn');
    scaleInputM.classList.add('scale-btn');
    this.btnBlock.classList.add('scale');
    this.colorPicker.classList.add('color-picker');

    scaleInputS.setAttribute('type', 'button');
    scaleInputS.setAttribute('value', '1x');
    scaleInputM.setAttribute('type', 'button');
    scaleInputM.setAttribute('value', '1.5x');
    this.colorPicker.setAttribute('type', 'color');
    this.colorPicker.setAttribute('value', '#ffffff');

    this.btnBlock.append(scaleInputS, scaleInputM);

    panel.classList.add('panel');

    document.querySelector('body').append(panel);
  }
}

>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
