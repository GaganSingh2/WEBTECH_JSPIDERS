// Q1)Generate the 4 digit OTP
console.log("Q1)Generate the 4 digit OTP?");
let min = 1000
let max = 9999


// after this otp generate from 0 to 8999 instead of 1000 to 9999 it means some times it will generate otp like 98,43,532, but this otp's are break the qus bcz we want only 4-digit otp so for this reasone we add min at the end to ensure the generated otp only 4 digit
// let otp = Math.floor(Math.random() * (max-min+1))
// console.log("OTP: "+otp);



let otp = Math.floor(Math.random() * (max-min+1)+min)
console.log("OTP: "+otp);

/*
// How it works internally-----
console.log("How it works Internally---------");

// Step1: generate randome number
console.log("Step1: generate randome number--------------");
let otpD = Math.random()
console.log("Step1 OTPD: "+otpD);

// Step2: multiply the value by (max-min+1)
console.log("Step2: multiply the value by (max-min+1)--------------");
otpD = otpD * (max-min+1)
console.log("Step2 OTPD: "+otpD);

// Step3: add min at the end to ensure the 4 digit otp
console.log("Step3: add min at the end to ensure the 4 digit otp--------------");
otpD = otpD + min
console.log("Step3 OTPD: "+otpD);

// Step4: use Math.floor() to remove the decimal parts
console.log("Step4: use Math.floor() to remove the decimal parts--------------");
otpD = Math.floor(otpD)
console.log("Step4 OTPD(final OTP): "+otpD);
*/



// Q2)Generate generic OTP function (any length)
console.log("Q2)Generate generic OTP function (any length)");

function generateOTP(length){
    let opt = ""

    for(let i=0; i<length; i++){
        opt += Math.floor(Math.random() * 10) //0-9 (add one - one digit at each iteration)
    }
    return opt
}
console.log("OTP of 4 digit: "+generateOTP(4));
console.log("OTP of 6 digit: "+generateOTP(6));


// Q3)Generate generic OTP function with Alphanumeric(Numbers + Alphabets) (any length)
console.log("Q3)Generate generic OTP function with Alphanumeric(Numbers + Alphabets) (any length)?");

function generatedOTP(length){
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let otp = "";
    for(let i=0; i<length; i++){
        otp += chars[Math.floor(Math.random() * chars.length)]
    }

    return otp
}
console.log("OTP of 3-digit: "+generatedOTP(3));
console.log("OTP of 4-digit: "+generatedOTP(4));
console.log("OTP of 6-digit: "+generatedOTP(6));
