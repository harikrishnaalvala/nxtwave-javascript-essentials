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

class Submarine {
  constructor(totalTorpedos,torpedosFired) {
    this.isSubmerged = false;
    this.totalTorpedos=totalTorpedos;
    this.torpedosFired=torpedosFired;
  }
      propertyIsSubmerged(Submerged)
  {
  this.isSubmerged=Submerged
}
  isSubmergedSub() {
    this.propertyIsSubmerged(true);
    console.log("Submarine Submerged")
  }
  fireTorpedos(){
  console.log(`${this.torpedosFired} Torpedos Fired, ${this.totalTorpedos-this.torpedosFired} Left`)
}
  surfaceWhen() {
    this.propertyIsSubmerged(true);
    console.log("Submarine Surfaced")
  }
}

class WeaponUnit extends Submarine {
  isSubmergedSub(){
      super.isSubmergedSub();
  }
  fireTorpedos(){
      super.fireTorpedos();
  }
  surfaceWhen(){
      super.surfaceWhen()
  }
  /* Write your code here */

}

/* Please do not modify anything below this line */

function main() {
  const totalTorpedos = parseInt(readLine());
  const torpedosFired = parseInt(readLine());  
  
  const weaponUnit1 = new WeaponUnit(totalTorpedos, torpedosFired);
  
  weaponUnit1.isSubmergedSub();
  weaponUnit1.fireTorpedos();
  weaponUnit1.surfaceWhen();
}
