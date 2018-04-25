function high(x){
  myArray = x.split(' ');
  
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
console.log(xRep)
console.log(xMax)
return myArray[xIndex]
}

high('stuff and am other crap zz kk')