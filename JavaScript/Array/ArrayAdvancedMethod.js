// Array Advanced Method-------------------
console.log("Array Advanced Method------------");

//1)forEach(function(element,index,array))
console.log("forEach(callbackfunction(element,index,array))--------------");
let arr = ["Gagan","Disha","Karan","Aman"]
console.log("After using Basic forEach(): ");
let ele = arr.forEach(function(element){
    console.log("Element: "+element);
});

console.log("After using Arrow function with forEach(): ");
ele = arr.forEach((val)=>{
    console.log("Element: "+val);
});

console.log("After using Arrow function with forEach(): ");
ele = arr.forEach((val,index)=>{
    console.log("Index: "+index+" Element: "+val);
});

console.log("After using Arrow function with forEach(): ");
ele = arr.forEach((val,index,array)=>{
    console.log("Index: "+index+"-> Element: "+val+"-> Array: "+array);
});

//Q)WAP to apply 10% Discount
console.log("WAP to apply 10% Discount");
let num = [100,200,300]
num.forEach((val,idx)=>{
    console.log("Before Discount: "+val);
    num[idx] = val - val * 10/100
    console.log("After Discount: "+num[idx]);
    
})


//1)map(function(element,index,array))
console.log("map(callBackfunction(element,index,array))--------------");
num = [1,2,3,4,5,6]
console.log("Before using map((): "+num);
let res = num.map((val)=>{
    return val ** 2
}) 
console.log("map(val): "+res);

res = num.map((val,idx)=>{
    return val + idx
})
console.log("map(val,idx): "+res);

// Q)Convert each word in UpperCase
console.log("Q)Convert each word in UpperCase-----");

let ar = ["Gagan","Disha","Karan","Aman"]
arr = ar.map((val)=>{
    return val.toUpperCase()
})
console.log("map(val): "+arr);

//Q)In given array if element is even then sqaure them otherwise cube.
console.log("Q)In given array if element is even then sqaure them otherwise cube.");
console.log("Before Array: "+num);
arr = num.map((val)=>{
    if(val % 2==0){
        return val ** 2
    }
    else{
        return val ** 3
    }
})
console.log("Result Array: "+arr);


//3)find(callbackFunction(element,idx,array)):return first element if condition is true otherwise undefined
console.log("find(callbackFunction(element,idx,array))-------------");
num = [10,8,16,6,9,4,15]
console.log("Before using find(): "+num);
res = num.find((el,i)=>{
    console.log("Iteration: "+(i));
    return el>10
})
console.log("Element: "+res);



//4)filter(callbackFunction(element,idx,array)):return new array, this array contain only satisfies the condition
console.log("filter(callbackFunction(element,idx,array))---------");
num = [10,8,16,6,9,4,15]
console.log("Befor filter(): "+num);

let even = num.filter((val)=>{
    return val % 2===0
})
console.log("Even Array: "+even);
let odd = num.filter((val)=>{
    return val % 2!==0
})
console.log("Odd Array: "+odd);

console.log("Q)Find user, age is greater than 20");

let users = [
 {name:"Aman", age:19},
 {name:"Gagan", age:21},
 {name:"Disha", age:22}
];
let result = users.filter((user)=>{
    return user.age>20
})
console.log("User: ", result);


//5)some(callbackFunction(element,idx,array)):return true,if any one element satisfies the given condition
console.log("some(callbackFunction(element,idx,array))---------");
num = [10,8,16,6,9,4,15]
console.log("Before some(): "+num);
res = num.some((val)=>{
    return val % 2===0
})
console.log("Even found: "+res);

num = [10,8,16,6,8,4,14]
console.log("Before some(): "+num);
res = num.some((val)=>{
    return val % 2!==0
})
console.log("Odd found: "+res);


//6)every(callbackFunction(element,idx,array)):return true,if all element satisfies the given condition, otherwise false
console.log("every(callbackFunction(element,idx,array))---------");
num = [10,8,16,6,9,4,15]
console.log("Before every(): "+num);
res = num.every((val)=>{
    return val % 2===0
})
console.log("All Even found: "+res);

num = [10,8,16,6,8,4,14]
console.log("Before every(): "+num);
res = num.every((val)=>{
    return val % 2===0
})
console.log("All Even found: "+res);


//7)reduce(callbackFunction(accumulator,currElement,idx,array)): used to reduce the array to a single value, accumulator means stores the result from previous iteration, it is accept initial value as second argument(optional)
console.log("reduce(callbackFunction(accumulator,currElement,idx,array))---------");
num = [1,2,3,4]
console.log("Before using reduce(): "+num);
console.log("Q) Find the sum of elements in arrray");
let sum = num.reduce((acc,currVal)=>{
    return acc+currVal
},0) //here, 0 is initial value as second argument this is store in acc
console.log("Sum: "+sum);

// Q) Find the sum of elements in array
num = [10,22,3,20,43,1,0]
console.log("Before using reduce(): "+num);
console.log("Q) Find the sum of elements in arrray");
let max = num.reduce((acc,currVal)=>{
    return acc > currVal ? acc: currVal
})
console.log("Maximum value: "+max);

// Q)Find the frequency for each digit in given array
console.log("Q)Find the frequency for each digit in given array");
num = [1, 2, 3, 4, 5, 6, 3, 2, 1];
console.log("Array: "+num);

let frequency = num.reduce((acc,currVal)=>{
    // console.log(acc);
    
    acc[currVal] = (acc[currVal] || 0)+1
    return acc
},{})
console.log("Frequency: ", frequency);



