function isTen(a){
    if(a === 10){
      return true;
    }
  }
  
  function isTenInDiapazonChysel(firstN, endN) {
    let c;
    let b; 
    
    for (let i = firstN ; i<=endN || (isTen(i) == true) ; i++ ){
      
        if (isTen(i) == true) {
          
            c =  'Is';  
          console.log(c);
        } else { 
              c = 'nema';
              console.log(c);
               };
  
   } 
         return c;
  }
  
    console.log(isTenInDiapazonChysel (9, 12));