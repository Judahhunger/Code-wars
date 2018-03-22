'use strict'
function insertDash(num) {
  num = num.toString();
  let newString = [];
  for( let i = 0; i < num.length; i ++){
   if ((num.charAt(i -1)%2 !== 0)&&(num.charAt(i)%2 !== 0)){
     newString.push('-', num[i]);
   }else{
     newString.push(num[i]);
   }
    
  }
  return newString.join('');
}

