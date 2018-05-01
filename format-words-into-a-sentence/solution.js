
function formatWords(words){
  let nArray = [];
if(words !== null){
words.forEach(element => {
    if(element !== ''){
  nArray.push(element)
  nArray.push(', ')
    }
})}

nArray.length > 2 ? nArray.splice(-3,1,' and ') : '';
nArray.splice(-1)
return nArray.join('');
};
 