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
  const userName = readLine();
  const users = ["Abhiram", "Gabrill", "Mosh", "Alia", "Rehman", "Manoj"];
  const searchUser=()=>{
     return new Promise ((resolve,reject)=>{
         let user=users.includes(userName)
         if(user){
             resolve("User Found")
         }else{
             reject("User Not Found")
         }
         });
  }
const myUser = async () => {
try{
  const responseOf = await searchUser();
  console.log(responseOf);
}catch(error){
    console.log(error)
}
}
myUser()

}  /* Write your code here */

