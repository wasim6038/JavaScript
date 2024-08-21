const myDate = new Date()

console.log(myDate);
// console.log(myDate.toDateString());  /** format are:- Wed Aug 21 2024 */
// console.log(myDate.toLocaleDateString());   /**format are:- 8/21/2024 */
// console.log(myDate.toISOString());  /**format are:- 2024-08-21T21:47:49.288Z */
// console.log(myDate.toString());  /**format are:- Wed Aug 21 2024 21:49:45 GMT+0000 (Coordinated Universal Time) */
// console.log(myDate.toTimeString());   /**format are:- 21:51:16 GMT+0000 (Coordinated Universal Time) */
// console.log(myDate.getMilliseconds());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getDate());
// console.log(myDate.getDay());

// let createDate = new Date(2024, 5, 9)
// let createDate = new Date(2024, 0, 9, 7, 9)
let createDate = new Date("10, 5, 2024")
console.log(createDate.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(createDate.getTime());

