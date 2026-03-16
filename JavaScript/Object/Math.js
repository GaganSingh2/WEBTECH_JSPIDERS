console.log("abs(4): "+Math.abs(4));
console.log("abs(-4): "+Math.abs(-4));

console.log("trunc(4.85654): "+Math.trunc(4.85654));

console.log("floor(4.85654): "+Math.floor(4.85654));

console.log("ceil(4.85654): "+Math.ceil(4.8654));

console.log("round(4.85654): "+Math.round(4.85654));

console.log("round(4.45654): "+Math.round(4.45654));

console.log("min(4,2,0,3,-3,5,5): "+Math.min(4,2,0,3,-3,5,5)); //can we pass number as string?

console.log("max(4,2,0,3,-3,5,5): "+Math.max(4,2,0,3,-3,5,5));

console.log("sqrt(25): "+Math.sqrt(25));

console.log("cbrt(27): "+Math.cbrt(27));

console.log("pow(2, 3): "+Math.pow(2, 3));

console.log("Generate Randome number b/w 0 to 1: "+Math.random());

// Q)Generate the 4-digit otp?
let min = 1000
let max = 9999

let otp = Math.floor(Math.random() * (max-min+1) + min) //
console.log("Otp: "+otp);
