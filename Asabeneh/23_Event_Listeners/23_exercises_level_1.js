// Center the body

let body = document.body
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.width = '80%'
body.style.margin = '0 auto'

let main = document.querySelector('main')
main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'

// Add title

let title = document.querySelector('#title')
title.textContent = 'Number Generator'

function hue() {
    let count = 0
    if (count > 360) {
        count = 0
    }
    function increaseCount() {
        count += 5
        return count
    }
    return increaseCount
}

let value = hue()

setInterval(() => {
    title.style.color = `hsl(${value()}, 100%, 50%)`
}, 1000);

// inputButton

let inputButton = document.querySelector('#inputButton')
let input = document.querySelector('#userInput')
let ifNotValid = document.querySelector('#ifNotValid')
let button = document.querySelector('#generateNumbers')

button.textContent = 'Generate Numbers'

// inputButton style

inputButton.style.display = 'flex'
inputButton.style.gap = '0.5rem'
button.style.backgroundColor = 'lime'
button.style.color = 'white'
button.style.fontSize = '1.5rem'
button.style.borderColor = 'lime'
input.style.fontSize = '1.5rem'
input.style.border = '2px solid lime'
ifNotValid.style.color = 'red'

// input validation

let userValue

function checkCorrectness() {
    userValue = input.value
    try {
        userValue = parseInt(userValue)
        if (isNaN(userValue)) {
            return false
        } else {
            return true
        }
    } catch (error) {
        console.error(error)
        return false
    }
}

// container

let container = document.querySelector('#container')
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.gap = '0.5rem'

button.addEventListener('click', () => {
    let result = checkCorrectness()
    if (result) {
        container.innerHTML = ''
        startTheLoop()
    } else {
        ifNotValid.textContent = 'Not a valid Number'
        container.innerHTML = ''
    }
})

function isPrime(num) {
    let end = Math.floor(num / 2) + 1
    if (num < 2) {
        return false
    } else if (num === 2) {
        return true
    } else {
        for (let i = 2; i <= end; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}

function startTheLoop() {
    for (let i = 1; i <= userValue; i++) {
        let newDiv = document.createElement('div')
        newDiv.style.minHeight = '50px'
        newDiv.style.minWidth = '50px'
        newDiv.style.padding = '1rem'
        newDiv.style.fontSize = '1.5rem'
        newDiv.textContent = i
        newDiv.style.display = 'flex'
        newDiv.style.justifyContent = 'center'
        newDiv.style.alignItems = 'center'
        container.appendChild(newDiv)
        if (isPrime(i)) {
            newDiv.style.backgroundColor = 'red'
        } else if (i % 2 === 0) {
            newDiv.style.backgroundColor = '#21bf73'
        } else {
            newDiv.style.backgroundColor = '#fddb3a'
        }
    }
}
