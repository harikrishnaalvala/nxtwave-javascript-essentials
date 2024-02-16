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

class Mobile {
    constructor(brand, ram, batteryStatus, isCallInProgress, song) {
        this.brand = brand;
        this.ram = ram;
        this.battery = batteryStatus;
        this.isOnCall = isCallInProgress;
        this.song = song;
    }
 fullCharge() {
        if (this.battery < 100) {                        
            this.battery = 100;
            console.log('Mobile Fully Charged');          
        } else {
            console.log('Mobile Already Fully Charged');  
                 
        }
    }

    playMusic() {
        console.log(`Playing ${this.song} Song`);
    }

    stopMusic() {
        console.log('Music Stopped');
    }

    makeCall() {
        this.isOnCall = true;
        console.log('Calling...');
    }

    endCall() {
        if (this.isOnCall) {
            console.log('Call Ended');
            this.isOnCall = false;
        } else {
            console.log('No Ongoing Call to End');
        }
    }

    removeChargingremoveChargingIt() {
        return console.log('Please remove charging');
    }
}

  /*
   * Write your code here
   */



/* Please do not modify anything below this line */

function main() {
  const brand = readLine();
  const ram = readLine();
  const batteryStatus = parseInt(readLine());
  const song = readLine();
  const isCallInProgress = JSON.parse(readLine());

/* Please do not modify anything above this line */
  
  const myMobile = new Mobile(brand, ram, batteryStatus, isCallInProgress, song);// Write your code here

/* Please do not modify anything below this line */
  
  myMobile.fullCharge();
  
  myMobile.playMusic();
  myMobile.stopMusic();
  
  myMobile.endCall();
  myMobile.makeCall();
  myMobile.endCall();
}
