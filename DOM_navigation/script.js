// Перебираем все елементы на странице + отсекаем текстовые узлы (переносы строк и тд)

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/%D0%A6%D0%B8%D0%BA%D0%BB%D1%8B_%D0%B8_%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8

for(let node of document.body.childNodes){
  if(node.nodeName == '#text'){
    continue;
  } 
  console.log(node);
}

