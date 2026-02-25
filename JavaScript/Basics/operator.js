// Arithmetic Operator
console.log("Arithmetic Operator-------");
let a = 5+3
console.log("Addition: "+a);
let b = 5-3
console.log("Subtraction: "+b);
let c = 5*3
console.log("Multiplication: "+c);
let d = 6/2
console.log("Divide: "+d);
let e = 6%4
console.log("Modulas: "+e);
let f = 2 ** 2
console.log("Exponentiation: "+f);
a = 5 + "5"
console.log("Concatenation: "+a); //55 (bcz when + operator is used and one value is string, then js converts everything in String)
a = 5-"2"
console.log("Concatentaion: "+a); //3 (bcz when except + operator is used and value is String then js convert "2"(String) to 2(number) and always return numeric if we used any operator except +) 


//Assignment Operator
console.log("Assignment Operator---------");
let g = 20
console.log("Assign: "+g);
g += 10
console.log("Add and Assign: "+g);
g -= 10
console.log("Subtract and Assign: "+g);
g *= 2
console.log("Multiply and Assign: "+g);
g /= 3
console.log("Divide and Assign: "+g);
g %= 2
console.log("Modulas and Assign: "+g);


//Relational Operator
console.log("Relational Operator--------");
console.log("Less Than: "+(3<5));
console.log("Greater Than: "+(5>2));
console.log("Less Than or Equal to: "+(5<=5));
console.log("Greater Than or Equal to: "+(5>=5));

//Losely Equal to(==) and Strictly Equal to(===)----
console.log("Losely Equal to(==) and Strictly Equal to(===)---------");
console.log("5==5: "+(5==5));
console.log("5=='5': "+(5=='5')); //Here js convert "5" to 5 automaticaly (Type Coercian)
console.log("5===5: "+(5===5));
console.log("5==='5': "+(5==='5')); //Here js not convert "5" to 5


//Logical Operator---
console.log("Logical Operator---");
console.log("Logical AND: "+(5 && 3));
console.log("Logical OR: "+(5 || 3));
console.log("Logical NOT: "+(!5));


//Ternary Operatorr------
console.log("Ternary Operator--------");
console.log("5<2: "+((5<2)? true: false));
console.log("5>2: "+((5>2)? true: false));


//typeOf Operator----------
console.log("typeOf Operator------");
console.log("typeOf 10: "+typeof 10);
console.log("typeOf Hello: "+typeof "Hello");
console.log("typeOf true: "+typeof true);
let h
console.log("typeOf h: "+typeof h);
console.log("typeOf null: "+typeof null); //Object (this is the bug of js, null is not really an object)

console.log("typeOf gagan: "+typeof 'gagan');
console.log("typeOf (typeOf gagan): "+typeof (typeof 'gagan'));

console.log("typeOf 10: "+typeof 10);
console.log("typeOf (typeOf 10): "+typeof (typeof 10));

console.log("typeOf NaN: "+typeof NaN);
console.log("typeOf (typeOf NaN): "+typeof (typeof NaN));

//all 3 give false bcz NaN is not equal to anything
console.log("NaN==NaN: "+(NaN==NaN)); 
console.log("NaN===NaN: "+(NaN===NaN));
console.log("NaN==4: "+(NaN==4)); 
console.log("NaN+4: "+(NaN+4)); //NaN (bcz NaN is not eqaul to anything so its not perfrom any operation)





