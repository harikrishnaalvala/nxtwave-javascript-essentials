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

function Airplane(name, inAir) {
  this.name = name;
  this.isFlying = inAir;
}

function main() {
  const airplaneName = readLine();
  const inAir = JSON.parse(readLine());
  
  const airplane = new Airplane(airplaneName, inAir);
  Airplane.prototype.takeOff=function(){
      this.isFlying=true;
      console.log(`${this.name} is taking off`)
  }
  Airplane.prototype.land=function(){
      this.isFlying=false;
      console.log(`${this.name} is landing `)
  }
  if (inAir==true){
      airplane.land()
  }else{
      airplane.takeOff()
  }
  /* Write your code here */
  
  console.log(`Is Airplane flying? ${airplane.isFlying}`);
}
