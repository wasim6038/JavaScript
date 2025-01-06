const pressKeyboard = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    pressKeyboard.innerHTML += `<br> Press key are '${e.key}' 
    and Keycode is '${e.keyCode}'`
})