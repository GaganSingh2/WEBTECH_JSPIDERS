// Method of Math object---------------------
console.log("Method of Math object---------------------------");

// 1)Math.round(numericValue): it is used to round a number to the nearest integer. if value <0.5 then round down or if value >=0.5 then round up.
console.log("1)Math.round(numericValue)-----------------");
console.log("Math.round(4.6): "+Math.round(4.6)); //5
console.log("Math.round(4.4): "+Math.round(4.4)); //4
console.log("Math.round(4.5): "+Math.round(4.5)); //5
console.log("Math.round(-4.4): "+Math.round(-4.4)); //-4
console.log("Math.round(-4.5): "+Math.round(-4.5)); //-4
console.log("Math.round(-4.6): "+Math.round(-4.6)); //-4


// 2)Math.floor(number): round a number down to the nearest integer.
console.log("2)Math.floor(number)------------------");
console.log("math.floor(4.9): "+Math.floor(4.9));
console.log("math.floor(-4.9): "+Math.floor(-4.9));
console.log("math.floor(4.4): "+Math.floor(4.4));
console.log("math.floor(-4.4): "+Math.floor(-4.4));


// 3)Math.ceil(number): round a number up to the nearest integer.
console.log("3)Math.ceil(number)------------------");
console.log("math.ceil(4.9): "+Math.ceil(4.9));
console.log("math.ceil(-4.9): "+Math.ceil(-4.9));
console.log("math.ceil(4.4): "+Math.ceil(4.4));
console.log("math.ceil(-4.4): "+Math.ceil(-4.4));


// 4)Math.trunc(number): remove the decimal part of a number.
console.log("4)Math.trunc(number)------------------");
console.log("math.trunc(4.9): "+Math.trunc(4.9));
console.log("math.trunc(-4.9): "+Math.trunc(-4.9));


// 5)Math.pow(number,power): return the value of a number raised to a power.
console.log("5)Math.pow(number,power)------------------");
console.log("math.pow(2,3): "+Math.pow(2,3));
console.log("math.pow(-4,2): "+Math.pow(-4,2));
console.log("math.pow(-4,3): "+Math.pow(-4,3));


// 6)Math.sqrt(number): return the square root of a number.
console.log("6)Math.sqrt(number)------------------");
console.log("math.sqrt(25): "+Math.sqrt(25));
console.log("math.sqrt(23): "+Math.sqrt(23));
console.log("math.sqrt(-25): "+Math.sqrt(-25)); //NaN (bcz) square root of a -ve number is not a real number and js only works with real number in Math.sqrt()



// 7)Math.cbrt(number): return the cube root of a number.
console.log("7)Math.cbrt(number)------------------");
console.log("math.cbrt(27): "+Math.cbrt(27));
console.log("math.cbrt(-27): "+Math.cbrt(-27));
console.log("math.cbrt(23): "+Math.cbrt(23));