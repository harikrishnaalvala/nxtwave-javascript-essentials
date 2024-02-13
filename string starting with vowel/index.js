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
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const hari=inputString.toLowerCase()
  let start=false
  for (let letter of vowels){
     const result=hari.startsWith(letter)
    if (result){
        start= true
  }
  }
  if (start){
      console.log(start)
  }else{
      console.log(false)
      
  }  /* Write your code here */
}
