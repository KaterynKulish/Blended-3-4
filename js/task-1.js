'use strict';
// Написати функцію findFirstOccurrence, яка приймає два аргументи: рядок str і підрядок substr.
//  Функція повинна повертати індекс першого входження підрядка в рядок.
//  Якщо підрядок не знайдено, функція повинна повертати - 1.

// function findFirstOccurrence(str, substr) {
//   return str.indexOf(substr);
// }

// console.log(findFirstOccurrence('Hello, world!', 'world')); // 7
// console.log(findFirstOccurrence('Hello, world!', 'JavaScript')); // -1
// console.log(findFirstOccurrence('Hello, world!', 'Hello')); // 0

// Написати функцію getSubstring, яка приймає три аргументи: рядок str,
// індекс початку start та індекс кінця end.
// Функція повинна повертати підрядок, що починається з індексу start
// і закінчується індексом end(не включаючи його).

// function getSubstring(str, start, end) {
//   return str.slice(start, end);
// }

// console.log(getSubstring('Hello, world!', 7, 12)) // "world"
// console.log(getSubstring('JavaScript', 4, 10)) // "Script"
// console.log(getSubstring('Slice method', 0, 5)) // "Slice"

// Написати функцію extractAfterSubstring,
// яка приймає два аргументи: рядок str і підрядок substr.
// Функція повинна повертати частину рядка, що йде після першого входження підрядка.
// Якщо підрядок не знайдено, функція повинна повертати порожній рядок.

// function extractAfterSubstring(str, substr) {
//   const index = str.indexOf(substr);
//   if (index === -1) {
//     return "";
//   } else {
//     return str.slice(index + substr.length);
//   }
// }

//   function extractAfterSubstring(str, substr) {
//   const index = str.indexOf(substr);
//   return index === -1 ? "" : str.slice(index + substr.length);
//   }

// console.log(extractAfterSubstring('Hello, world!', 'world')) // "!"
// console.log(extractAfterSubstring('Hello, world!', 'JavaScript')) // ""
// console.log(extractAfterSubstring('Hello, world!', 'Hello')) // ", world!"

//
//
// Написати функцію removeSubstring, яка приймає два аргументи:
// рядок str і підрядок substr.Функція повинна повертати новий рядок,
//   у якому перше входження підрядка буде видалено.Якщо підрядок не знайдено,
//     функція повинна повертати оригінальний рядок.

// function removeSubstring (str, substr) {
//   const index = str.indexOf(substr);
//   if (index === -1) {
//     return str;
//   } else {
//    return str.slice(0,index) + str.slice(index + substr.length);
//   }
// }

// function removeSubstring(str, substr) {
//   const index = str.indexOf(substr);
//   return index === -1
//     ? str
//     : str.slice(0, index) + str.slice(index + substr.length);
// }

// console.log(removeSubstring('Hello, world!', 'world')); // "Hello, !"
// console.log(removeSubstring('Hello, world!', 'JavaScript')); // "Hello, world!"
// console.log(removeSubstring('Hello, world!', 'Hello')); // ", world!"
//
// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

//
//
//
// Написати функцію removeVowelsFromWords,
//   яка приймає рядок str і повертає новий рядок,
//     у якому з кожного слова видалені всі голосні букви.

const vowels = 'aeiouAEIOU';
function removeVowelsFromWords(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeVowelsFromWords('Hello, world!')); // "Hll, wrld!"
console.log(removeVowelsFromWords('JavaScript is awesome!')); // "JvScrpt s wsm!"
console.log(removeVowelsFromWords('Remove vowels from words')); // "Rmv vwls frm wrds"

//
//
//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

//
//
//
// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while
