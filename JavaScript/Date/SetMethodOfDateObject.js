// Set Method of Date Object-------------------'
console.log("Set Method of Date Object-------------------");

let setDate = new Date()
console.log("Date & Time: ",setDate);

// 1)setFullYear(): set the year
setDate.setFullYear(2020)
console.log("setFullYear(): ",setDate);


// 2)setMonth(): set the month (moths are 0-indexed)
setDate.setMonth(5)
console.log("setMonth(): ",setDate);


// 3)setDate(): set the Date (day of the month (1-31))
setDate.setDate(30)
console.log("setDate(): ",setDate);


// 4)setHours(): set the Hours (0-23)
setDate.setHours(4)
console.log("setHours(): ",setDate);


// 5)setMinutes(): set the minutes (0-59)
setDate.setMinutes(15)
console.log("setMinutes(): ",setDate);