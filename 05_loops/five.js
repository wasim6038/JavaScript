// for each loops

const myArray = ["java", "cpp", "ruby", "rust"]

// myArray.forEach( function (item) {
//     console.log(item)
// } )

myArray.forEach( (item) => {
    // console.log(item);
} )

function lang(item) {
    // console.log(item);
}
myArray.forEach(lang)

myArray.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myLang = [
    {
        langName: "python",
        langExtension: "py"
    },
    {
        langName: "javascript",
        langExtension: "js"
    },
    {
        langName: "C++",
        langExtension: "cpp"
    }
]
myLang.forEach( (item) => {
    // console.log(item);
    // console.log(item.langName);
    // console.log(item.langExtension);
    console.log(`${item.langName} extension is ${item.langExtension}`);
    
} )