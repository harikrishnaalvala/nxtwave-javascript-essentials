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
  let scheduledDate = new Date("2020-2-15");
  let rescheduledDate = JSON.parse(readLine());
  let rescheduledMonth = JSON.parse(readLine());
  let rescheduledYear = JSON.parse(readLine());
/* Please do not modify anything above this line */
  let reScheduledDates=new Date(rescheduledYear,rescheduledMonth,rescheduledDate)
  /*
   * Write your code here.
   */
  
/* Please do not modify anything below this line */  
  console.log(`${reScheduledDates.getDate()}-${reScheduledDates.getMonth() + 1}-${reScheduledDates.getFullYear()}`);
}
