// 1) Insertion in Array---------------
let arr = new Array(5)

console.log("Insertion in Array----------");
// arr[0] = 10
arr[1] = 'Gagan'
arr[2] = 'Disha'
arr[3] = 'Pawan'
arr[4] = 10.9

console.log("Array after Insertion: "+arr);

//2) Modification in Array
console.log("Modification in Array----------");
arr[0] = 10
arr[3] = 40
arr[4] = -10.9
console.log("After Modification: "+arr);


//3)Deletion in Array
console.log("Deletion in Array----------");

delete arr[1]
delete arr[3]
console.log("After Deletion: "+arr);
