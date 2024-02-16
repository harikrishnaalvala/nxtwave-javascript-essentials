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
  const inputString = readLine();
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let start=false
  const upperCase=inputString.toUpperCase()
  for (let letter of vowels){
      const result=upperCase.endsWith(letter)
     if (result){
         start=true
     }
  }
  if (start){
      console.log(true)
  }else{
      console.log(false)
  }
  /* Write your code here */
}
