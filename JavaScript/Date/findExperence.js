let startDate = new Date("2015-11-12")
let endDate = new Date("2025-01-07")

let years = endDate.getFullYear() - startDate.getFullYear();
let months = endDate.getMonth() - startDate.getMonth()
let days = endDate.getDate() - startDate.getDate();
// console.log(`Total Experence: ${years} and ${months} and ${days}`);
if(days<0){
    months--
    days += 30
}

if(months<0){
    years--
    months += 12
}

console.log(`Total Experence: ${years} years and ${months} months and ${days} days`);
