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