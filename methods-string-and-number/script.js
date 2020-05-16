// ================================
// indexOf()
// ================================

// Ищет подстроку в строке, выводит начальную позицию, в примере ниже = 5

// Пробелы учитываются, если не нашло = -1

const test = 'some text here';
test.indexOf('text'); // 5

// Можно проверить на наличие символа или подстроки в строке...

let testSearch = test.indexOf('here');

if(testSearch != -1){
  console.log('There is such a line');
} else{
  console.log('There is no such line');
}

// Строка найдена, поэтому вывод (There is such a line)

// ================================
// slice() и substring() почти идентичны
// ================================

// Вырезает часть строки slice(5, 10), к примеру с 6 по 10 не включительно

// Вырезает часть строки slice(5), к примеру с 6 и до конца

const sliceTest = 'some text here';

sliceTest.slice(5, 10); // text 
sliceTest.slice(5); // text here

// ================================
// substr()
// ================================

// substr(5, 3) указываем с какой позиции и сколько символов нужно вырезать

const substrTest = 'some text here';

sliceTest.substr(5, 3); // tex

// ================================
// Math.round()
// ================================

// Округляем до близайшего целого

const numMath = 12.2;

Math.round(numMath); // 12

console.log(Math.round(numMath));

// ================================
// parseInt()
// ================================

// Переводит число в другую систему исчисления

// В итоге, обрезает буквы и дробные числа

const numParseInt = '12.2px';

parseInt(numParseInt); // 12

// ================================
// parseFloat()
// ================================

// В итоге, обрезает буквы

const numParseFloat = '12.2px';

parseFloat(numParseFloat); // 12.2
