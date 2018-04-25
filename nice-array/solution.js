function isNice(arr){


  
  return arr.length > 0 && arr.every(num =>{ arr.include(num -1) || arr.include(num +1)}
};


console.log(isNice([2,10,9,3]))
console.log(isNice([3,4,5,7]))