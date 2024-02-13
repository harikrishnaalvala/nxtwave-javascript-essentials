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
  const pin = parseInt(readLine());
  const myPromise = new Promise((resolve,reject)=>{
     resolve(pin);
  });
  myPromise.then((response)=>{
      console.log(response)
  });
      
 
  /* Write your code here */
}
