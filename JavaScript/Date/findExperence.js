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


// Q)Prabhat joined in a company on 12-april-2026 and left on 21-nov-2029. find the experience of prabhat in company.
console.log("Q)Prabhat joined in a company on 12-april-2026 and left on 21-nov-2029. find the experience of prabhat in company.");


let joinDate = new Date("2026-04-12")
let leftDate = new Date("2029-11-21")

let year = leftDate.getFullYear() - joinDate.getFullYear()
let month = leftDate.getMonth() - joinDate.getMonth()
let day = leftDate.getDate() - joinDate.getDate()

if(day<0){
    month--
    day += 30
}
if(month<0){
    year--
    month += 12
}

console.log(`Total Experence: ${year} years and ${month} months and ${day} days`);