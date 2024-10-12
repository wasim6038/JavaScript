const myNums = [1, 2, 3, 4, 5, 6]

// const newNums = myNums.map( (num) => { return num + 10})

const newNums = myNums
                .map((num) => num * 5 )
                .map( (num) => num + 3)
                .filter( (num) => num >= 20)

console.log(newNums);