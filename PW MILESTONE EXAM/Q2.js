function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
    console.log("Result:", result);
  }
  
  // Example usage
  calculator(10, 5, '+'); // Result: 15
  calculator(10, 5, '-'); // Result: 5
  calculator(10, 5, '*'); // Result: 50
  calculator(10, 5, '/'); // Result: 2
  calculator(10, 5, '%'); // Invalid operator
  