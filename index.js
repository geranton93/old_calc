var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var num1, num2, operation;

rl.question("Enter first number: ", function(answer) {
  num1 = parseFloat(answer);
  rl.question("Enter second number: ", function(answer) {
    num2 = parseFloat(answer);
    rl.question("Enter operation (+, -, *, /): ", function(answer) {
      operation = answer;

      var result;
      switch (operation) {
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
          result = "Invalid operation";
      }

      console.log("Result: " + result);
      rl.close();
    });
  });
});
