//варианты экспорта
export let one = 1; 

// =============================

let two = 2;
export {two};

// =============================

export function sayHi(){
  console.log('Hello');
}

// =============================

// экспорт по умолчанию

export default function hi(){
  console.log('Hi');
}