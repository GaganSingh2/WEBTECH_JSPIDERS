// Get Method of Date Object---------------
console.log("Get Method of Date Object---------------------");

let date = new Date();
console.log("Date & Time: ",date);

// 1)getFullYear(): return the four digit year eg. 2026
console.log("1)getFullYear()------------------");
console.log("Full Year: "+date.getFullYear());


// 2)getMonth(): return the month(0-11). January is 0, February is 1 and so on.
console.log("2)getMonth()------------------");
console.log("Month: "+date.getMonth());


// 3)getDate(): return the day of the month(1-31)
console.log("3)getDate()------------------");
console.log("Date(Day of Month(1-31)): "+date.getDate());


// 4)getDay(): return the day of the week(0-6). Sunday is 0, Monday is 1 and so on.
console.log("4)getDay()------------------");
console.log("Day of the Week(0-6): "+date.getDay());


// 5)getHours(): return the hour(0-23)
console.log("5)getHours()------------------");
console.log("Hours: "+date.getHours());


// 6)getMinutes(): return the minutes(0-59)
console.log("6)getMinutes()------------------");
console.log("Minutes: "+date.getMinutes());


// 7)getSeconds(): return the seconds(0-59)
console.log("5)getSeconds()------------------");
console.log("Seconds: "+date.getSeconds());


// 8)getMilliseconds(): return the milliseconds(0-999)
console.log("8)getMilliseconds()------------------");
console.log("Milliseconds: "+date.getMilliseconds());