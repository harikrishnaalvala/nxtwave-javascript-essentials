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

function main() {
  const min = parseInt(readLine());
  const max = parseInt(readLine());
  const words = JSON.parse(readLine().replace(/'/g,'"'));
 const checkLengthOfString=words.every((word)=>word.length>=min &&word.length<=max)
 console.log(checkLengthOfString)
  /* Write your code here */
}
