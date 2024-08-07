function checkDivisibility(numbers) {
    for (let num of numbers) {
      if (num % 3 === 0 && num % 2 !== 0) {
        console.log(num);
      }
    }
  }
  
  // Example usage
  let numbers = [1, 3, 6, 9, 12, 15, 18, 21];
  checkDivisibility(numbers); // 3, 9, 15, 21
  