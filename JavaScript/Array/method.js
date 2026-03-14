// Mutating methods of Array-----------------------------
console.log("Mutating Method of Array------------------");
let arr = new Array(5,1,4,"Disha",2,9)

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

arr.unshift(10,20) 
// arr.unshift()//don't change
console.log("After unshift: "+arr);


//4) shift(): remove element at first of the array,slower than pop() bcz move each element one by one, if pass index then ignore it
console.log("shift()-----------");
console.log("Before using shift: "+arr);

arr.shift() 
// arr.shift(2)//index avoid
console.log("After shift: "+arr);
console.log("Remove element: "+arr.shift());

 
//5) splice(startIdx, deleteCount, item1, item2,.........,item-n)
console.log("splice(startIdx, deleteCount, item1, item2,.........,item-n)---------------");

console.log("Before using splice: "+arr);

arr.splice(1,2) //start from index 1 and remove 2 elements
console.log("splice(1,2): "+arr);

arr.splice(1,0,15) //start at index 1 delete 0 elements insert 15 at startIdx
console.log("splice(1,0,15): "+arr);

arr.splice(1,1,25) //remove 1 element at index 1, and insert 25
console.log("splice(1,1,25): "+arr);

arr.splice(2,0,3,4) //start at index 2, delete 0 element and insert 3,4 from start at index 2.
console.log("splice(2,0,3,4): "+arr);

let remove = arr.splice(1,2) //start at index 1 and delete 2 elements
console.log("splice(1,2): "+remove);

arr.splice(1) // start at index 1 and delete all the elements after that
console.log("splice(1): "+arr);


//6) sort(compareFunction): bydefault it is convert all elements in string then perfrom Unicode comparision and sort on that basis.
// compareFunction is mandatory if we want to sort the number.
console.log("sort(compareFunction)--------------");

let arrSort = ["Gagan","Disha","Karan","Aman"]
console.log("Before Sorting: "+arrSort);

arrSort.sort()
console.log("After Sorting in Ascending: "+arrSort); //Ascending by Default
arrSort.sort((a,b)=>b.localeCompare(a))
console.log("After Sorting in Descending using compareFunction: "+arrSort); //Descending by using compareFunction

let arr5=["Apple",{},"apple",()=>{},"Ball",10,"ball",30,"zomato","swiggy",40,"Instagram","zepto","Minutes"]
console.log("Sort: "+arr5.sort())

arrSort = [10,100,2,200,19]
console.log("Before Sorting: "+arrSort);
arrSort.sort()//it will convert all the number in string and the perfrom the unicode comparision instead of perfrom comparision on exact number.
console.log("After Sorting without using compareFunction: "+arrSort);

//to resolve this problem we have to use compareFuntion in the sort()
//for Ascending order: (a,b)=>a-b
//for Descending order: (a,b)=>b-a

arrSort.sort((a,b)=>a-b)
console.log("After Sorting in Ascending using compareFunction: "+arrSort);

arrSort.sort((a,b)=>b-a)
console.log("After Sorting in Descending using compareFunction: "+arrSort);


