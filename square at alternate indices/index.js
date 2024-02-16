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
  const myArray = JSON.parse(readLine());
  function squresOfAlternateIndices(myArray){
      return myArray.map((item,index)=>{
          if (index%2==0){
              return item*item
          }else{
              return item
          }
      })
  }
  console.log(squresOfAlternateIndices(myArray))
  /* Write your code here */
}
