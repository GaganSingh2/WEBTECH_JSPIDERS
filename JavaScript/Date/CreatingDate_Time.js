// Creating Date Object(Current Date and Time)------------ 

console.log("Creating Date Object(Current Date and Time)--------------");
let date = new Date();
console.log("Current Date & Time(UST): ",date);
console.log("Current Date & Time(IST): "+date);

console.log("Current Date & Time(IST): "+date.toString());

console.log("Current Date & Time(LocalFormat): "+date.toLocaleString());

console.log("Current Date(IST): "+date.toDateString());

console.log("Current Time(IST): "+date.toTimeString());