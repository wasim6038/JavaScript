const arr = [1, 3, 5, 2, 8, 9]
const arr1 = ["wasim", "akram", 7, 9, "ziya"]

// console.log(arr);
// console.log(arr1);
console.log(arr1[4]);
console.log(arr1.length);  /**finding the length of the array */


arr1.push(7)  /**adding element in array in the last index */
arr1.push("ansari")
arr1.pop()  /**deleting the last element of an array */
// console.log(arr1);

arr1.unshift("raja")   /**adding element in the first index of array it is not suitable for large data */
arr1.shift()   /**deleting the first element of the array */
console.log(arr1);

console.log(arr.slice(1, 5));   /**extract element from array not including the last index & does not effect the original array */
console.log(arr);

// console.log(arr.splice(1, 3));  /**extract element from array with the last index & also remove that element from original array */
console.log(arr);

console.log(arr.concat(arr1));  /**add many array */
const newArr = [...arr, ...arr1]   /**spread method for adding two or more array */
console.log(newArr);


console.log(arr.includes(3));  /**it check the array that given element is present or not */

console.log(arr.indexOf(8));  /**find the index of the element in the array */

console.log(arr.reverse());  /**reverse the array */

const arr3 = [23, 5, 7, [8, 5, 90], 8, [3, 6, [1, 89]]]
console.log(arr3.flat(Infinity));  /**convertimg the complex array into simple array */

console.log(Array.isArray("wasim", "ansari"));  /**to check it is array or not */

console.log(Array.from("wasim"));    /**convert into array */

let score1 = 78
let score2 = 34
let score3 = 90
console.log(Array.of(score1, score2, score3));  /**make an array using set of element */

