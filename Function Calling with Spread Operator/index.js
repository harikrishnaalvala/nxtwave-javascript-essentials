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

function getProductOfTheIntegers(...args) {
  let productOfAllValues = 1;
  for (let value of args) {
    productOfAllValues = productOfAllValues * value;
  }
  
  return productOfAllValues;
}

function main() {
  let integersArray = JSON.parse(readLine().replace(/'/g, '"'));
/* Please do not modify anything above this line */

  
  console.log(getProductOfTheIntegers(...integersArray));
  
  /*
 
   * Write your code here and log the output.
   */
}

