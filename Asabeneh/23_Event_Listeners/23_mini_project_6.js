// Body

let body = document.body
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.height = '100vh'

// content

let h1 = document.createElement('h1')
let span = document.createElement('span')
h1.textContent = 'Press any Keyboard Key' // You Pressed
let p = document.createElement('p')

// style
span.style.color = '#5bbc7a'
p.style.color = '#5bbc7a'
h1.style.padding = '1rem'
p.style.padding = '1rem'
p.style.width = '100px'
p.style.height = '100px'
p.style.fontSize = '3.5rem'
h1.style.boxShadow = '0.5px 0.5px 5px black'
p.style.boxShadow = '0.5px 0.5px 5px black'
p.style.display = 'grid'
p.style.placeContent = 'center'

body.appendChild(h1)

window.addEventListener('keypress', e => {
    h1.textContent = 'You pressed '
    h1.appendChild(span)
    span.textContent = `${e.key}`
    p.textContent = `${e.keyCode}`
    body.appendChild(p)
})
