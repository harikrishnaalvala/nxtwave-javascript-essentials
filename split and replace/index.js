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
  const separator = readLine();
  const replaceString = readLine();
  function seperarator1(inputString,separator,replaceString){
      let splitString=inputString.split(separator)
     let result=splitString.map((item)=>item.length>7?item=replaceString:item)
   console.log(result.join(" "))
  }
 seperarator1(inputString,separator,replaceString) 
       
  /* Write your code here */
}
