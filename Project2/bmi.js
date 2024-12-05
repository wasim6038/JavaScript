const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault()

    const heights = parseInt(document.querySelector("#height").value)
    const weights = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    if (heights == '' || heights < 0 || isNaN(heights)) {
        result.innerHTML = `Please give a valid height ${heights}`
    } else if (weights == '' || weights < 0 || isNaN(weights)) {
        result.innerHTML = `Please give a valid weight ${weights}`
    } else{
        const bmi = (weights / ((heights*heights) / 10000)).toFixed(2)

        result.innerHTML = `<span>${bmi}</span><br>`
        if(bmi < 18.6){
            result.append(' Under Weight')
        } else if (bmi > 18.6 && bmi < 24.9){
            result.append(' Normal Range')
        } else if (bmi > 24.9){
            result.append(' Overweight')
        }
    }
    
})