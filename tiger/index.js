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

class Animal {
  constructor(species){
      this.species=species
  }
  eat(){
      console.log(`${this.species} is eating`)
  }
  /* Write your code here */

}

class Tiger extends Animal {
  constructor(species, age) {
    super(species);
    this.age = age;
  }

  hunt() {
    console.log(`A ${this.age} years old ${this.species} is hunting`);
  }

  roar() {
    console.log(`${this.species} is roaring`);
  }
}

/* Please do not modify anything below this line */

function main() {
  const species = readLine();
  const age = parseInt(readLine());
  
  const tiger1 = new Tiger(species, age);

  tiger1.eat();
}
