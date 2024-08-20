const studentName = "wasim "
const studentmarks = 89

// console.log(studentName + studentmarks); /**It is old method  */

// For concatenate string use this method instead of upper one
// console.log(`Student name is ${studentName} and their marks is ${studentmarks}.`); /**instead of quotetion use astek */

const myNum = new String("wasim.ansari")
console.log(myNum);

console.log(myNum.charAt(8));  /**return the character at that index */
console.log(myNum.indexOf('r')); /** return the index of given string */

console.log(myNum.charCodeAt(6));  /**return the character code of the given index */

console.log(myNum.includes("md"));  /**It check the given string is present or not and also it is case sensitive */

