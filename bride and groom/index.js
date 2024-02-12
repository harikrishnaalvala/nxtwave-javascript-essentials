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

function Marriage(couple) {
    let {bride,groom}=couple
  /* Write your code here */
  
  this.bride = bride;
  this.groom = groom;
  this.family = function() {  
    console.log(`Mr & Mrs ${this.groom}`);
  };
}

/* Please do not modify anything below this line */

function main() {
  const couple = JSON.parse(readLine().replace(/'/g, '"'));
  
  const marriedCouple = new Marriage(couple);
  marriedCouple.family();
}
