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

class Laptop {
  constructor(color, brand, battery, notifications){
      this.color=color;
      this.brand=brand;
      this.battery=battery;
      this.notifications=notifications
  }
  /* Write your code here */

}

/* Please do not modify anything below this line */

function main() {
  const color = readLine();
  const brand = readLine();
  const battery = parseInt(readLine());
  const notifications = parseInt(readLine());
  
  const laptop1 = new Laptop(color, brand, battery, notifications);
  
  console.log(laptop1.color); 
  console.log(laptop1.brand); 
  console.log(laptop1.battery);
  console.log(laptop1.notifications);
}
