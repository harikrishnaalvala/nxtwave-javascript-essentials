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
  let input = inputString[currentLine++]; 
  return input === undefined ? undefined : JSON.parse(input);
}

/* Please do not modify anything above this line */
  
  /* Write your code here */ 

/* Please do not modify anything below this line */

function main() {
  const principal = readLine();
  const time = readLine();
  const appreciation = readLine();
function calculateFinalValueWithAppreciation(principal,time=2,appreciation=5){
   return  principal*(1+time*appreciation/100)
}
  const finalValue = calculateFinalValueWithAppreciation(principal, time, appreciation);
 
  console.log(finalValue);
}
