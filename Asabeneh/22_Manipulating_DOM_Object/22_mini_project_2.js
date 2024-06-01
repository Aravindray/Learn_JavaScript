// Level 1

console.log('Level 1')

console.log('---Question 1---')

// Function to check prime number
function isPrime(num) {
    if (num < 2) {
        return false
    } else if (num === 2) {
        return true
    }
    let half = Math.floor(num / 2) + 1
    for (let i = 2; i <= half; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

// Center the body
let body = document.body
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

let container = document.querySelector('.container')
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.gap = '0.5rem'
// container.style.border = '2px solid black'
container.style.minHeight = '100vh'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'

let primeCounter = 0
let remainingEvenCounter = 0
let remainingOddCounter = 0

for (let i = 1; i <= 100; i++) {
    let newDiv = document.createElement('div')
    newDiv.className = 'cld-div'
    if (isPrime(i)) {
        primeCounter++
        newDiv.textContent = i
        newDiv.style.backgroundColor = 'red'
        container.appendChild(newDiv)
    } else if (i % 2 === 0) {
        remainingEvenCounter++
        newDiv.textContent = i
        newDiv.style.backgroundColor = '#21bf73'
        container.appendChild(newDiv)
    } else {
        remainingOddCounter++
        newDiv.textContent = i
        newDiv.style.backgroundColor = '#fddb3a'
        container.appendChild(newDiv)
    }
}

// Child div
let styleCldDiv = document.getElementsByClassName('cld-div')

for (let cld of styleCldDiv) {
    cld.style.minWidth = '115px'
    cld.style.minHeight = '115px'
    cld.style.color = 'white'
    cld.style.fontSize = '3rem'
    cld.style.display = 'flex'
    cld.style.justifyContent = 'center'
    cld.style.alignItems = 'center'
}


// Let's add do you know

let detail = document.createElement('details')
let summary = document.createElement('summary')
let para = document.createElement('p')
let span1 = document.createElement('span')
let span2 = document.createElement('span')
let span3 = document.createElement('span')

span1.textContent = `From 1 to 100 there are ${primeCounter} Prime numbers,`
span1.style.color = 'red'

span2.textContent = ` (remaining) ${remainingEvenCounter} Even numbers`
span2.style.color = '#21bf73'

span3.textContent = ` and ${remainingOddCounter} Odd numbers.`
span3.style.color = '#fddb3a'

summary.textContent = 'Do You Know?'
para.appendChild(span1)
para.appendChild(span2)
para.appendChild(span3)

console.log(primeCounter)
console.log(remainingEvenCounter)
console.log(remainingOddCounter)

detail.style.margin = '20px'

detail.appendChild(summary)
detail.appendChild(para)
body.appendChild(detail)
