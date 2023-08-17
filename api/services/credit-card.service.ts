export const creditCardService = {
  validateCardNumber,
};

function validateCardNumber(cardNumber: string): boolean {
  if (!cardNumber) return false;

  const digits = cardNumber.replace(/\D/g, '').split('').map(Number);
  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
