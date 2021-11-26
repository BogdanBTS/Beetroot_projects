//+ 1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
//+ 2. Написать функцию, которая вычисляет факториал переданного ей числа.
//+ 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
//+ 4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
//+ 5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
//+ 6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
//+ 7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
//+ 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
//+ 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»



/*!!!!!!!!!!!!!!!!
//   1.Написать функцию, которая принимает 2 числа
//и возвращает -1, если первое меньше, чем второе;
//1 – если первое больше, чем второе; 
//и 0 – если числа равны.

let num1 = 9;
let num2 = 9;

function twoNumbers(num1, num2) {
  
  if (num1<num2) {
    return -1;
  } else if (num1>num2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(twoNumbers(num1, num2));
*/




/*!!!!!!!!!!!!!!!!
//2.Написать функцию, которая вычисляет факториал переданного ей числа.
// факторіал числа 4 = 1 * 2 * 3 * 4;
// (4! = 1·2·3·4 = 24 )
// 1 * 2 = 2 
// 2 * 3 = 6
// 6 * 4 = 24
// 

// let num = 5;


// function factorialOfNumber(num){
//   let factorialNumber = 1;
//   for (i=2; i<=num; i++){
//     factorialNumber = factorialNumber * i;
//   }
    console.log('fNumber '+ factorialNumber);
// }

// factorialOfNumber(num)

/*
//Option #2
function factorial(n) {
   return (n != 1) ? n * factorial(n - 1) : 1;
}
​
 console.log(factorial(4));
*/


/* !!!!!!!!!!!!!!!!
//3.Написать функцию, которая принимает три отдельные цифры 
//и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.

let num1 = 1;
let num2 = 4;
let num3 = 9;

function threeInOne(num1, num2, num3){
  let result = Number('' + num1 + num2 + num3);
  return result;
//  let result = String(num1) + String(num2) + String(num3);
//   num1 = String(num1);
//   num2 = String(num2);
//   num3 = String(num3);
  
// result = String(num1) + String(num2) + String(num3);


}

console.log(threeInOne(num1, num2, num3));
*/


/*!!!!!!!!!!!!!!!!
4.//Написать функцию, которая принимает длину и ширину прямоугольника
//и вычисляет его площадь.
//Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function square(l, w){
  let s;
  if (w == undefined) {
    s = l * l;
  } else {
    s = l * w;
         }
  return s;
}

console.log(square (4, 5));

*/

/*5.!!!!!!!!!!!!!!!!
//Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//Совершенное число – это число, равное сумме всех своих собственных делителей.

function isPerfectNuber(a){
let b = 0;
  for (let i=1; i<a; i++){
 if (a % i === 0){
   b = b + i;
 }
}
  if (b === a){
    return true;
  } else {
    return false;
  }
}

console.log(isPerfectNuber(28));
   */




/*!!!!!!!!!!!!!!!!
// 6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//и выводит только те числа из диапазона, которые являются совершенными. 
//Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function isPerfectNuber(a){
    let b = 0;
      for (let i=1; i<a; i++){
     if (a % i === 0){
       b = b + i;
     }
    }
      if (b === a){
        return true;
      } else {
        return false;
      }
    }
    
    
    function displayPerfectNumbers(nStart, nEnd){
      for (let i = nStart; i <= nEnd; i++){
        if (isPerfectNuber(i)) {
          console.log(i);
        }
      }
    }
    displayPerfectNumbers(6, 500);
*/

/*!!!!!!!!!!!!!!!!
7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
let hour = Number(prompt('Insert hours'));
let minutes = Number(prompt('Insert minutes'));
let seconds = Number(prompt('Insert seconds'));

function time(hour, minutes, seconds) {
  if (String(hour).length === 1){
   hour = '0'+hour;
  } else {
    hour = String(hour);
  }
  if (String(minutes).length === 1){
   minutes = '0'+minutes;
  } else if (minutes === undefined){
    minutes='0';
  } else {
    minutes = String(minutes);
  }
  if (String(seconds).length === 1){
   seconds = '0'+seconds;
  } else if (seconds === undefined){
    seconds='00';
  } else {
    seconds = String(seconds);
  }
 return hour + ':' + minutes + ':' + seconds;
}
console.log(time(hour, minutes, seconds));
*/


/*!!!!!!!!!!!!!
//8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
let hour = 2;
let minutes = 5;
let seconds = 23;

function toSeconds(hours, minutes, seconds) {
  let secondsFromHour = (hours * 60) * 60;
  let secondsFromMinutes = minutes * 60;
  let secondsFromHours = seconds;
  let result;

  //Option#1
  if (typeof hours === typeof (1) && typeof minutes === typeof (1) && typeof seconds === typeof (1)) {
    return result = secondsFromHour + secondsFromMinutes + secondsFromHours;
  } else {
    return result = 'Bad data for conversion in';
  }
  
  //Option #2
  // if  (typeof hours === 'string' || typeof minutes === 'string' || typeof seconds === 'string') {
  //   return result = 'Bad data for conversion in';
  // } else {
  //   return result = secondsFromHour + secondsFromMinutes + secondsFromHours;
  // } 
}

console.log(toSeconds(hour, minutes, seconds) + ' seconds');

//9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// function time (seconds) {
//   let hourFromSeconds = Math.floor(seconds/3600);
//   let minuteFromSeconds = Math.floor((seconds%3600)/60);
//   let secondFromSeconds = seconds%60;
//   let result;
//   return result=time1(hourFromSeconds, minuteFromSeconds, secondFromSeconds);
// }
// console.log(time (7665));

// function time1(hour, minutes, seconds) {
//   if (String(hour).length === 1){
//    hour = '0'+hour;
//   } else {
//     hour = String(hour);
//   }
//   if (String(minutes).length === 1){
//    minutes = '0'+minutes;
//   } else if (minutes === undefined){
//     minutes='00';
//   } else {
//     minutes = String(minutes);
//   }
//   if (String(seconds).length === 1){
//    seconds = '0'+seconds;
//   } else if (seconds === undefined){
//     seconds='00';
//   } else {
//     seconds = String(seconds);
//   }
//  return hour + ':' + minutes + ':' + seconds;
// }


//NOR READY
//10.Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»