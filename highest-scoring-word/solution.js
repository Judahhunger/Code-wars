function high(x){
  myArray = x.split(' ');
  if(myArray.length < 1){
  return ''}
  function getSum(total, num) {
    return total + num;
}
let map = Array.prototype.map;
let xMap = map.call(x, function(n){
  return n.charCodeAt(0)-96;
});
xJoin = xMap.join(',')
xReplace = xJoin.replace(/-64/g, ' ').replace(/,/g, ' ').split('   ')
xRep = xReplace.map(e => e.split(' ').map(e => parseInt(e)).reduce(getSum))
xMax = Math.max(...xRep)
xIndex = xRep.indexOf(xMax)

return myArray[xIndex] === undefined ? '' : myArray[xIndex];
}