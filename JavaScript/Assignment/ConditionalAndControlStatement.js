// Q1)Assign grades based on the marks
let marks = 49
let grade
if(marks>=90){
    grade = 'A'
}
else if(marks>=75){
    grade = 'B';
}
else if(marks>=50){
    grade = 'C'
}
else{
    grade = 'F'
}
console.log("Grade: "+grade);

//Q2)Find the smallest among three number
let n1 = 3
let n2 = 2
let n3 = 12
if(n1<n2 && n1<n3){
    console.log("n1 is small: "+n1);
}
else if(n2<n3){
    console.log("n2 is small: "+n2);
}
else{
    console.log("n3 is small: "+n3);
}

//Q3)print mulitplication table of a 5
console.log("Table of 5: ");
let v = 5
for(let i=1; i<=10; i++){
    console.log(v+" x "+i+" = "+(v*i));
}


//Q4)Reverse a number using loop
let num = 123456 //654321
console.log("Before Reversing: "+num);
let res = 0
while(num>0){
    let digit = num % 10
    res = res * 10 + digit
    num = Math.floor(num /= 10) //not automaticaly remove last decimal points so i used here floor method
}
console.log("After Reversing: "+res);

//Q5)Count digit in number
num = 12345 //6
console.log("Number: "+num);
let count = 0
while(num>0){
    count++
    num = Math.floor(num /= 10) //not automaticaly remove last decimal points so i used here floor method
}
console.log("Total Digit: "+count);

//Q6)Write a program similar to FizzBuzz (divisible by 3->Fizz, divisible by 5->Buzz , divisible by both->FizzBuzz)
let val = 3
if(val%3==0 && val%5==0){
    console.log("FizzBuzz");
}
else if(val %3==0){
    console.log("Fizz");
}
else if(val % 5==0){
    console.log("Buzz");
}

//Q7)Check if a number is Palindrome
num = 121
let tmp = num
res = 0
while(num>0){
    let digit = num % 10
    res = res * 10 + digit
    num = Math.floor(num /= 10) //not automaticaly remove last decimal points so i used here floor method
}
if(tmp == res){
    console.log("Palindrome bcz: ("+tmp+"=="+res+")");
}
else{
     console.log("Not Palindrome bcz: ("+tmp+"!="+res+")");
}


//Q8)Check if a number is Armstrong number
let value = 153
let cnt = 0
tmp = value
while(tmp>0){
    cnt++
    tmp = Math.floor(tmp /= 10)
}
let armVal = 0
tmp = value
while(tmp>0){
    let digit = tmp % 10
    let pow = 1
    for(let i=0; i<cnt; i++){
        pow *= digit
    }
    armVal += pow
    tmp = Math.floor(tmp /= 10)
}
if(value == armVal){
    console.log("Armstrong Number bcz ("+value+"=="+armVal+")");
}else{
    console.log("Not Armstrong Number bcz ("+value+"!="+armVal+")");
}

//Q9)Print number from 1 to 20 but skip multiplies of 3
for(let i=1; i<=20; i++){
    if(i % 3!=0){
        console.log("Number: "+i);
    }
}