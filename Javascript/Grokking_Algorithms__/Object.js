// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let prop in user) {
//     // ключи
//     console.log( prop );  // name, age, isAdmin
//     // значения ключей
//     console.log( user[prop] ); // John, 30, true
//   }


//   let codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     // ..,
//     "1": "США"
//   };
  
//   for (let codde in codes) {
//     console.log(codde); // 1, 41, 44, 49
//   }


//=======================================================================================================
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

//user = {};
// user.name = 'Jhon';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

//=======================================================================================================
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// let schedule = {};
// //schedule["8:30"] = "get up"
// // function isEmpty(obj) {
// //     if (obj.noSuchProperty === undefined) {
// //         console.log('AAAAA');
// //         schedule["8:30"] = "get up";
// //     }
// //     if (obj["8:30"]) {
// //         console.log('BBBBBB');
// //     };
// // }
// // isEmpty(schedule);
// // console.log(schedule);

// //Просто в цикле перебираем свойства объекта и возвращаем false, как только встречаем свойство.
// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }

//     return true;
//   }

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false

//=======================================================================================================

// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

//Option 1
// function sumOfSalaries(obj) {
//     let sum = 0;
//     console.log(sum);    
//     for (let prop in obj) {
//         console.log('IM HERE');
//         sum += obj[prop];
//     }
//     return sum;
// }
// console.log(sumOfSalaries(salaries));

//Option 2
// let sum = 0;
// for (let prop in salaries) {
//     sum += salaries[prop];
// }
// console.log(sum)
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

//=======================================================================================================
// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   function multiplyNumeric(obj) {
//       for (let key in obj) {
//           if (typeof obj[key] === 'number') {
//             obj[key] = obj[key] * 2;
//           }
//       }
//       return menu;
//   }

//   console.log (multiplyNumeric(menu));
  // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };


//=======================================================================================================

