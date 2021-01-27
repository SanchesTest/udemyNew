'use strict';

function User(name, age){
    this.name = name;
    let userAge = age; // инкапсуляция (не изменить извне)

    this.say = function () {
        console.log(`User name is ${this.name} and user age is ${userAge}`);
    };

    //для того чтобы можно было снаружи обратится к переменной
    this.getAge = function () {
        return userAge;
    };

    //для возможности менять переменную снаружи
    this.setAge = function (age) {
        if(typeof age === 'number' && age > 0 && age < 110){
            userAge = age;
        } else {
            console.log('Error');
        }
    };
}

const u1 = new User('Alex', 21);

u1.setAge(35); // меняем значение переменной

u1.say(); // User name is Alex and user age is 35

console.log(u1.getAge()); // обращаемся к переменной

// ==================================================================
// classes
// ==================================================================
class User2{
    constructor(name, age){
        this.name = name;
        this._age = age; // инкапсуляция (не изменить извне)
    }

    say() {
        console.log(`User2 name is ${this.name} and user age is ${this._age}`);
    }

    // getter - для того чтобы можно было снаружи обратится к переменной
    get age() {
        return this._age;
    }

    // setter - для возможности менять переменную снаружи
    set age(age) {
        if(typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log('Error');
        }
    }
}

// _age = по негласному соглашению кодерув, нельзя менять

const u2 = new User2('Alex', 21);
console.log(u2.age); // 21
u2.age = 35;
console.log(u2.age); // 35

u2.say(); // User name is Alex and user age is 35

// ==================================================================
// поля классов - эксперементальный синтаксис
// ==================================================================
class User3{
    constructor(name, age){
        this.name = name;
        this._age = age; // инкапсуляция (не изменить извне)
    }

    #surname = 'Petruchenko'; // создаем приватное свойство вне конструктора (не дступно снаружи)

    say = () => {
        console.log(`User3 name is ${this.name} ${this.#surname} and user age is ${this._age}`);
    }

    // getter - для того чтобы можно было снаружи обратится к переменной
    get sname() {
        return this.#surname;
    }

    // setter - для возможности менять переменную снаружи
    set sname(surname) {
        if(typeof surname === 'string' && surname.length > 0 && surname.length < 30){
            this.#surname = surname;
        } else {
            console.log('Error');
        }
    }

}

// _age = по негласному соглашению кодерув, нельзя менять

const u3 = new User3('Alex', 21);
console.log(u3.surname); // undefined
console.log(u3.sname); // Petruchenko
u3.sname = 'Zeus';
console.log(u3.sname); // Zeus
u3.say(); // User3 name is Alex Zeus and user age is 21