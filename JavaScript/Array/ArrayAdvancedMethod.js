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


