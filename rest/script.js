<<<<<<< HEAD
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

=======
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

>>>>>>> 1ff3600f046799f50392a1506af3bf8fd34f718f
calcOrDouble(3);