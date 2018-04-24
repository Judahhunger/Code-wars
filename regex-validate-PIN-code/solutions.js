'use strict'
function validatePIN (pin) {
  let res = RegExp('^[0-9]{6}$').test(pin)
  let xRes = RegExp('^[0-9]{4}$').test(pin)
  
  return (pin.length === 6 ) ? res : (pin.length === 4) ? xRes : false
 }