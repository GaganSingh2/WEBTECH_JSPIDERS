// Array Advanced Method-------------------
console.log("Array Advanced Method------------");

//1)forEach(function(element,index,array))
console.log("forEach(function(element,index,array))--------------");
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
