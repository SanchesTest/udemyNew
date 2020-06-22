//========================== Превращаем тип данных в строку

// 1)
String(4); // == '4'

String(null); // == 'null'

// 2) = конкатинация
5 + '' // == '5'

'some/url/or/text/here/' + 45 // == 'some/url/or/text/here/45'

`some/url/or/text/here/${45}` // == 'some/url/or/text/here/45'

//========================== Превращаем тип данных в число

// 1)
Number('4') // == 4

// 2)
+'4' // == 4

// 3)
parseInt('22px', 10) // == 22

//========================== Превращаем тип данных в boolean

// 1)

// false === 0, '', null, undefined, NaN

let switcher = null;
if(switcher){
  console.log('Working...');
} else{
  console.log('Error...');
}
//Error...

// 2)
Boolean('4') // == boolean

// 3)
!!'444' // == boolean
