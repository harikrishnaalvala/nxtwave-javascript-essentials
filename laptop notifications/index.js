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
  getNotification(){
      this.notifications=this.notifications+1;
      console.log(`You have ${this.notifications} notifications`)
  }
  message(){
      console.log(`You got a message`)
  }
  clearNotifications(){
      this.notifications=0;
      console.log(`Notifications are cleared`)
      
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
  
  laptop1.turnOn(); //The Laptop is turned on.
  laptop1.getNotification(); // Increment the notifications by 1.
  laptop1.message(); // 'You got a message' will be logged.
  laptop1.getNotification(); // Increment the notifications by 1.
  laptop1.clearNotifications(); // 'Notifications are cleared' will be logged.
}
