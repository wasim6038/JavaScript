// Generate random color 
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;
// Start changing the background color
const startBgChange = function(){
    if (!intervalId) {
        intervalId = setInterval(bgChange, 1000)
    }

    function bgChange(){
        document.body.style.backgroundColor = randomColor();
    }
}
document.querySelector('#start').addEventListener
('click', startBgChange)

// Stop changing the background color
const stopBgChange = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#stop').addEventListener
('click', stopBgChange)