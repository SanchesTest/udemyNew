// Синтаксис оставшихся параметров функции позволяет 
// представлять неограниченное множество аргументов в виде массива.
// ...rest
const log = function(a, b, ...rest){
  console.log(a, b, rest);
};

log('one', 'two', 'rest three', 'rest four'); // one two [ 'rest three', 'rest four' ]

function calcOrDouble(num, basis = 2){
  console.log(num * basis);
}

calcOrDouble(3);