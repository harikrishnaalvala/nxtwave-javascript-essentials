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
  let numbersArray = JSON.parse(readLine());
function add(a,b,...rest){
    let sum=0
    for (let i of rest){
        sum+=i
        
    }    return sum
}
 console.log(add(...numbersArray))
/* Please do not modify anything above this line */

  /*
   * Write your code here and log the output.
   */
}
