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

  const objectEntities = [
    {
      shape: "circle",
      color: "Green"
    },
    {
      shape: "circle",
      color: "White"
    },
    {
      shape: "triangle", 
      color: "Orange"
    }
  ];
  
  const shape = readLine();
  const arrOfobject=[];
  for (let Object of objectEntities){
      if (Object.shape===shape){
           arrOfobject.push(Object)
      }
  }
  console.log(arrOfobject)
  /* Write your code here and log the output */
}
