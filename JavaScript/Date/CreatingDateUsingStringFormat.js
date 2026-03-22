// Creating Date Using String Format
// Format: "YYYY-MM-DD" or "YYYY/MM/DD"

console.log("Creating Date Using String Format----------------");

//1)Format: "YYYY-MM-DD" (this is best)
console.log("1)Format: 'YYYY-MM-DD'");
let date = new Date("2025-05-29")
console.log("Date: ",date);



//2)Format: "YYYY/MM/DD" (this is not recommended)
console.log("2)Format: 'YYYY/MM/DD'");
let date1 = new Date("2025/05/29")
console.log("Date: ",date1);

