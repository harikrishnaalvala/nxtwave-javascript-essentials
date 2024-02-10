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
function logFamily(father,mother,...children){
    let f=children.join()
    console.log(`${father} ${mother}`)
    console.log(f)
}
/*
 * Write the function here and log the output. Use function name "logFamily".
 */

/* Please do not modify anything below this line */

function main() {
  let familyArray = JSON.parse(readLine().replace(/'/g, '"'));

  logFamily(...familyArray);
}
