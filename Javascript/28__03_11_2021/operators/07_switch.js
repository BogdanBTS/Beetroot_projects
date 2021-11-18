let rating = prompt('Оценка за дз?');

switch (rating) {
    case 2:
        console.log("Плохо")
        break;
    case 3:
    case 4:
        console.log("Хорошо")
        break;
    case 5:
        console.log("Отлично");
        break;
    default:
        console.log("Такой оценки не может быть!")
        break;
}