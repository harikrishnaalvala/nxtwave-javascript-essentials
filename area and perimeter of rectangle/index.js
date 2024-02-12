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

function Spacecraft(name) {
  this.name = name;
  
  this.launch=function(){
      console.log(`${this.name} launched`)
  }
  /* Write your code here */
}

/* Please do not modify anything below this line */

function main() {
  const spacecraftName = readLine();
  const spacecraft = new Spacecraft(spacecraftName);
  spacecraft.launch();
} 
