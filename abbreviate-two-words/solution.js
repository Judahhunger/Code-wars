function abbrevName(name){
  let arrayStr = name.split(' ');
      return `${arrayStr[0].charAt(0).toUpperCase()}.${arrayStr[1].charAt(0).toUpperCase()}`;
  }