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
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let numbersArray = [1, 5];
/* Please do not modify anything above this line */
  numbersArray = [1,...myArray, 5]
  /*
   * Write your code here.
   */
  
/* Please do not modify anything below this line */  
  console.log(numbersArray);
}
