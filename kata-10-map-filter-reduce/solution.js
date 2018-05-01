// kata 1 lab 10.
function double(array) {
   const mapArray = array.map(acc => acc * 2)
   return mapArray
}

// kata 2 lab 10
function filter_list(l) {
 const filteredList = l.filter(Number.isInteger)
 return filteredList;
}

// kata 3 lab 10
function find_average(array) {
  const sum = (acc, current) => acc + current;
  return array.reduce(sum) / array.length
  }