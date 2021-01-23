export function isValid(forTest) {
  let testingValid = forTest;
  if (/[^0-9-\s]+/.test(testingValid)) return false;
  let nCheck = 0; let
    bEven = false;
  testingValid = testingValid.replace(/\D/g, '');
  for (let n = testingValid.length - 1; n >= 0; n -= 1) {
    const cDigit = testingValid.charAt(n);
    let nDigit = parseInt(cDigit, 10);
    const dit = nDigit * 2;
    if (bEven && dit > 9) nDigit -= 9;
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) === 0;
}

export function isCheckPaySystem(testPay) {
  const valueForCheck = +testPay[0];
  let checkResult;
  switch (valueForCheck) {
    case 2:
      checkResult = 'Мир';
      break;
    case 4:
      checkResult = 'VISA';
      break;
    case 8:
      checkResult = 'MasterCard';
      break;
    case 3:
    case 6:
      checkResult = 'Maestro';
      break;
    default:
      checkResult = 'Не понятно';
      break;
  }
  return checkResult;
}
