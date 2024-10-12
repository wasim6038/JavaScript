// for..of loop

const myArray = [1, 3, 4, 9, 3]
for (const num of myArray) {
    // console.log(num);
    
}

const name = "Wasim Ansari"
for (const char of name) {
    // if (char == " ") {
    //     continue
    // }

    // console.log(char);
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("D", "Dubai")
map.set("C", "China")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

// const myObject = {
//     'name1': "wasim",
//     'name2': "Akram"
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);   /** Error because object is not iterable */
    
// }

// Use for in loop for object