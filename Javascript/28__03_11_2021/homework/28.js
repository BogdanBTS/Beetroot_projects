//1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

//2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

//3 Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

//4 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

//5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

//6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

//7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

//8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

//9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

//10 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.


//Task#1
//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–11), подростком (12–18),взрослым (18_60) или пенсионером (60– ...).


let userAge = Number(prompt('Your age'));

if (0 <= userAge && userAge <= 11) {
    console.log('Child');
} else if (12 <= userAge && userAge < 18) {
    console.log('Tenager');
} else if (18 <= userAge && userAge < 60) {
    console.log('Adult');
} else {
    console.log('Senior');
};
console.log(userAge);



//Task #2
// Task #2
// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

//Get the number from 0-9
//Create a let with messege $
//Compare

let userNumber = -10;
let mesForUser;
switch (userNumber) {
    case 1:
        mesForUser = '!'
        break;
    case 2:
        mesForUser = '@'
        break;
    case 3:
        mesForUser = '#'
        break;
    case 4:
        mesForUser = '$'
        break;
    case 5:
        mesForUser = '%'
        break;
    case 6:
        mesForUser = '^'
        break;
    case 7:
        mesForUser = '&'
        break;
    case 8:
        mesForUser = '*'
        break;
    case 9:
        mesForUser = '('
        break;
    case 0:
        mesForUser = ')'
        break;
    default : 
        mesForUser = 'Not found'
        break;
}
console.log(mesForUser)

*/


//Task #3
// Запросить у пользователя трехзначное число
// и проверить, есть ли в нем одинаковые цифры.

/*
let num = 538;
let numStr = String(num);

if (numStr[0] == numStr[1] || numStr[0] == numStr[2] || numStr[1] == numStr[2]) {

    console.log ('есть одинаковые цифры')
} else {
    console.log ('нет одинаковые цифры')
}
*/

//История для меня
// console.log(typeof num);
// console.log(typeof (num), num);
// console.log(typeof (numStr), numStr);
// console.log(numStr[0])
// // 1 == 2
// // 1 == 3
// // // 2 == 1
// // 2 == 3
// // // 3 == 1
// // // 3 == 2




//Task #4
//  Запросить у пользователя год 
//и проверить, високосный он или нет.
// Високосный год либо
// кратен 400,
// либо кратен 4 
//и при этом не кратен 100.

/*
let year = 2005
if (((year % 400) == 0) || ((year % 4) == 0) && (year % 100) != 0) {
    console.log('Leap year')
} else {
    console.log('Not a leap year')
}
*/


//task #5
// Запросить у пользователя пятиразрядное число
// и определить, является ли оно палиндромом.

/*
let num = 15531;
let numStr = String(num);

 if (numStr[0] == numStr[4] && numStr[1] == numStr[3]) {

    console.log ('Polindrom')
}
else {
    console.log ('Not a polindrom')
 }
*/

//История для меня
// 12345
// 54321

// 01234
// 13531
// __5__
// _2x2_
// 1xxx1



//Task #6
// Написать конвертор валют.
// Пользователь вводит количество USD,
// выбирает, в какую валюту хочет перевести EUR, UAN или AZN,
// и получает в ответ соответствующую сумму.

/*
let userUsd = 1;
let userCurrency = 'UAN';
let a;
switch (userCurrency) {
    case 'AZN':
        a = userUsd * 1.5;
        break;
    case 'EUR':
        a = userUsd * 2.1;
        break;
    case 'UAN':
        a = userUsd * 0.5;
        break;
}
console.log(a)
*/

//Task7
// Запросить у пользователя сумму покупки 
//и вывести сумму к оплате со скидкой
//: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

/*
let userSumm = 199;
let discount;
let finalPrice;

if (200 <= userSumm && userSumm < 300) {
    discount = userSumm - (userSumm / 100 * 3);
    finalPrice = `Final price with 3% discount, ${discount} usd`;
} else if (300 <= userSumm && userSumm <= 500) {
    discount = userSumm - (userSumm / 100 * 5)
    finalPrice = `Final price with 5% discount, ${discount} usd`;
} else if (500 <= userSumm) {
    discount = userSumm - (userSumm / 100 * 7)
    finalPrice = `Final price with 7% discount, ${discount} usd`;
} else {
    finalPrice = `Final price, ${userSumm} usd`;
}

console.log(finalPrice);
*/

//Task#8
// Запросить у пользователя длину окружности и периметр квадрата.
// Определить, может ли такая окружность поместиться в указанный квадрат.

/*
let inputOkruzh = 10 / Math.PI;
let inputKvadrat = 26 / 4;
let outputResult;
let resultCalc;

if (inputKvadrat <= 0 || inputOkruzh <= 0) {
    resultCalc = 'Запрашиваемые значения должны быть больше 0.';
} else if (inputOkruzh < inputKvadrat) {
    resultCalc = 'Окружность с диаметром ' + (inputOkruzh.toFixed(1)) +
        " см. может поместиться в квадрат c длинной стороны " + (inputKvadrat.toFixed(1)) +
        ' см.';
} else {
    resultCalc =
        'Окружность с диаметром ' + (inputOkruzh.toFixed(1)) +
        " см. не может поместиться в квадрат c длинной стороны " +
        (inputKvadrat.toFixed(1)) +
        ' см.';
}

console.log(resultCalc);
*/

//Task#9
// Задать пользователю 3 вопроса,
//  в каждом вопросе по 3 варианта ответа.
//   За каждый правильный ответ начисляется 2 балла. 
//   После вопросов выведите пользователю количество набранных баллов.

/*
let questionFirst = Number(prompt('What is the capital of Ukraine? 1 - London. 2 - Kyiv. 3 - Zhytomyr.'));
let questionSecond = Number(prompt('Do you like cats? 1 - Yes. 2 - No. 3 - I am not sure.'));
let questionThird = Number(prompt('Are you a human? 1 - No. 2 - Yes. 3 - Who knows!?'));
let score = 0;

if (questionFirst == 2) {
    score += 2;
}
if (questionSecond == 1) {
    score += 2;
}
if (questionThird == 2) {
    score += 2;
}

console.log('Your score ' + score)
*/

//Task#10
// Запросить дату (день, месяц, год)
// и вывести следующую за ней дату. 
//Учтите возможность перехода на следующий месяц,
// год,
//а также високосный год.

/*let userDay = 31;
let userMonth = 5;
let userYear = 2005;

let nextDay;
let nextMonth = userMonth;
let nextYear = userYear;

let DaysInMonth;

if (userMonth == 1 || userMonth == 3 || userMonth == 5 || userMonth == 7 || userMonth == 8 || userMonth == 10 ||userMonth == 12){
    DaysInMonth = 31;
} else if (userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11) {
    DaysInMonth = 30;
} else if (userMonth == 2) {
    if (((userYear % 400) == 0) || ((userYear % 4) == 0) && (userYear % 100) != 0) {
        DaysInMonth = 29;
    } else DaysInMonth = 28;
}

if (userDay < DaysInMonth) {
    nextDay = userDay + 1;
} else if (userDay == DaysInMonth && userMonth < 12) {
    nextDay = 1;
    nextMonth = userMonth + 1;
} else if (userDay == 31 && userMonth == 12){
    nextDay = 1;
    nextMonth = 1;
    nextYear = userYear + 1;
}

console.log(nextDay, nextMonth, nextYear);
*/

//История для меня
// 31.12.2004
// 01.01.2005
// console.log(DaysInMonth);
//console.log(((userYear % 400) == 0) || ((userYear % 4) == 0) && (userYear % 100) != 0);
// if (((year % 400) == 0) || ((year % 4) == 0) && (year % 100) != 0) {
//     console.log('Leap year')
// 28.02.2004
// 29.02.2004
// 29.02.2004
// 01.03.2004