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
return{
  firstName,
  lastName,
  person(){
      return(`${firstName} ${lastName}`)
  }}
}
  /* Write your code here. */


function main() {
  const firstName = readLine();
  const lastName = readLine();
 let fullName= Person(firstName,lastName)
 console.log(fullName.person())
  /* Write your code here. */
}
