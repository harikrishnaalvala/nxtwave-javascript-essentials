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

function Person(firstName, lastName) {
  this.firstName=firstName;
  this.lastName=lastName
  /*
   * Write your code here.
   */
}

/* Please do not modify anything below this line */

function main() {
  let firstName = readLine();
  let lastName = readLine();
/* Please do not modify anything above this line */ 
  let f=new Person(firstName,lastName)
  console.log(`${firstName} ${lastName}`)
  /*
   * Write your code here and log output.
   */
}
