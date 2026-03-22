// Creating Date Object(Current Date and Time)------------ 

console.log("Creating Date Object(Current Date and Time)--------------");
let date = new Date();
console.log("Current Date & Time(UST): ",date);
console.log("Current Date & Time(IST): "+date);

console.log("Current Date & Time(IST): "+date.toString());

console.log("Current Date & Time(LocalFormat): "+date.toLocaleString());

console.log("Current Date(IST): "+date.toDateString());

console.log("Current Time(IST): "+date.toTimeString());


// Creating Date using parameters-----------
console.log("Creating Date using parameters--------------------");
let date1 = new Date(2026,1,22) //Month is 0-based(here 1 means February)
console.log(date1);


//Creating Date and Time using Parameter---------------
//new Date(year,month,day,hours,minutes,seconds)
console.log("Creating Date and time using parameters--------------------");
let date2 = new Date(2026,1,22,2,13,56) //Month is 0-based(here 1 means February)
console.log(date2);


// Date.now(): Return the current time in millisecond from jan 1, 1970
console.log("Date.now(): to return current time in millisecond from jan 1, 1970------------------");

let ms = Date.now()
console.log("Total Milliseconds: ",ms);

//Convert this millisecond into the years
let year = ms / (1000 * 60 * 60 * 24 * 365)
console.log("Total Years: ",year);
