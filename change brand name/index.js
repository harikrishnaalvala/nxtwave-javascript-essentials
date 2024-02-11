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
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function Company(brandName) {
  this.brandName = brandName,
  this.updateBrandName = function (proposedBrandName){
      this.brandName=proposedBrandName
  }
  
}
function main() {
  const proposedBrandName  = readLine();

  const company1 = new Company("Blue Royal");
  company1.updateBrandName(proposedBrandName);
  
  console.log(company1.brandName);   
}
