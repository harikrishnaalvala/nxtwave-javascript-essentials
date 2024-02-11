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
  let name = readLine();
  let role = readLine();

  /* Please do not modify anything above this line */
  let createUser = (name,role) => {
  return {
    name,
    role
  };
};

console.log(createUser(name,role));
  /*
   * Write the arrow function here and log the output.
   */
}
