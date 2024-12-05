const box = document.querySelector('.box')

setInterval(function(){
    let time = new Date();
    box.innerHTML = time.toLocaleTimeString();

}, 1000)