//List must be sorted
const binarySearch = (list, item) => {
    //All numbers we are searching through
    let low = 0;
    let high = list.length - 1;
    console.log('6 let high-' + high);
  
    while (low <= high) { //
        //Each time, you check the middle element:
      const mid = Math.floor((low + high) / 2);
        console.log('11 mid-' + mid);
      const guess = list[mid];
      console.log('13 guess-' + guess);
  
      if (guess === item) { //Found the item
        return mid;
      }
      if (guess > item) { //Guess was too high
        high = mid - 1;
        console.log('20 let high if-' + high);
        console.log('21 let low if-' + low); 
      } else {            //The guess was too low
        low = mid + 1;
      }
    }
  
    return null; //The item doesen`t exist.
  };
  
  //List must be sorted
  const myList = [1, 3, 5, 7, 9];
  
  console.log(binarySearch(myList, 9)); // 1
  //console.log(binarySearch(myList, -1)); // null