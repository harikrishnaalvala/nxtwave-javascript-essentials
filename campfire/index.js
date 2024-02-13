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

function main() {
  const isSticksFound = JSON.parse(readLine());
  const isLighterFound = JSON.parse(readLine());
  const stickGather=()=>{
      return new Promise((resolve,reject)=>{
          isSticksFound?resolve("Sticks Gathered"):reject("Sticks Not Found")
      })
  }
  const sticksArrange=()=>{
      return new Promise((resolve,reject)=>{
          resolve("Sticks Arranged")
      })
  }
  const stickFire=()=>{
      return new Promise((resolve,reject)=>{
          isLighterFound?resolve("Campfire Lighted"):reject("Lighter Not Found")
      })
  }
  const myLight=async()=>{
      try{
          const stick= await stickGather()
          console.log(stick)
          const arrange=await sticksArrange()
          console.log(arrange)
          const fire= await stickFire()
          console.log(fire)
      }catch(error){
          console.log(error)
      }
  }
  myLight()
  /* Write your code here */
}
