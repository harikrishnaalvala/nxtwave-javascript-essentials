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
  let input = inputString[currentLine++]; 
  return input === undefined ? undefined : JSON.parse(input);
}

/* Please do not modify anything above this line */
 function calculateTotalAmountWithInterest(p,t=1,r=10){
     return p*(1+t*r/100)
 }
/*
 * Write the function here and return the output. Use function name "calculateTotalAmountWithInterest".
 */

/* Please do not modify anything below this line */

function main() {
  let p = readLine();
  let t = readLine();
  let r = readLine();

  let finalValue = calculateTotalAmountWithInterest(p, t, r);

  console.log(finalValue);
}
