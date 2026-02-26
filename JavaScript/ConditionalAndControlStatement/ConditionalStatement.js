//Conditional Statement------
//if statement
console.log("if statement-------");
let age = 23
if(age>18){
    console.log("Eligible for Vote!!");
}


//if-else statement
console.log("if-else statement-------");
age = 17
if(age>18){
    console.log("Eligible for Vote!!");
}
else{
    console.log("Not Eligible for Vote!!");
}


//else-if Ladder
console.log("else-if Ladder--------");
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


//Nested if Statement
console.log("Nested if Statement------");
let balance =  5000
let amount = 3000
if(balance>0){
    if(amount<=balance){
        console.log("Withdraw Successfully");
    }
    else{
         console.log("Insufficient Balance");
    }
}

//Switch Statement
console.log("Switch Statement-----");
let day = 3
switch(day){
    case 1: 
    console.log("Monday");
    break

    case 2: 
    console.log("Tuesday");
    break

    case 3: 
    console.log("Wednesday");
    break

    case 4: 
    console.log("Thursday");
    break

    case 5: 
    console.log("Friday");
    break

    case 6: 
    console.log("Saturday");
    break

    case 7: 
    console.log("Sunday");
    break

    default:
    console.log("Invalid Day");
    
}