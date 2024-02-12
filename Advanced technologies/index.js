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

function AdvancedTechnologies(technology1, technology2,technology3) {
    this.technology1=technology1;
     this.technology2=technology2;
      this.technology3=technology3;
    

  /* Write your code here */

}

/* Please do not modify anything below this line */  

function main() {
  const technology1 = readLine();
  const technology2 = readLine();
  const technology3 = readLine();
    
  const inDemandTechnologies = new AdvancedTechnologies(technology1, technology2, technology3);
    
  console.log(inDemandTechnologies);
}
