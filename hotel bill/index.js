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
  const dayCharge = JSON.parse(readLine());
  const days = parseInt(readLine());
  
  let bill,discount;
   bill=dayCharge*days
  let discountedBill=bill;
  
  if (days>5){
      discount=15
    discountedBill=(bill-(bill*discount)/100)  
  }else if(days>2){
      discount=5
      discountedBill=bill-(bill*discount)/100
  }else{
      discount=0
      discountedBill=bill-(bill*discount)/100
  }
 console.log(discountedBill)
}  /* Write your code here */
