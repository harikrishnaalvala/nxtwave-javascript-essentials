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

function createCabBooking(area, city) {

  /* Write your code here */

}

/* Please do not modify anything below this line */

function main() {
  const newArea = readLine();
  const newCity = readLine();
  function createCabBooking(area,city){
      let object={
      "area":area,
      "city":city,
      "updatePickupPoint":(newArea,newCity)=>{
          object.area=newArea,
          object.city=newCity
      }
      }
      return object
  }
  
  const cabBooking1 = createCabBooking("Abids", "Hyderabad");
  cabBooking1.updatePickupPoint(newArea, newCity);
 
  console.log(`${cabBooking1.area} ${cabBooking1.city}`);
}
