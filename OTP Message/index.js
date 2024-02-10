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

function getOtpMessage(name, otp) {
  
  return (`Hi! ${name}, ${otp} is your OTP.`)
  
  
  /*
   * Write your code here and return the output.
   */ 
}

/* Please do not modify anything below this line */

function main() {
  let customerName = readLine();
  let otp = JSON.parse(readLine());

  let otpMessage = getOtpMessage(customerName, otp);

  console.log(otpMessage);
}
