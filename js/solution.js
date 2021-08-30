// Домашка #15 — DOM и события

// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка в консоль :


// 1. Используйте цикл for..of
// 2. Вывести общее кол-во элементов в консоль
// 3. Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывсести этот массив в консоль
// 4. Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
// 5. Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
// 6. С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
// 7. Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
// 8. Удалить у тега ul аттрибут ‘data-dog-tail‘


console.log("2 - Вывести общее кол-во элементов в консоль");
let list = document.querySelectorAll('ul > li');
console.log(list);
console.log(" Общее количество элементов " + list.length);
console.log("");
console.log("");



console.log("3 - Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив");
console.log("— вывсести этот массив в консоль");
let arrayList = [];
for (let listElement of list) {
    arrayList.push(listElement.textContent);
}
console.log(arrayList);
console.log("");
console.log("");



console.log("4 - Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of)");
console.log("и записать значение каждого аттрибута в массив — вывсести этот массив в консоль");
let arrayAttribute = [];
let listAttribute = document.querySelector('UL').attributes;
for (let item of listAttribute){
    arrayAttribute.push(item.textContent);
}
console.log(arrayAttribute);
console.log("");
console.log("");



console.log("5. Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль");
let listAttribute2 = document.querySelector('UL').attributes;
let listNameAttribute = [];
for (let item of listAttribute2){
    listNameAttribute.push(item.name);
}
console.log(listNameAttribute);
console.log("");
console.log("");



console.log("6. С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя");
let lastLi = document.querySelector('ul > li:last-child');
console.log(lastLi.innerHTML = "Привет меня зовут Юля");
console.log("");
console.log("");



console.log("7. Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя");
let firstAttribute = document.querySelector('ul > li:first-child')
    .setAttribute("data-my-name" , "Julia");
firstAttribute2 = document.querySelector('ul > li:first-child').attributes;
let arrAtr = [];

for (let item of firstAttribute2){
    arrAtr.push(item.name,item.value)
}

console.log(arrAtr);
console.log("");
console.log("");



console.log("8. Удалить у тега ul аттрибут ‘data-dog-tail‘");
let attributeUL = document.querySelector('ul').removeAttribute("data-dog-tail");
let listAttribute3 = document.querySelector('UL').attributes;
let listNameAttribute2 = [];
for (let item of listAttribute3){
    listNameAttribute2.push(item.name);
}

console.log("Было");
console.log(listNameAttribute);
console.log("Стало");
console.log(listNameAttribute2);
