"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let operator = readLine();
  let number1 = JSON.parse(readLine());
  let number2 = JSON.parse(readLine());

  /* Please do not modify anything above this line */
  switch(operator){
      case "+":
          console.log(number1+number2)
          break;
      case "-":
          console.log(number1-number2)
          break;
      case "*":
          console.log(number1*number2)
          break;
      case "/":
          console.log(number1/number2)
          break;
      default:
          console.log("Invalid operator")
          break;
  }
  /*
   * Write your code here and log the output.
   */
}
