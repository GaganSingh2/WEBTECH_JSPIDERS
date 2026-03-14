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

//=>to resolve this problem we have to use compareFuntion in the sort()
//for Ascending order: (a,b)=>a-b
//for Descending order: (a,b)=>b-a

arrSort.sort((a,b)=>a-b)
console.log("After Sorting in Ascending using compareFunction: "+arrSort);

arrSort.sort((a,b)=>b-a)
console.log("After Sorting in Descending using compareFunction: "+arrSort);


// 7) reverse()
console.log("reverse()------------");

let revArr = new Array(2,3,5,6,7,8)
console.log("Before Reversing: "+revArr);

revArr.reverse()
console.log("After Reversing: "+revArr);


//8)fill(value, startIdx, endIdx): startIdx and  endIdx is optional if not passed then it take (0,length-1)as a default
console.log("fill(value, startIdx, endIdx)--------");
console.log("Without using fill(): "+revArr);

revArr.fill(9)
console.log("fill(9): "+revArr); //replace all elements with 9

revArr.fill(10,2) //replace all elements with 10 from index 2nd 
console.log("fill(10,2): "+revArr);

revArr.fill(1,1,4) //replace the element from index 1 to 3 with 1(endIdx is exclude)
console.log("fill(1,1,4): "+revArr);

revArr.fill(5,-2,5) //(-2,5) become automatically (-2,-1), so replace the element from index -2 to -2 with 5
console.log("fill(5,-2,5): "+revArr);


revArr.fill(0,-4,-1) //replace the element from index -4 to -2 with value 0
console.log("fill(0,-4,-1): "+revArr);

revArr.fill(19,-2,1) //its not work bcz right to left is not possible
console.log("fill(9,-2,1): "+revArr);





