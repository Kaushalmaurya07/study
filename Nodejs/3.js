function min(arr) {
    if (!arr.length) {
      return undefined; 
    }
    let minNum = arr[0];
    for (const num of arr) {
      if (num < minNum) {
        minNum = num;
      }
    }
  
    return minNum;
  }
  
  const arr = [5, 10, 2, 8];
  console.log(min(arr));