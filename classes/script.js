'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea()); // 100
console.log(long.calcArea()); // 2000

// ==============================================================
// Наследование классов
// ==============================================================
//extends = наследует свойства и методы другого класса
// super() = вызывает конструктор родителя, то-есть Rectangle

class ColoredRectangleWidthText extends Rectangle{
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWidthText(25,10, 'Hello', 'red');

div.showMyProps(); // text: Hello, color: red
console.log(div.calcArea()); // 250