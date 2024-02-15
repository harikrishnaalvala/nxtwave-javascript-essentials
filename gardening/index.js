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
  const isGrassTrimmerFound = JSON.parse(readLine());
  const isWaterHosePipeFound = JSON.parse(readLine());
 const grassTrimmer=()=>{
      return new Promise((resolve,reject)=>{
          isGrassTrimmerFound?resolve("Grass Trimmed"):reject("Grass Trimmer Not Found")
      })
  }
  const cleanGarden=()=>{
      return new Promise((resolve,reject)=>{
          resolve("Garden Cleaned")
      })
  }
  const waterPlanting=()=>{
      return new Promise((resolve,reject)=>{
          isWaterHosePipeFound?resolve("Watered Plants"):reject("Water Hose Pipe Not Found")
      })
  }
  /* Write your code here */

  const myPromise = async () => {
    try {
      const firstOne=await grassTrimmer()
      console.log(firstOne)
      const secondOne=await cleanGarden()
      console.log(secondOne)
      const thirdOne=await waterPlanting()
      console.log(thirdOne)
      /* Write your code here */
      
    } catch(error) {
     console.log(error)
      /* Write your code here */
      
    }
  };
  
  myPromise();
}
