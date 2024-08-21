// console.log(Math);

// console.log(Math.abs(-37));  /**it used to absolute the no. or mod of no. */
// console.log(Math.round(47.7));   /**round of the given number */
// console.log(Math.ceil(46.4));  /**always rounding to the upper number */
// console.log(Math.floor(46.8));  /**always round to its lower number */

// console.log(Math.max(4, 75, 1, 85));  /**find the maximum number */
// console.log(Math.min(14, 45, 12, 3, 7));  /**find the minimum number */

console.log(Math.random());  /**generate random number between 0 to 1 */

console.log(Math.random() * 6);  /**generate random number between 0 to 6 */

console.log((Math.random() * 6) + 1);  /**generate random number between 1 to 6 */

console.log(Math.floor((Math.random() * 6)) + 1);  /**generate random number between 1 to 6  without decimal*/

const max = 9
const min = 3
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  /**generate the random number between given range */
