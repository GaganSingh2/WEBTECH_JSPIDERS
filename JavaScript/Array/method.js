// Mutating methods of Array-----------------------------
console.log("Mutating Method of Array------------------");
let arr = new Array(5,1,4,2,9)

// 1) push(ele1,ele2,.........,ele-n): add at the end of array
console.log("push(ele1,ele2,.....,ele-n)---------------------");
console.log("Before using push(): "+arr);

arr.push(19,10,"Gagan")
// arr.push() //not change
console.log("After Pushing: "+arr);


// 2) pop(): remove the last element of array, return removed element
console.log("pop()---------------------");
console.log("Before using pop: "+arr);

arr.pop()
console.log("After Poping: "+arr);
let pEle = arr.pop(3)//if we passed index then it is avoid it and remove the last element
console.log("After Poping: "+arr+" Poped element: "+pEle);
let arr2 = new Array()//if array is empty and then we try to pop() the element then it gives undefined as a result
console.log("Poped Element: "+arr2.pop());


//3) unshift(ele1,ele2,...,ele-n): add element at beginning of the array,slower than push() bcz move each element one by one
console.log("unshift(ele1,ele2,.....,ele-n)-----------");
console.log("Before using unshift: "+arr);

arr.unshift(10,20,"Disha") 
// arr.unshift()//don't change
console.log("After unshift: "+arr);


//4) shift(): remove element at first of the array,slower than pop() bcz move each element one by one, if pass index then ignore it
console.log("shift()-----------");
console.log("Before using shift: "+arr);

arr.shift() 
// arr.shift(2)//index avoid
console.log("After shift: "+arr);
console.log("Remove element: "+arr.shift());

 
