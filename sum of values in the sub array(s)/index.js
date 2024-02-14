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
  const nestedArray = JSON.parse(readLine());
function findSumOf(arr){
    let sum=arr.reduce((accumalator,actualvalue)=>accumalator+actualvalue)
    return sum
}
function findArrayWithEvenElements(arr){
    return arr.some((num)=>num%2===0)
}
const sumOfArray=nestedArray.map((eachArry)=>findArrayWithEvenElements(eachArry)?findSumOf(eachArry):0)
console.log(sumOfArray)
}
