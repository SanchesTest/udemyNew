<<<<<<< HEAD
'use strict';

const person = {
    name: 'Alex',
    age: 20,

    get userAge(){
        return this.age;
    },

    set userAge(num){
        this.age = num;
    }
};

console.log(person.userAge = 30);
console.log(person.userAge);
console.log(person.age);
=======
'use strict';

const person = {
    name: 'Alex',
    age: 20,

    get userAge(){
        return this.age;
    },

    set userAge(num){
        this.age = num;
    }
};

console.log(person.userAge = 30);
console.log(person.userAge);
console.log(person.age);
>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
