const balance = 839
console.log(balance);

const newBalance = new Number(299.67)  /**In this the datatype is only number */
console.log(newBalance);

console.log(newBalance.toExponential(4));

const balance1 = 62762781
console.log(balance1.toLocaleString("en-IN"));  /**represent the big number in given format */

console.log(balance1.toString());

const balance2 = 7286.397382
console.log(balance2.toFixed(2));  /**fixed the decimal value to the given index */

console.log(balance2.toPrecision(7));
