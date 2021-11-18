{
    // фкторіал 4 
// факторіал числа 4 = 1 * 2 * 3 * 4;
// (4! = 1·2·3·4 = 24 )
// 1 * 2 = 2 
// 2 * 3 = 6
// 6 * 4 = 24
// 
// Написать функцию, которая вычисляет факториал переданного ей числа.
// 


// let userNubber = Number(prompt('Введіть перше число'));

// let userNubber = 4;

// let factorialNumber = 0;
// let n = 1;

// for (let i = 1; i < userNubber+1; i++){
      
   
//      let j = i;
     
  
//      n = (n) * (j++);
     
//      factorialNumber = (j * j++) * factorialNumber;
  
//      console.log('крок : ' + i + ' значення fN : ' + n);
// };

// console.log(factorialNumber);
}





function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }