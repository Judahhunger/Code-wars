function cubeOdd(arr) {
  //if nothing in array return undefined
if(arr.length === 0) {return undefined}else{
  //first cubed the array
let cubeArray = arr.map(x => Math.pow(x, 3))

//second filtered for only the odd nums
let filtered = (nums) => {return nums % 2 !==0}
let filterCubeArray = cubeArray.filter(filtered)

  //third added up the cubed filtered array
let arraySum = (acc, current) => acc + current;

let addupOddArray = filterCubeArray.reduce(arraySum);
//fourt if not a number return undefined else return the sum of odds
  return addupOddArray >= Number.isInteger() ? addupOddArray : undefined
  }}
