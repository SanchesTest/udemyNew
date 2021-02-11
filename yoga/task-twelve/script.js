window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  class Options{
    constructor(height, width, bg, fontSize, textAlign){
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    createDiv(){
      let div = document.createElement('div');

      div.textContent = 'twelve task';
      document.body.append(div);
      let param = `
          height: ${this.height}px; 
          width: ${this.width}px;
          background: ${this.bg};
          font-size: ${this.fontSize}px;
          text-align: ${this.textAlign};     
      `;

      div.style.cssText = param;

    }
  }

  let opt = new Options(100, 100, '#c8c8c8', 16, 'center');

  opt.createDiv();

});

