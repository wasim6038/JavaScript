// For loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 8) {
        // console.log(`${element} is lucky number`);
        
    }
    // console.log(element);
    
}

// Printing table
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}` );
        
    }
   
}

const myArray = ["wasim", "Ansari", "Akram", "Dilshad"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (i > 0 && i <= 2) {
        // console.log(element);
        
    }
    // if (i == 3) {
    //     break 
    // }
    // console.log(element);
}

// break and continue

// break
for (let index = 1; index <= 15; index++) {
    if (index == 9) {
        break
    }
    // console.log(index);
        
}

// continue
for (let index = 1; index <= 15; index++) {
    if (index == 9) {
        continue
    }
    // console.log(index);
        
}