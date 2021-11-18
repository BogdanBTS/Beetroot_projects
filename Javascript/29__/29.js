let currentDay = 'Неділя';
let isYes ;

for (isYes = true ; isYes == true ; isYes = confirm(`Поточний день ${currentDay}, хочете продовжити?`) ){
        
   
      if(currentDay == 'Понеділок'){
        currentDay = 'Вівторок';

      } else if(currentDay == 'Вівторок'){
        currentDay = 'Середа';
      } else if (currentDay == 'Середа') {
        currentDay = 'Четвер';
      } else if (currentDay == 'Четвер') {
        currentDay = "П'ятниця";
      } else if (currentDay == "П'ятниця"){
        currentDay = 'Субота';
      } else if (currentDay == 'Субота') {
        currentDay = 'Неділя';
      } else if (currentDay == 'Неділя') {
        currentDay = 'Понеділок';
      };

};







// 10 Игра «Угадай число». 

// Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
// каждую итерацию цикла делите диапазон чисел пополам, 
   

   
alert('Загадать число от 0 до 100');

let minN  = 0;
let maxN = 100;
let numberOfValues = maxN; 
console.log('if Yes - numberOfValues start: ' + numberOfValues);   
let  a = 'Yes';

 while ( a == 'Yes' ) {
    
    a= prompt(`Ваше чило більше? ${numberOfValues} Yes/No/ItsMyNumber`)
    numberOfValues = Math.floor((numberOfValues / 2));
    minN =  maxN - numberOfValues + 1;
    maxN =  maxN;
 
    console.log('if Yes - numberOfValues: ' + numberOfValues);     
    console.log('if Yes - minN: ' + minN);
    console.log('if Yes - maxN: ' + maxN);
    console.log('if Yes - numberOfValues after: ' + numberOfValues);  
  
};

   



//    цикл - 100 / 2 (n/2)
   
// // записываете результат в N и 
   
// // спрашиваете у пользователя 
//     «Ваше число > N,
//      < N или == N?». 
   
// // В зависимости от того, что указал пользователь, уменьшаете диапазон. 
   
// // Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
   
// // Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. 
   
// // И так до тех пор, пока пользователь не выберет == N.

     