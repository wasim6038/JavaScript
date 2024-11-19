const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        console.log(event)
        console.log(event.target)
        if (event.target.id == "blue") {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id == "green") {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id == "purple") {
            body.style.backgroundColor = "magenta"
        }
        if (event.target.id == "grey") {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id == "red") {
            body.style.backgroundColor = event.target.id
        }
        if (event.target.id == "pink") {
            body.style.backgroundColor = "palevioletred"
        }
    })
})