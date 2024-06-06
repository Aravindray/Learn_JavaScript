const message = '30 Days of JavaScript Aravindray'
const body = document.body
const title = document.querySelector('#title')

function returnHex() {
    return Math.floor(Math.random() * 361)
}

function returnBlackWhite() {
    return Math.floor(Math.random() * 2) === 0 ? 'black' : 'white'
}

function returnFontFamily() {
    const fontFamilies = ['Courier New', 'Courier', 'monospace', 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'Almendra Display ','Big Shoulders Stencil Display','Sedgwick Ave Display ','Style Script ','Tiny5']

    return fontFamilies[Math.floor(Math.random() * fontFamilies.length)]
}

setInterval(() => {
    // body.style.backgroundColor = returnBlackWhite() 
    body.style.backgroundColor = `hsl(${returnHex()},100%, 50%)`
    title.innerHTML = ''
    title.style.fontFamily = returnFontFamily()
    for (let char of message) {
        let span = `<span style="color: hsl(${returnHex()},100%,50%);">${char}</span>`
        title.innerHTML += span
    }
}, 3000);
