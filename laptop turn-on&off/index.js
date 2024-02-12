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
    
constructor(color, brand, battery, notifications,turnOn){
    this.color=color;
    this.brand=brand;
    this.battery=battery;
    this.notifications=notifications;
    this.isTurnOn=turnOn
}
turnOn(){
        this.isTurnOn=true;
    
}

turnOff(){
    this.isTurnOn=false;
    }

  /* Write your code here */

}

/* Please do not modify anything below this line */

function main() {
  const color = readLine();
  const brand = readLine();
  const battery = parseInt(readLine());
  const notifications = parseInt(readLine());
  const turnOn = JSON.parse(readLine());
  
  const laptop1 = new Laptop(color, brand, battery, notifications, turnOn);
  
  console.log(laptop1.isTurnOn); // As Laptop is not yet turned on, it should print false.
  laptop1.turnOn(); //The Laptop is turned on.
  console.log(laptop1.isTurnOn); // As Laptop is turned on, it should print true.
  laptop1.turnOff(); //The Laptop is turned off.
  console.log(laptop1.isTurnOn) // As Laptop is turned on, it should print false.
}
