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

function main() {
  let fare = JSON.parse(readLine());
  let discountPercentage = JSON.parse(readLine());

  /* Please do not modify anything above this line */
  let discount=fare-(fare*discountPercentage)/100
  console.log(discount)
  /*
   * Write the arrow function here and log the output.
   */
}
