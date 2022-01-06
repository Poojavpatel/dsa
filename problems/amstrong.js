function checkAmstrong (numbers) {
  numbers.forEach(number => {
    const a = `${number}`.split('').reduce((sum, digit) => sum + (digit * digit * digit), 0);
    console.log(a == number ? 'Amstrong' : 'Not Amstrong');
  })
}

console.log(checkAmstrong([3,123,456,9, 153, 370, 407]))