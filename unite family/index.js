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
  const father = JSON.parse(readLine().replace(/'/g, '"'));
  const mother = JSON.parse(readLine().replace(/'/g, '"'));
  const child = JSON.parse(readLine().replace(/'/g, '"'));
 
  /* Write your code here */ 
const family={...father,...mother,...child}
/* Please do not modify anything below this line */
  console.log(`Mr and Mrs ${family.surname} went to a picnic in ${family.city} with a boy and a pet ${family.pet}. Mrs ${family.surname} made a special dish "${family.dish}"`);
}
