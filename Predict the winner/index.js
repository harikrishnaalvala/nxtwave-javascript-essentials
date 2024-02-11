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

function getWinnerOfTheRace(averageSpeedOfRacer1, averageSpeedOfRacer2) {
  
  let winner=averageSpeedOfRacer1>averageSpeedOfRacer2?"Racer 1":"Racer 2"
  return winner
  /*
   * Write your code here and return the output.
   */
}

/* Please do not modify anything below this line */

function main() {
  let averageSpeedOfRacer1 = JSON.parse(readLine());
  let averageSpeedOfRacer2 = JSON.parse(readLine());

  let winner = getWinnerOfTheRace(averageSpeedOfRacer1, averageSpeedOfRacer2);
  
  console.log(winner);
}
