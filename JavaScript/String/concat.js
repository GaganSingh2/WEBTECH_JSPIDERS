let str1 = 'Gagan'
let str2 = 'Vishal'
// By using + operator
let c = str1 + str2
console.log(c);

//By using concat()method
let res = str1.concat(str2)
console.log(res);

// with space by using + operator
let d = str1+" "+str2
console.log("With SPace using + operator: "+d);

// with space by using concat() method
let e = str1.concat(" ",str2)
console.log("With space using concat method: "+e);

// multiple strings
let f = str1.concat(" ",str2," Gagan", "karan")
console.log("Merge multiple string: "+f);
