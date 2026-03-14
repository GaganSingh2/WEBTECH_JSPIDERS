// Mutating methods of Array-----------------------------
console.log("Mutating Method of Array------------------");
let arr = new Array(5,1,4,2,9)

// 1) push(ele1,ele2,.........,ele-n): add at the end of array
console.log("push(ele1,ele2,.....,ele-n)---------------------");
console.log("Array: "+arr);

arr.push(19,10,"Gagan")
console.log("After Pushing: "+arr);


// 2) pop(): remove the last element of array, return removed element
console.log("pop()---------------------");
console.log("Array: "+arr);

arr.pop()
console.log("After Poping: "+arr);
let pEle = arr.pop(3)//if we passed index then it is avoid it and remove the last element
console.log("After Poping: "+arr+" Poped element: "+pEle);
let arr2 = new Array()//if array is empty and then we try to pop() the element then it gives undefined as a result
console.log("Poped Element: "+arr2.pop());


 
