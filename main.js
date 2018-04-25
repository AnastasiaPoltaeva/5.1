/* 1.Функция принимает в качестве параметра строку и возвращает ее последний символ*/
string = 'Hello, world!'; 
function lastSymbol(string) {
  var lastSymbolPosition = string.length - 1;
  lastSymbol = string.charAt(lastSymbolPosition); //возвращает указанный символ из строки
  return lastSymbol;
}
console.log(lastSymbol(string));

/*2.Функция принимает в качестве параметра строку и возвращает ту же самую строку, но без последнего символа*/
var string = 'Hello, world!';
function withoutLastSymbol(string) {
  var newString = string.substring(0, string.length - 1); //возвращает подстроку строки между двумя индексами
  return newString;
}
console.log(withoutLastSymbol(string));

/*3.Функция принимает в качестве параметра строку и возвращает зеркально отраженную. Символы в возвращаемой строке должны быть расположены в обратном порядке*/
var string = 'Hello, world!';
function reverseString(string) {
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
}
console.log(reverseString(string));
    
/*4.Функция принимает в качестве параметра строку и возвращает такую же строку, но без лишних пробелов. Строка на выходе не должна начинаться и заканчиваться с пробела, а внутри нее не может быть больше одного пробела подряд*/
var string = '  Hello,      world! ';
function correctString(string) {
  var deleteSpaces = string.trim(); /*удаляет пробельные символы с начала и конца строки*/
  var newString = deleteSpaces.replace(/\s{2,}/g, ' ').replace(/([,.!?]+)(?=\S)/g, '$1 '); /*возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель*/
  return newString;                                                                     /*$1, вставляет 1-ную сопоставившуются подгруппу из объекта RegExp в первом параметре  */
}
console.log(correctString(string));