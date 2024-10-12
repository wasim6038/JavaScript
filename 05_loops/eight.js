const myNum = [1, 2, 3, 4, 5, 6, 7]

// const sum = myNum.reduce( function (acc, curr){
//     console.log(`accumulator is ${acc} and current value is ${curr}`);
//     return acc + curr
// }, 0 )

const sum = myNum.reduce( (acc, curr) => acc + curr, 0 )

// console.log(sum);

const shoppingCart = [
    {
        itemName: "Keyboard",
        price: 399
    },
    {
        itemName: "Mouse",
        price: 149
    },
    {
        itemName: "Mouse pad",
        price: 50
    },
    {
        itemName: "joystick",
        price: 1200
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(totalPrice);
