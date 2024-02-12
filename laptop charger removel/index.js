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

class Laptop {
  constructor(color, brand, battery, notifications) {
    this.color = color;
    this.brand = brand;
    this.battery = battery;
    this.notifications = notifications;
    this.isTurnOn = false;
  }

  turnOn() {
    this.isTurnOn = true;
  }

  turnOff() {
    this.isTurnOn = false;
  }
  removeCharging(){
      
      console.log(`Please remove charger`)

  }
  /* Write your code here */

  charging() {
    if (this.battery < 100) {
      this.battery = 100;
      console.log(`Laptop Charged ${this.battery}%`);
    } else {
      console.log(`Laptop Fully Charged`);
      /* Write your code here */
      this.removeCharging()
    }
  }
  
}

/* Please do not modify anything below this line */

function main() {
  const color = readLine();
  const brand = readLine();
  const battery = parseInt(readLine());
  const notifications = parseInt(readLine());

  const laptop1 = new Laptop(color, brand, battery, notifications);
  
  laptop1.turnOn(); // Laptop Turned On
 
  console.log(`Laptop Charged ${laptop1.battery}%`); // Laptop battery charged percentage.
  
  laptop1.charging();
  // Laptop charging
}

