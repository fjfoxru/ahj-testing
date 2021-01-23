export function isValid(value) {
    if (/[^0-9-\s]+/.test(value)) return false;
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");
    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
          nDigit = parseInt(cDigit, 10);
      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
      nCheck += nDigit;
      bEven = !bEven;
    }
    return (nCheck % 10) == 0;
}

export function isCheckPaySystem(value) {
  const valueForCheck = +value[0];
  let checkResult;
  switch(valueForCheck) {
    case 2:
      checkResult = 'Мир' ; 
      break;  
    case 4:
      checkResult = 'VISA'; 
      break;
    case 8:
      checkResult = 'MasterCard' ; 
      break;  
    case 3:
    case 6:
      checkResult = 'Maestro' ; 
      break; 
    default:
      checkResult = 'Не понятно' ; 
      break;         
  }
  return checkResult;
} 

