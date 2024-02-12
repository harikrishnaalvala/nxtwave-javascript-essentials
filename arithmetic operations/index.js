"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function ArithmeticOperations(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;
}

function main() {
  const firstNumber = JSON.parse(readLine());
  const secondNumber = JSON.parse(readLine());
  
  
  const operation1 = new ArithmeticOperations(firstNumber, secondNumber);
  ArithmeticOperations.prototype.sumOfNumbers=function(){
      return firstNumber+secondNumber
  }
  ArithmeticOperations.prototype.productOfNumbers=function(){
      return firstNumber*secondNumber
  }
  ArithmeticOperations.prototype.differenceOfNumbers=function(){
      return firstNumber-secondNumber
  }
  /* Write your code here */

  console.log(operation1.sumOfNumbers());
  console.log(operation1.productOfNumbers());
  console.log(operation1.differenceOfNumbers());
}
